import Image from 'next/image';
import { ReactNode } from 'react';
import { HiMiniSpeakerWave } from 'react-icons/hi2';

export interface ISongCardProps {
  title: string;
  artists: string;
  duration: number;
  coverUrl: string;
  currentlyPlaying?: boolean;
  children?: ReactNode;
}

function convertDuration(duration: number) {
  const minutes = Math.floor(duration / 60000);
  const seconds = ((duration % 60000) / 1000).toFixed(0);
  return `${minutes}:${Number(seconds) < 10 ? '0' : ''}${seconds}`;
}

function renderChildren(
  duration: number,
  currentPlaying?: boolean,
  children?: ReactNode
) {
  if (children) return children;
  if (currentPlaying)
    return (
      <HiMiniSpeakerWave className='text-lg text-green-600 dark:text-green-400' />
    );
  return (
    <div className='text-xs text-gray-500 dark:text-gray-400'>
      {convertDuration(duration)}
    </div>
  );
}

export function SongCard({
  title,
  artists,
  duration,
  coverUrl,
  currentlyPlaying,
  children,
}: ISongCardProps) {
  return (
    <div className='flex items-center gap-4'>
      <Image
        alt='Cover'
        className='rounded-lg border-2 object-cover p-1 dark:border-zinc-800'
        height={60}
        src={coverUrl}
        style={{
          aspectRatio: '60/60',
        }}
        width={60}
      />
      <div className='flex-1'>
        <div className='text-sm font-medium'>{title}</div>
        <div className='text-xs text-gray-500 dark:text-gray-400'>
          {artists}
        </div>
      </div>
      {renderChildren(duration, currentlyPlaying, children)}
    </div>
  );
}
