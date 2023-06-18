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
