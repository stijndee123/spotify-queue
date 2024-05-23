'use client';

import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { ISong } from '../../lib/models';
import { QueryKeys } from '../../lib/query.keys';
import { addSongToQueue } from '../../server/actions';
import { Credenza, CredenzaContent, CredenzaTrigger } from '../Credenza';
import { Button } from '../ui/button';
import { AddSongForm } from './AddSongForm';

export function AddSongButton() {
  const [open, setOpen] = useState(false);
  const client: QueryClient = useQueryClient();
  const onAddSong = (song: ISong) => {
    setOpen(false);
    addSongToQueue(song.id)
      .then(() =>
        client.refetchQueries({ queryKey: [QueryKeys.playbackQueue] })
      )
      .catch((err) => console.error(err));
  };
  return (
    <Credenza open={open} onOpenChange={setOpen}>
      <CredenzaTrigger asChild>
        <Button className='w-full' variant='purple'>
          Add Song
        </Button>
      </CredenzaTrigger>
      <CredenzaContent>
        <AddSongForm onAddSong={onAddSong} />
      </CredenzaContent>
    </Credenza>
  );
}
