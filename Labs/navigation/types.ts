export type Book = {
  id: string;
  title: string;
  author: string;
  price: string;
  image: any;
  description: string;
};

export type RootStackParamList = {
  MainTabs: undefined;
  BookDetail: { bookId: string };
  Checkout: { totalAmount: number };
};

export type BottomTabParamList = {
  Home: undefined;
  Category: undefined;
  Cart: undefined;
  Profile: undefined;
};
