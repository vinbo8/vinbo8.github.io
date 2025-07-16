export type MediaType = {
  title: string;
  publications: string;
  date: string;
  url: string;
  translations?: {
    url: string;
    lang: string;
  }[];
};