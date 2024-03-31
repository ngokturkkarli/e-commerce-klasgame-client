'use client';

import React from 'react';
import Link from 'next/link';
import Container from '../Container';
import { SearchBox } from './SearchBox';
import Login from '../AuthModals/Login';
import Register from '../AuthModals/Register';
import Basket from '../Basket/Basket';

const Navbar = () => {
  return (
    <div className="w-full flex flex-col bg-[#313131] center">
      <div className="h-12 w-full bg-stone-700"></div>
      <Container className="h-20 flex justify-center lg:justify-between items-center">
        <Link href={'/'}>
          <h2 className="text-4xl font-bold tracking-widest">
            <span className="text-brand">KLAS</span>GAME
          </h2>
        </Link>
        <SearchBox />
        <div className="hidden lg:center gap-4">
          <Basket />
          <div className="w-[200px] group bg-stone-800 flex items-center rounded-xl overflow-hidden">
            <Login />
            <div className="h-6 w-1 bg-white/20 group-hover:hidden"></div>
            <Register />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
