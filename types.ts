
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  fullDescription: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Repair';
  imageUrl: string;
  beforeImageUrl?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
