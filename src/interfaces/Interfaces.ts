export interface ISong {
  name: string;
  cover: string;
  artist: string;
  audio: string;
  color: string[];
  id: string;
  active: boolean;
}

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};