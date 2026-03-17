import Link from 'next/link';
import LogoIcon from '@/icons/logo.svg';
import Tabs from '@/app/components/Tabs';
import type { TabItem } from '@/app/components/Tabs';
import MobileMenu from '@/app/components/MobileMenu';
import { cn } from '@/app/utility/cn';

const NAV_ITEMS: TabItem[] = [
  { id: 'explore', label: 'Explore' },
  { id: 'services', label: 'Services' },
  { id: 'nightlife', label: 'Nightlife' },
  { id: 'travel', label: 'Travel' },
  { id: 'accommodation', label: 'Accommodation' },
  { id: 'spaces', label: 'Spaces' },
  { id: 'subscriptions', label: 'Subscriptions' },
  { id: 'vouchers', label: 'Vouchers' },
  { id: 'rentals', label: 'Rentals' },
  { id: 'voting', label: 'Voting' },
  { id: 'shop', label: 'Shop' },
  { id: 'essentials', label: 'Essentials' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'jobs', label: 'Jobs' },
  { id: 'marketplace', label: 'Marketplace' },
];

export default function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        'w-full bg-[#2F251D] min-h-[37px]',
        'mx-auto flex w-full items-center gap-4 overflow-hidden',
        'px-4 sm:px-6 md:px-8 lg:px-[75px]',
      )}
    >
      <Link href="/" className="shrink-0 flex items-center opacity-100 hover:opacity-75 transition-opacity duration-200">
        <LogoIcon />
      </Link>

      {/* Tabs — desktop only */}
      <div className="hidden md:flex flex-1 min-w-0 overflow-x-auto scrollbar-hide">
        <Tabs items={NAV_ITEMS} defaultActiveId="explore" />
      </div>

      {/* Hamburger — mobile only */}
      <MobileMenu />
    </nav>
  );
}
