import { SpotifyAccessToken } from '@prisma/client';
import { IPlaybackQueue, ISong } from '../lib/models';
import { Database } from './database';
import {
  ISpotifySearchResult,
  ISpotifyUserQueueResult,
  convertSpotifySongModel,
} from './spotify.models';

async function refreshAccessToken(
  token: SpotifyAccessToken
): Promise<SpotifyAccessToken> {
  console.log('Refreshing access token');
  const clientId = `${process.env.SPOTIFY_CLIENT_ID}`;
  const response: Response = await fetch(
    'https://accounts.spotify.com/api/token',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${clientId}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: token.refreshToken,
        client_id: clientId,
      }),
      cache: 'no-store',
    }
  );
  if (!response.ok) throw new Error('Failed to refresh access token');
  const json = await response.json();
  return await Database.updateToken(
    token.id,
    json.access_token,
    new Date(Date.now() + json.expires_in * 1000)
  );
}

async function getToken() {
  let token = await Database.getAccessToken();
  if (!token) throw new Error('No Spotify token found');
  if (token.expiresAt < new Date()) token = await refreshAccessToken(token);
  return token;
}

async function getPlaybackQueue(): Promise<IPlaybackQueue> {
  let token = await getToken();
  const response: Response = await fetch(
    'https://api.spotify.com/v1/me/player/queue',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
      next: {
        revalidate: 20,
      },
    }
  );
  if (!response.ok) throw new Error('Failed to get playback queue');
  const json: ISpotifyUserQueueResult =
    (await response.json()) as ISpotifyUserQueueResult;
  return {
    currentlyPlaying: json.currently_playing
      ? convertSpotifySongModel(json.currently_playing)
      : null,
    queue: json.queue.map((song) => convertSpotifySongModel(song)),
  };
}

async function search(searchTerm: string): Promise<ISong[]> {
  let token = await getToken();
  const response: Response = await fetch(
    `https://api.spotify.com/v1/search?q=${searchTerm}&type=track`,
    {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    }
  );
  if (!response.ok) throw new Error('Failed to search');
  const json = (await response.json()) as ISpotifySearchResult;
  return json.tracks.items.map((song) => convertSpotifySongModel(song));
}

async function addSongToQueue(songId: string): Promise<void> {
  let token = await getToken();
  const response: Response = await fetch(
    `https://api.spotify.com/v1/me/player/queue?uri=spotify:track:${songId}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    }
  );
  if (!response.ok) throw new Error('Failed to add song to queue');
}

export const SpotifyApiMethods = {
  getPlaybackQueue,
  search,
  addSongToQueue,
};
