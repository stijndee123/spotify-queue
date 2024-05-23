'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowRotateRight } from 'react-icons/fa6';
import { z } from 'zod';
import { ISong } from '../../lib/models';
import { search } from '../../server/actions';
import { SongCard } from '../queue/SongCard';
import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem } from '../ui/form';
import { Input } from '../ui/input';
import { ScrollArea } from '../ui/scroll-area';

export interface IAddSongFormProps {
  onAddSong: (song: ISong) => void;
}

const formSchema = z.object({
  searchTerm: z.string().min(1).max(200),
});

export function AddSongForm({ onAddSong }: IAddSongFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchTerm: '',
    },
  });
  const [searchResults, setSearchResults] = useState<ISong[]>([]);
  const [loading, setLoading] = useState(false);
  const onSubmit = () => {
    setLoading(true);
    search(form.getValues().searchTerm).then((results) => {
      setSearchResults(results);
      setLoading(false);
    });
  };
  return (
    <div className='flex flex-col gap-2 p-3'>
      <Form {...form}>
        <form
          className='flex w-full flex-row gap-2'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='searchTerm'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormControl>
                  <Input placeholder='Search' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type='submit' variant={'secondary'}>
            Search
          </Button>
        </form>
      </Form>
      <ScrollArea className='h-96 overflow-y-auto' type='always'>
        <div className='flex flex-col gap-2'>
          {(searchResults.length === 0 || loading) && (
            <div className='flex w-full items-center justify-center py-4'>
              <span className='text-sm text-zinc-400 dark:text-zinc-500'>
                {loading ? (
                  <FaArrowRotateRight className='animate-spin' />
                ) : (
                  'No results'
                )}
              </span>
            </div>
          )}
          {searchResults.length > 0 &&
            !loading &&
            searchResults.map((song, index) => (
              <SongCard key={index} {...song}>
                <Button className='text-xs' onClick={() => onAddSong(song)}>
                  Add
                </Button>
              </SongCard>
            ))}
        </div>
      </ScrollArea>
    </div>
  );
}
