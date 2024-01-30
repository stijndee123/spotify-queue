import { Section } from '../Section';
import { PlaylistCard } from './PlaylistCard';

export function PlaylistsSection() {
  return (
    <Section
      id='playlists'
      title='Playlisten'
      description='Alle Playlisten die benutzt werden'
    >
      <div className='grid grid-cols-2 gap-2'>
        <PlaylistCard
          href='https://open.spotify.com/playlist/38bqIPyv8JUss1INV55vHj?si=a7ed35a2f0664cf6'
          coverUrl='https://i.scdn.co/image/ab67706c0000da844a4c09439cc7ac7f71924d20'
          title='Rollender Alleinunterhalter'
        />
        <PlaylistCard
          href='https://open.spotify.com/playlist/7e25JXBBAV4II0Jndx5cDz?si=f3afc00fbd6f401e'
          coverUrl='https://i.scdn.co/image/ab67706c0000da84789db267233ba13ef8ecd7d6'
          title='Rollender DJ'
        />
      </div>
    </Section>
  );
}
