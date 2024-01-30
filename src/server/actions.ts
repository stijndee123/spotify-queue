'use server';

import { cookies } from 'next/headers';
import { IPlaybackQueue, ISong } from '../lib/models';
import { SpotifyApiMethods } from './spotify.api';

export async function getPlaybackQueue(): Promise<IPlaybackQueue> {
  const _ = cookies(); // Disable caching
  return await SpotifyApiMethods.getPlaybackQueue();
}

export async function search(searchTerm: string): Promise<ISong[]> {
  console.log('Searching for: ' + searchTerm);
  return await SpotifyApiMethods.search(searchTerm);
}

export async function addSongToQueue(songId: string): Promise<void> {
  console.log('Adding song to queue: ' + songId);
  return await SpotifyApiMethods.addSongToQueue(songId);
}
