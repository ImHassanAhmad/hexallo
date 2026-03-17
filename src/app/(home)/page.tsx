import type { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import Spotlight from './components/Spotlight';
import Exclusives from './components/Exclusives';
import ForYou from './components/ForYou';
import Destinations from './components/Destinations';
import Deals from './components/Deals';
import Discover from './components/Discover';
import Explore from './components/Explore';
import TopTen from './components/TopTen';
import GlobalHighlights from './components/GlobalHighlights';

export const metadata: Metadata = {
  title: 'Discover Exclusive Travel Deals & Destinations',
  description:
    'Browse spotlight destinations, exclusive hotel deals, top-ten lists, and curated travel experiences. Plan and book your perfect trip with Hexallo.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hexallo — Discover Exclusive Travel Deals & Destinations',
    description:
      'Browse spotlight destinations, exclusive hotel deals, top-ten lists, and curated travel experiences. Plan and book your perfect trip with Hexallo.',
    url: '/',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="font-montserrat">
        <Spotlight />
        <Exclusives />
        <ForYou />
        <Destinations />
        <Deals />
        <Discover />
        <Explore />
        <TopTen />
        <GlobalHighlights />
      </div>
    </>
  );
}
