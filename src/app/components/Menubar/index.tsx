import Tabs from '@/app/components/Tabs';
import type { TabItem } from '@/app/components/Tabs';
import { cn } from '@/app/utility/cn';

const NAV_ITEMS: TabItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'events', label: 'Events' },
  { id: 'tours', label: 'Tours' },
  { id: 'activities', label: 'Activities' },
  { id: 'indulge', label: 'Indulge' },
  { id: 'places', label: 'Places' },
  { id: 'movies', label: 'Movies' },
  { id: 'sports', label: 'Sports' },
  { id: 'restaurants', label: 'Restaurants' },
  { id: 'find-a-table', label: 'Find a table' },
  { id: 'conferences', label: 'Conferences' },
  { id: 'workshops', label: 'Workshops' },
  { id: 'auditions', label: 'Auditions' },
  { id: 'people', label: 'People' },
  { id: 'world-famous', label: 'World Famous' },
  { id: 'social-buddies', label: 'Social Buddies' },
  { id: 'virtual-experiences', label: 'Virtual Experiences' },
];

export default function Menubar() {
  return (
    <nav
      aria-label="Sub navigation"
      className={cn(
        'w-full bg-[#F2F2F2] min-h-[37px]',
        'hidden md:flex w-full items-center overflow-hidden',
        'px-4 sm:px-6 md:px-8 lg:px-16',
      )}
    >
      <Tabs
        items={NAV_ITEMS}
        defaultActiveId="home"
        inactiveTextColor="#6A6A6A"
        activeTextColor="#6A6A6A"
        activeBorderColor="#AE6F28"
        className="justify-start"
      />
    </nav>
  );
}
