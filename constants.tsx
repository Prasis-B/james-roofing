
import React from 'react';
import { Home, Building2, Wrench, ShieldCheck, AlertTriangle, Hammer } from 'lucide-react';
import { Service, Testimonial, BlogPost, GalleryItem, FAQ } from './types';

export const SERVICES: Service[] = [
  {
    id: 'residential',
    title: 'Residential Roofing',
    description: 'Protect your home with our top-tier residential roofing solutions.',
    fullDescription: 'We specialize in a variety of residential roofing materials including asphalt shingles, metal roofing, and tile. Our team ensures your home stays dry and secure for decades.',
    icon: <Home className="w-8 h-8" />,
    image: 'https://picsum.photos/id/1070/800/600'
  },
  {
    id: 'commercial',
    title: 'Commercial Roofing',
    description: 'Durable and efficient roofing for businesses and industrial complexes.',
    fullDescription: 'From flat roofs to complex industrial structures, we provide TPO, EPDM, and modified bitumen solutions tailored to your business needs.',
    icon: <Building2 className="w-8 h-8" />,
    image: 'https://picsum.photos/id/1018/800/600'
  },
  {
    id: 'repair',
    title: 'Roof Repair & Maintenance',
    description: 'Extending the life of your roof through expert repairs.',
    fullDescription: 'Don\'t let a small leak become a big problem. Our maintenance programs and repair services save you thousands in the long run.',
    icon: <Wrench className="w-8 h-8" />,
    image: 'https://picsum.photos/id/1011/800/600'
  },
  {
    id: 'inspection',
    title: 'Roof Inspection',
    description: 'Thorough assessments for peace of mind and insurance claims.',
    fullDescription: 'Our certified inspectors provide detailed reports on your roof\'s condition, identifying potential issues before they escalate.',
    icon: <ShieldCheck className="w-8 h-8" />,
    image: 'https://picsum.photos/id/1025/800/600'
  },
  {
    id: 'emergency',
    title: 'Emergency Services',
    description: '24/7 rapid response for storm damage and critical leaks.',
    fullDescription: 'Storms don\'t wait, and neither do we. Our emergency team is available round-the-clock to secure your property.',
    icon: <AlertTriangle className="w-8 h-8" />,
    image: 'https://picsum.photos/id/1040/800/600'
  },
  {
    id: 'custom',
    title: 'Custom Metal Work',
    description: 'Bespoke gutters and metal roofing elements.',
    fullDescription: 'Elevate your property with custom-fabricated metal details that combine functionality with aesthetic appeal.',
    icon: <Hammer className="w-8 h-8" />,
    image: 'https://picsum.photos/id/1019/800/600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Homeowner',
    content: 'James Roofing replaced my old roof in just two days. The team was professional, clean, and the quality is outstanding. Highly recommend!',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Property Manager',
    content: 'We use James Roofing for all our commercial properties. Their maintenance plan has significantly reduced our emergency repair costs.',
    rating: 5
  },
  {
    id: '3',
    name: 'David Thompson',
    role: 'Homeowner',
    content: 'Great communication from start to finish. They helped me navigate the insurance claim after the hail storm last year.',
    rating: 4
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '5 Signs Your Roof Needs Immediate Attention',
    excerpt: 'Is your roof showing its age? Learn the key warning signs every homeowner should know.',
    content: 'A roof is your home\'s first line of defense. Knowing when it needs help can save you thousands...',
    date: 'Oct 15, 2023',
    author: 'James Miller',
    image: 'https://picsum.photos/id/1012/600/400',
    category: 'Maintenance'
  },
  {
    id: '2',
    title: 'The Pros and Cons of Metal Roofing',
    excerpt: 'Considering an upgrade? Explore why metal roofing is becoming a top choice for modern homes.',
    content: 'Metal roofs are durable, energy-efficient, and long-lasting. But they aren\'t for everyone...',
    date: 'Sep 28, 2023',
    author: 'James Miller',
    image: 'https://picsum.photos/id/1013/600/400',
    category: 'Guides'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', title: 'Luxury Shingle Installation', category: 'Residential', imageUrl: 'https://picsum.photos/id/1020/800/600' },
  { id: 'g2', title: 'Industrial TPO Roofing', category: 'Commercial', imageUrl: 'https://picsum.photos/id/1021/800/600' },
  { id: 'g3', title: 'Copper Gutter Restoration', category: 'Repair', imageUrl: 'https://picsum.photos/id/1022/800/600' },
  { id: 'g4', title: 'Modern Standing Seam Metal', category: 'Residential', imageUrl: 'https://picsum.photos/id/1023/800/600' },
];

export const FAQS: FAQ[] = [
  { question: "How long does a typical roof replacement take?", answer: "Most residential roof replacements are completed within 1 to 3 days, depending on the size and complexity of the roof." },
  { question: "Do you provide free estimates?", answer: "Yes, we provide comprehensive, no-obligation free estimates for all roofing projects." },
  { question: "Are you licensed and insured?", answer: "Absolutely. James Roofing is fully licensed, bonded, and insured for your protection and peace of mind." },
  { question: "What warranty do you offer?", answer: "We offer a 10-year workmanship warranty in addition to the manufacturer's material warranties, which can range from 20 to 50 years." }
];
