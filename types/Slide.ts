import { StaticImageData } from "next/image";

export type Slide = {
    id: number;
    image: StaticImageData | string;
    title?: string;
    url?: string;
};
