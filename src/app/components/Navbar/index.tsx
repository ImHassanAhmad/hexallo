import Link from 'next/link';
import LogoIcon from '@/icons/logo.svg';
import Tabs from '@/app/components/Tabs';
import type { TabItem } from '@/app/components/Tabs';
import { cn } from '@/app/utility/cn';

const navItems: TabItem[] = [
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
        'w-full bg-[#2F251D] h-[37px]',
        'mx-auto flex w-full items-center gap-8 justify-center',
        'sm:px-6 md:px-8 lg:px-[75px]',
      )}
    >
      <Link href="/" className="flex items-center justify-between">
        <LogoIcon />
      </Link>

      <Tabs items={navItems} defaultActiveId="explore" />
    </nav>
  );
}
