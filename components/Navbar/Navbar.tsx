'use client';

import React from 'react';
import Link from 'next/link';
import Container from '../Container';
import { SearchBox } from './SearchBox';
import { IoBasketOutline } from 'react-icons/io5';

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-[#313131] center mt-10">
      <Container className="flex justify-between items-center">
        <Link href={'/'}>
          <h2 className="text-4xl font-bold tracking-widest">
            <span className="text-brand">KLAS</span>GAME
          </h2>
        </Link>
        <SearchBox />
        <div className="center gap-4">
          <div className="h-10 px-3 rounded-xl hover:bg-white/20 transition-all duration-200 center text-center bg-stone-800">
            <IoBasketOutline size={20} />
          </div>
          <div className="w-[200px] group bg-stone-800 flex items-center rounded-xl overflow-hidden">
            <Link
              href={'giris-yap'}
              className="w-full h-10 center hover:bg-white/20 transition-all duration-200"
            >
              Giriş Yap
            </Link>
            <div className="h-6 w-1 bg-white/20 group-hover:hidden"></div>
            <Link
              href={'kayit-ol'}
              className="w-full h-10 center hover:bg-white/20 transition-all duration-200"
            >
              Kayıt Ol
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
