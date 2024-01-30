import Image from 'next/image';

export interface IPlaylistCardProps {
  href: string;
  title: string;
  coverUrl: string;
}

export function PlaylistCard({ href, title, coverUrl }: IPlaylistCardProps) {
  return (
    <a
      href={href}
      target='_blank'
      className='flex aspect-square flex-col rounded-lg border-2 dark:border-zinc-800'
    >
      <Image
        src={coverUrl}
        alt='Cover'
        width={200}
        height={200}
        className='w-full flex-1 rounded-t-lg'
      />
      <div className='flex-initial p-2'>
        <h3 className='text-xs font-medium'>{title}</h3>
      </div>
    </a>
  );
}
