export interface Producer {
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;
}

export interface Producers {
  min: Producer[];
  max: Producer[];
}
