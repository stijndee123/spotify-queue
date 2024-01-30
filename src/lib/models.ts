export interface ISong {
  id: string;
  title: string;
  coverUrl: string;
  artists: string;
  duration: number;
}

export interface IPlaybackQueue {
  currentlyPlaying: ISong | null;
  queue: ISong[];
}
