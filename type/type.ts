import { StaticImageData } from 'next/image';

interface Review {
  buyerName: string;
  image: StaticImageData;
  review: string;
  id: string;
}
export interface reviewsType {
  allReviews: Review[];
  NegativeReviews: Review[];
  PositiveReviews: Review[];
}

export interface ListDataType {
  userName: string;
  trustScore: number;
  bunkerBase: number;
  wipped: string;
  rusty: string;
  featuresImage: StaticImageData;
  tags: string[];
}
