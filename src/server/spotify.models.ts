import { ISong } from '../lib/models';

export interface ISpotifySong {
  id: string;
  name: string;
  album: {
    images: { url: string; width: number; height: number }[];
  };
  artists: { name: string }[];
  duration_ms: number;
}

export interface ISpotifyUserQueueResult {
  currently_playing: ISpotifySong;
  queue: ISpotifySong[];
}

export interface ISpotifySearchResult {
  tracks: {
    total: number;
    items: ISpotifySong[];
  };
}

export function convertSpotifySongModel(spotifySong: ISpotifySong): ISong {
  return {
    id: spotifySong.id,
    title: spotifySong.name,
    coverUrl:
      spotifySong.album.images.length > 0
        ? spotifySong.album.images[0].url
        : '',
    artists: spotifySong.artists.map((a) => a.name).join(', '),
    duration: spotifySong.duration_ms,
  };
}
