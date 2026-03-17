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
