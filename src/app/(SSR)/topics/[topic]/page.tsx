import { UnsplashImage } from '@/models/unsplash-image';
import Image from 'next/image';
import styles from './TopicPage.module.css';
import { Alert } from '@/components/bootstrap';
import { Metadata } from 'next';

interface PageProps {
  params: { topic: string };
  // searchParams: {}
}

// export const dynamicParams = false;

export function generateMetadata({ params: { topic } }: PageProps): Metadata {
  return {
    title: topic + ' - NEXTJS 13.4 Image Gallery',
  };
}

export async function generateStaticParams() {
  return ['health', 'fitness', 'coding'].map((topic) => ({ topic }));
}

const Page = async ({ params: { topic } }: PageProps) => {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  const images: UnsplashImage[] = await response.json();

  return (
    <div>
      <Alert>
        This page uses <strong>generateStaticParams</strong> to render and cache
        static pages at build time, even thought the URL has a dynamic
        parameter. Pages that are not included in generateStaticParams will be
        fetched & rendered on first access and then{' '}
        <strong>cached for subsequent requests</strong> (this can be disabled).
      </Alert>
      <h1>{topic}</h1>
      {images.map((image) => (
        <Image
          src={image.urls.raw}
          width={250}
          height={250}
          alt={image.description}
          key={image.urls.raw}
          className={styles.image}
        />
      ))}
    </div>
  );
};

export default Page;
