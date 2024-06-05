export interface Character {
  id?: number;
  name: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: {
    name?: string;
    url?: string;
  };
  location?: {
    name?: string;
    url?:string;
  };
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
}

export interface GetAllCharacters {
  info?: object;
  results?: Array<Character>
}

export interface infoPaginator {
  count: number
  next: string | null
  pages: number
  prev: string | null
}

export interface pagePaginator {
  page: number,
  itensPerPage?: number
}