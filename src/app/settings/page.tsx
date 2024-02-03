import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../components/ui/button';

export default async function Settings() {
  return (
    <div className='mx-auto flex h-full max-w-xl flex-col items-center justify-start gap-5 px-5 py-5'>
      <h2 className='text-center text-xl font-bold'>Kein Zugriff</h2>
      <Image
        src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3BtNzFwOWY4ejdxcmRuZnI5NXNndTRmN2R0dDU0dDJzeTBidTNwdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohzdQ1IynzclJldUQ/giphy.gif'
        alt='GIF'
        width={500}
        height={500}
        className='w-full rounded-lg'
      />
      <Button variant='purple' className='w-full' asChild>
        <Link href='/'>Zurück</Link>
      </Button>
    </div>
  );
}
