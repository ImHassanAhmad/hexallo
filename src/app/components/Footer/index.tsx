import Link from 'next/link';
import XIcon from '@/icons/x.svg';
import LinkedInIcon from '@/icons/linkedIn.svg';
import FacebookIcon from '@/icons/facebook.svg';
import InstagramIcon from '@/icons/instagram.svg';
import WhatsAppIcon from '@/icons/whatsapp.svg';

const SOCIAL_PLATFORMS = [
  { label: 'X (Twitter)', Component: XIcon },
  { label: 'LinkedIn', Component: LinkedInIcon },
  { label: 'Facebook', Component: FacebookIcon },
  { label: 'Instagram', Component: InstagramIcon },
  { label: 'WhatsApp', Component: WhatsAppIcon },
];

export default function Footer() {
  return (
    <footer
      className="flex w-full flex-wrap items-center justify-between gap-4 bg-[#AE7029] py-4 text-[#f5e6d3] md:px-8 lg:px-[70px]"
      role="contentinfo"
    >
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <span className="text-[#FFF6DF] text-[16px] font-normal">
          All rights reserved Hexallo LLC 2023
        </span>
        <nav
          className="flex flex-wrap items-center gap-x-6 gap-y-2"
          aria-label="Footer"
        >
          <Link
            href="/privacy"
            className="text-[#FFF6DF] text-[16px] font-medium hover:opacity-75 transition-opacity duration-200"
          >
            Privacy policy
          </Link>
          <Link
            href="/terms"
            className="text-[#FFF6DF] text-[16px] font-medium hover:opacity-75 transition-opacity duration-200"
          >
            Terms of service
          </Link>
          <Link
            href="/contact"
            className="text-[#FFF6DF] text-[16px] font-medium hover:opacity-75 transition-opacity duration-200"
          >
            Contact us
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4" aria-label="Social links">
        {SOCIAL_PLATFORMS.map(({ label, Component }) => (
          <div
            key={label}
            title={label}
            aria-label={label}
            className="cursor-pointer opacity-90 hover:opacity-60 transition-opacity duration-200"
          >
            <Component />
          </div>
        ))}
      </div>
    </footer>
  );
}
