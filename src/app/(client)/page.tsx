'use client';
import { useState } from 'react';
import { Card } from '~/feature/_birzhan/Card';
import { Navbar } from '~/feature/_birzhan/HomePage/Navbar';
import { Search } from '~/feature/_birzhan/HomePage/SearchComponent';
import { Info } from '~/feature/_birzhan/HomePage/info-coming';
import { PropertyCard, PropertySearch } from '~/feature/property';
import { SearchBar } from '~/feature/search';

export default function Home() {
  const [filterSearch, setFilterSearch] = useState({});

  return (
    <main className=" h-full space-y-6 px-5">
      {/* <Search /> */}
      <SearchBar />
      {/* <Navbar /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
        <PropertyCard src="/static/maldives.webp" />
        <PropertyCard src="/static/maldives2.webp" />
        <PropertyCard src="/static/ritz.avif" />

        <PropertyCard src="/static/homealone.webp" />
        <PropertyCard src="/static/room.jpg" />

        <PropertyCard src="/static/sheraton1.jpeg" />
        <PropertyCard src="/static/sheraton2.jpeg" />
        <PropertyCard src="/static/sheraton3.jpeg" />
        <PropertyCard src="/static/stregis1.jpeg" />
        <PropertyCard src="/static/stregis2.jpeg" />
        <PropertyCard src="/static/stregis3.jpeg" />

        <PropertyCard src="/static/maldives.webp" />
        <PropertyCard src="/static/maldives2.webp" />
        <PropertyCard src="/static/ritz.avif" />

        <PropertyCard src="/static/homealone.webp" />
        <PropertyCard src="/static/room.jpg" />

        <PropertyCard src="/static/sheraton1.jpeg" />
        <PropertyCard src="/static/sheraton2.jpeg" />
        <PropertyCard src="/static/sheraton3.jpeg" />
        <PropertyCard src="/static/stregis1.jpeg" />
        <PropertyCard src="/static/stregis2.jpeg" />
        <PropertyCard src="/static/stregis3.jpeg" />

        <PropertyCard src="/static/HomeImage.svg" />
        <PropertyCard src="/static/homealone.webp" />
        <PropertyCard src="/static/room.jpg" />
      </div>
    </main>
  );
}
