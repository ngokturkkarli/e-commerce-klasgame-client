import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { IoBasketOutline } from 'react-icons/io5';
import { Button } from '../ui/button';

const Basket = () => {
  return (
    <Sheet>
      <SheetTrigger className="h-10 px-3 rounded-xl hover:bg-white/20 transition-all duration-200 center text-center bg-stone-800">
        <IoBasketOutline size={20} />
      </SheetTrigger>
      <SheetContent className="bg-stone-900 border-l-white/10 !text-white flex flex-col justify-between">
        <SheetHeader>
          <SheetTitle className="text-white">Sepet</SheetTitle>
        </SheetHeader>
        <div>
          <Button className="w-full center bg-brand hover:bg-orange-700 text-lg font-bold">
            Sepeti Onayla
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Basket;
