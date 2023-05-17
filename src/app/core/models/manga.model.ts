export interface MangaModel {
  _id: number;
  lastVolume: null;
  lastChapter: null;
  contentRating: string;
  creationDate: Date;
  updatedAt: Date;
  title: string;
  genre: string;
  state: string;
  description: string;
  artist: string;
  author: string;
  cover: string;
  liked: boolean;
}
