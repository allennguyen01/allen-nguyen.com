'use client';

import { useState } from 'react';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';

export default function ThemeSwap({ className }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function toggleTheme() {
    const next = !isDarkMode;
    setIsDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
  }

  return (
    <label
      className={twMerge('inline-flex cursor-pointer items-center', className)}
    >
      <input
        type='checkbox'
        className='sr-only'
        checked={isDarkMode}
        onChange={toggleTheme}
      />

      <div className={`inset-0 transition-opacity ${isDarkMode && 'hidden'} `}>
        <RiMoonLine className='size-8' />
      </div>

      <div className={`inset-0 transition-opacity ${!isDarkMode && 'hidden'} `}>
        <RiSunLine className='size-8' />
      </div>
    </label>
  );
}
