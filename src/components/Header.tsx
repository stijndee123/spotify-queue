import { FaBars } from 'react-icons/fa6';

export function Header() {
  return (
    <header className='flex items-center border-b bg-white p-4 shadow-lg dark:border-zinc-800 dark:bg-zinc-800'>
      <h1 className='flex-1 text-lg font-bold uppercase'>Warteschlange</h1>
      <FaBars />
    </header>
  );
}
