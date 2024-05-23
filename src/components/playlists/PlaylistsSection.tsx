import { Section } from '../Section';
import { PlaylistCard } from './PlaylistCard';

export function PlaylistsSection() {
  return (
    <Section id='playlists' title='Playlists'>
      <div className='grid grid-cols-2 gap-2'>
        <PlaylistCard
          href='https://open.spotify.com/playlist/6AmXFkJfSgo9YuGuRkqU27?si=0033ef0afb174142'
          coverUrl='https://i2o.scdn.co/image/ab67706c0000cfa38cc2ddb58520590910d8c794'
          title='DnB Enjoyer'
        />
        <PlaylistCard
          href='https://open.spotify.com/playlist/6uFuZqnEYDFXW5Sc6h35FZ?si=77ca587db89a4b41'
          coverUrl='https://i2o.scdn.co/image/ab67706c0000cfa3d904fd3273d9c03ae4cedca8'
          title='alleinunterhalter'
        />
      </div>
    </Section>
  );
}
