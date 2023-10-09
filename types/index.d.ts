export type Category = {
  id: number;
  name: string;
  description: string;
  image: string;
};
export type Event = {
  id: number;
  title: string;
  url: string;
  description: string;
  date: string;
  cover_url: string;
  cover_alt: string;
  categories: string;
  address_name: string;
  address_city: string;
  price_type: string;
  price: string;
  status: string;
  rsvp: number;
};
