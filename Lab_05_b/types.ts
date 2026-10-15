import { ImageSourcePropType } from "react-native";

export type Bike = {
  id: string;
  name: string;
  price: number;
  type: "Roadbike" | "Mountain";
  image: ImageSourcePropType;
};

export type RootStackParamList = {
  Screen01: undefined;
  Screen02: undefined;
  Screen03: { bike: Bike };
};
