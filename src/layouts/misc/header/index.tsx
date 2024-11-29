import React from 'react';
import { UserDropDown } from './user-dropdown';
import { GrLanguage } from 'react-icons/gr';
import Link from 'next/link';
export function Header() {
  return (
    <div className="grid grid-cols-2 h-20 justify-between gap-4 place-items-center">
      <Link href="/" className="text-2xl font-bold flex items-center justify-self-start">
        Sanatopia
      </Link>

      <div className="flex gap-6 items-center justify-self-end">
        <GrLanguage />
        <UserDropDown />
      </div>
    </div>
  );
}
