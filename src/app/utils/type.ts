export interface IMusicPlaylist {
  image: string;
  singer: string;
  title: string;
  fileName: string;
  name: string;
}

export type TypeCategoryAlbum = 'all' | 'podcasts' | 'music';

export interface IListTypeCategory {
  name: TypeCategoryAlbum;
  no: number;
}

export interface IAllAlbum {
  type: TypeCategoryAlbum;
  name: string;
  image: string;
  number: number;
  title: string;
}
