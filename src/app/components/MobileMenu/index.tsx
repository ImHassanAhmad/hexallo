'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import LogoIcon from '@/icons/logo.svg';
import LanguageIcon from '@/icons/language.svg';
import FlagIcon from '@/icons/flag.svg';
import ArrowDownIcon from '@/icons/arrowDown.svg';
import { cn } from '@/app/utility/cn';

const CATEGORIES = [
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

const BROWSE = [
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

function HamburgerIcon() {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" aria-hidden>
      <rect width="20" height="2" rx="1" fill="white" />
      <rect y="7" width="20" height="2" rx="1" fill="white" />
      <rect y="14" width="20" height="2" rx="1" fill="white" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M1 1L15 15M15 1L1 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-widest text-[#AE6F28]">
      {children}
    </p>
  );
}

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="ml-auto flex h-8 w-8 items-center justify-center md:hidden"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <HamburgerIcon />
      </button>

      {/* Full-screen overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[200] transition-opacity duration-300',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={close}
          aria-hidden
        />

        {/* Drawer */}
        <div
          className={cn(
            'absolute left-0 top-0 flex h-full w-[300px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out',
            open ? 'translate-x-0' : '-translate-x-full',
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Drawer header — matches Navbar dark bar */}
          <div className="flex min-h-[48px] items-center justify-between bg-[#2F251D] px-4">
            <Link href="/" onClick={close} className="opacity-100 hover:opacity-75 transition-opacity duration-200">
              <LogoIcon />
            </Link>
            <button
              type="button"
              onClick={close}
              className="flex h-8 w-8 items-center justify-center hover:opacity-75 transition-opacity duration-200"
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Scrollable body */}
          <div className="flex-1 overflow-y-auto">
            {/* Categories (from Navbar) */}
            <div className="px-2 pt-5 pb-4">
              <SectionLabel>Categories</SectionLabel>
              <div className="flex flex-col">
                {CATEGORIES.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={close}
                    className="rounded-lg px-3 py-2.5 text-left text-[13.5px] font-medium text-[#2F251D] hover:bg-[#F8F6EB] transition-colors duration-150"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mx-4 border-t border-[#EBEBEB]" />

            {/* Browse (from Menubar) */}
            <div className="px-2 pt-4 pb-4">
              <SectionLabel>Browse</SectionLabel>
              <div className="flex flex-col">
                {BROWSE.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={close}
                    className="rounded-lg px-3 py-2.5 text-left text-[13.5px] text-[#6A6A6A] hover:bg-[#F2F2F2] transition-colors duration-150"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mx-4 border-t border-[#EBEBEB]" />

            {/* Utility links */}
            <div className="px-2 pt-4 pb-4">
              <SectionLabel>More</SectionLabel>
              <div className="flex flex-col">
                {['Events Calendar', 'Blog', 'Limelight'].map((label) => (
                  <Link
                    key={label}
                    href="/"
                    onClick={close}
                    className="rounded-lg px-3 py-2.5 text-[13.5px] text-[#6A6A6A] hover:bg-[#F2F2F2] transition-colors duration-150"
                  >
                    {label}
                  </Link>
                ))}
              </div>

              {/* Language / Region row */}
              <div className="mt-3 flex flex-wrap items-center gap-x-1 px-3">
                <button type="button" className="inline-flex items-center gap-1 py-1 text-[12px] text-[#6A6A6A] hover:opacity-75">
                  <LanguageIcon aria-hidden />
                  <span>EN(US)</span>
                  <ArrowDownIcon aria-hidden />
                </button>
                <button type="button" className="inline-flex items-center gap-1 py-1 text-[12px] text-[#6A6A6A] hover:opacity-75">
                  <FlagIcon aria-hidden />
                  <span>United States</span>
                  <ArrowDownIcon aria-hidden />
                </button>
                <button type="button" className="inline-flex items-center gap-1 py-1 text-[12px] text-[#6A6A6A] hover:opacity-75">
                  <span>California</span>
                  <ArrowDownIcon aria-hidden />
                </button>
              </div>
            </div>
          </div>

          {/* Sticky footer */}
          <div className="border-t border-[#EBEBEB] px-4 py-3 flex items-center justify-between bg-white">
            <div className="flex items-center gap-3 text-[13px] text-[#3C3C3C]">
              <Link href="/" onClick={close} className="font-medium hover:underline">
                Sign In
              </Link>
              <span aria-hidden className="text-[#D4D4D4]">|</span>
              <Link href="/" onClick={close} className="font-medium hover:underline">
                Sign Up
              </Link>
            </div>
            <Link
              href="/"
              onClick={close}
              className="text-[13px] font-bold text-[#AE6F28] hover:underline"
            >
              Create Event
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
