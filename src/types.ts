export interface Course {
  id: string;
  title: string;
  instructor: {
    name: string;
    avatar: string;
  };
  category: string;
  rating: number;
  students: string;
  price: string;
  image: string;
  featured?: boolean;
  tag?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
