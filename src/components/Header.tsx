import Link from 'next/link';
import { FaBars } from 'react-icons/fa6';

export function Header() {
  return (
    <header className='flex items-center border-b bg-white p-4 shadow-lg dark:border-zinc-800 dark:bg-zinc-800'>
      <Link href='/' className='flex-1'>
        <h1 className='text-lg font-bold uppercase text-indigo-400'>
          Pfusch am Bau
        </h1>
      </Link>
      <Link href='/settings'>
        <FaBars />
      </Link>
    </header>
  );
}
