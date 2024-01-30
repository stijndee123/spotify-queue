import { ReactNode } from 'react';
import { FaArrowsRotate } from 'react-icons/fa6';
import { cn } from '../lib/utils';

export interface ISectionProps {
  id: string;
  title: string;
  description?: string;
  className?: string;
  children: ReactNode;
  loading?: boolean;
}

export function Section({
  id,
  title,
  description,
  className,
  children,
  loading,
}: ISectionProps) {
  return (
    <section id={id} className={cn('flex flex-col gap-3', className)}>
      <div className='flex flex-col'>
        <h2 className='flex flex-row items-center justify-start gap-3 text-xl font-bold text-zinc-800 dark:text-zinc-200'>
          {title}
          {loading && (
            <FaArrowsRotate className='animate-spin text-sm text-zinc-600 dark:text-zinc-300' />
          )}
        </h2>
        {description && (
          <span className='text-xs text-zinc-400 dark:text-zinc-500'>
            {description}
          </span>
        )}
      </div>
      {children}
    </section>
  );
}
