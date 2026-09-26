export type Book = {
  id: string;
  title: string;
  author: string;
  price: string;
  image: any;
  description: string;
};

export type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  BookDetail: { book: any };
};
