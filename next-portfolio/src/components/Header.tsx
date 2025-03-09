'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image 
              src="/img/logo.svg" 
              alt="Javan Wang Logo" 
              width={40} 
              height={40} 
              className="mr-2"
            />
          </Link>
        </div>

        <div className="flex items-center">
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg 
              className="h-6 w-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/" className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
              Projects
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <a 
              href="/img/javan-wang-resume.pdf" 
              target="_blank" 
              className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              About
            </Link>
            <a 
              href="/img/javan-wang-resume.pdf" 
              target="_blank" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
} 