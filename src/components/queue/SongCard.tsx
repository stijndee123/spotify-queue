import Image from 'next/image';
import { ReactNode } from 'react';
import { HiMiniSpeakerWave } from 'react-icons/hi2';
import { Card } from '../ui/card';

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

function truncateString(text: string, maxCharacters: number) {
  if (text.length > maxCharacters) return text.slice(0, maxCharacters) + '...';
  return text;
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
    <Card className='flex w-full items-center gap-4 rounded-lg p-2 dark:border-zinc-700 dark:bg-zinc-800'>
      <Image
        alt='Cover'
        className='flex-initial rounded-md'
        width={50}
        height={50}
        src={coverUrl}
        style={{
          aspectRatio: '50/50',
        }}
      />
      <div className='flex flex-1 flex-col justify-between overflow-hidden leading-tight'>
        <span className='truncate text-xs font-semibold'>
          {truncateString(title, 30)}
        </span>
        <span className='text-xs dark:text-zinc-400'>
          {truncateString(artists, 40)}
        </span>
      </div>
      <div className='flex flex-initial items-center justify-center'>
        {children ? (
          <>{children}</>
        ) : currentlyPlaying ? (
          <HiMiniSpeakerWave className='text-lg text-green-500 drop-shadow-lg dark:text-green-500' />
        ) : (
          <span className='text-xs'>{convertDuration(duration)}</span>
        )}
      </div>
    </Card>
  );
}
