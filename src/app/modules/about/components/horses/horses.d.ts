export interface IHorse {
  name: string;
  breed: string | null;
  colour: string;
  age: number;
  height: string;
  images: IHorseImage[];
  text: string[];
}
export interface IHorseImage {
  src: string;
  description: string;
}
