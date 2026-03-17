import LanguageIcon from '@/icons/language.svg';
import ArrowDownIcon from '@/icons/arrowDown.svg';
import FlagIcon from '@/icons/flag.svg';

import Link from 'next/link';

import { cn } from '@/app/utility/cn';

import Navbar from '@/app/components/Navbar';
import SubNavbar from '@/app/components/SubNavbar';

const navLinkClass = cn(
  'cursor-pointer text-xs leading-none px-[8px] sm:px-2 text-[#6a6a6a] hover:text-[#3C3C3C] transition-colors duration-300',
);

const dropdownClass = cn(
  'px-[10px] cursor-pointer inline-flex items-center text-xs leading-none text-left hover:opacity-80 transition-opacity duration-300',
);

const chevronDownClass = cn('mx-[5px] shrink-0');

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div
        className={cn(
          'text-[#6A6A6A] mx-auto flex min-h-9 w-full max-w-[1920px] flex-wrap items-center justify-end gap-x-2 gap-y-1',
          'px-3 py-2 sm:px-5 sm:py-1.5 md:px-8 lg:px-16',
        )}
      >
        <div className="order-2 flex flex-1 items-center justify-end gap-x-1 sm:gap-x-0 md:order-1 md:flex-initial">
          <nav
            aria-label="Primary"
            className="hidden items-center gap-[3px] md:flex"
          >
            <Link className={navLinkClass} href="/">
              Events Calendar
            </Link>
            <Link className={navLinkClass} href="/">
              Blog
            </Link>
            <Link className={navLinkClass} href="/">
              Limelight
            </Link>
          </nav>

          <div className="hidden items-center md:flex">
            <button
              type="button"
              className={dropdownClass}
              aria-label="Language"
            >
              <LanguageIcon aria-hidden className="mr-[6.37px]" />
              <span className="truncate">EN(US)</span>
              <ArrowDownIcon aria-hidden className={chevronDownClass} />
            </button>

            <button
              type="button"
              className={dropdownClass}
              aria-label="Country"
            >
              <FlagIcon className="ml-2 mr-1.5" />
              <span className="hidden truncate lg:inline">United States</span>
              <ArrowDownIcon className={chevronDownClass} />
            </button>

            <button type="button" className={dropdownClass} aria-label="Region">
              <span className="ml-1 truncate">California</span>
              <ArrowDownIcon className={chevronDownClass} />
            </button>
          </div>
        </div>

        <div className="order-1 flex items-center gap-2 md:order-2">
          <div className="text-[#3C3C3C] px-[8px] flex items-center gap-1.5 text-xs sm:gap-2">
            <Link
              href="/"
              className="cursor-pointer transition-colors duration-300 hover:underline"
            >
              Sign In
            </Link>
            <span aria-hidden>|</span>
            <Link
              href="/"
              className="cursor-pointer transition-colors duration-300 hover:underline"
            >
              Up
            </Link>
          </div>

          <Link
            className="px-[8px] cursor-pointer text-xs font-medium leading-none text-[#AE6F28] transition-colors duration-300 hover:underline sm:px-2 sm:text-sm"
            href="/"
          >
            Business
          </Link>
          <Link
            className="px-[8px] cursor-pointer text-xs font-bold leading-none text-black transition-colors duration-300 hover:underline sm:px-2 sm:text-sm"
            href="/"
          >
            Create Event
          </Link>
        </div>
      </div>
      <Navbar />
      <SubNavbar />
    </header>
  );
}
