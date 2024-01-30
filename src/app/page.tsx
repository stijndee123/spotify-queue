import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { Header } from '../components/Header';
import { PlaylistsSection } from '../components/playlists/PlaylistsSection';
import { QueueSection } from '../components/queue/QueueSection';
import { QueryKeys } from '../lib/query.keys';
import { getPlaybackQueue } from '../server/actions';

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.playbackQueue],
    queryFn: getPlaybackQueue,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Header />
      <main className='mx-auto flex h-full max-w-xl flex-col gap-10 px-5 py-5'>
        <PlaylistsSection />
        <QueueSection />
        <footer className='flex items-center justify-center pb-5'>
          <a
            href='https://github.com/Drischdaan'
            target='_blank'
            className='text-center text-xs text-gray-400'
          >
            Made with ❤️ by drischdaan
          </a>
        </footer>
      </main>
    </HydrationBoundary>
  );
}
