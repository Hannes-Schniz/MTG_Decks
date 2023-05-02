import { colors } from "./colors.enum";

export interface Deck {
  name: string;
  description: string;
  colors: colors;
  powerLevel: number;
}
