export interface Movie {
  _id: number;
  backdrop_path: string;
  genres: string[];
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  contentType: string;
}

export enum ContentType {
  Movie = "movie",
}
