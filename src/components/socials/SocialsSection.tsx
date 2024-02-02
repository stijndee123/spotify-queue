import { FaSpotify } from 'react-icons/fa6';
import { SiLinktree } from 'react-icons/si';
import { Section } from '../Section';
import { Button } from '../ui/button';

export function SocialsSection() {
  return (
    <Section id='socials' title='Socials'>
      <div className='flex flex-col gap-2'>
        <Button className='gap-2' variant='secondary' asChild>
          <a
            href='https://open.spotify.com/user/wqqh06uhneiz0mm94aqsgzhte?si=9f62c1c7d60c40d8'
            target='_blank'
          >
            <FaSpotify className='text-lg' />
            Spotify
          </a>
        </Button>
        <Button className='gap-2' variant='secondary' asChild>
          <a href='https://linktr.ee/Drischdaan' target='_blank'>
            <SiLinktree className='text-base' />
            Linktree
          </a>
        </Button>
      </div>
    </Section>
  );
}
