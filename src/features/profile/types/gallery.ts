export interface CatSpec {
  label: string;
  value: string;
}

export interface CatBadge {
  icon?: string;
  text: string;
}

export interface Cat {
  id: string;
  number: string;
  name: string;
  nickname: string;
  subtitle: string;
  image: string;
  specs: CatSpec[];
  badges: CatBadge[];
}

export interface CatGalleryData {
  cats: Cat[];
}
