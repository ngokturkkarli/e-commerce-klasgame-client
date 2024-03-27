'use client';

import { useEffect, useState } from 'react';
import { useDebouncedState } from '@mantine/hooks';

const FAKE_DATA = [
  { id: 1, name: 'Rise Online Gold Bar' },
  { id: 2, name: 'Valorant Points' },
  { id: 3, name: 'League of Legends Points' },
];

export function SearchBox() {
  const [value, setValue] = useDebouncedState<string>('', 200);
  const [isOpenBox, setIsOpenBox] = useState<boolean>(false);

  useEffect(() => {
    if (value.length === 0) {
      setIsOpenBox(false);
    } else {
      setIsOpenBox(true);
    }
  }, [value]);

  return (
    <div className="relative">
      <input
        type="text"
        defaultValue={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        placeholder="Ürün ya da oyun adını yazınız."
        className="w-[600px] h-12 px-4 outline-none border-2 border-white/10 rounded-2xl bg-transparent"
      />
      {isOpenBox && (
        <div className="absolute bg-stone-900 border border-white/10 w-[600px] flex flex-col gap-2 mt-1 rounded-lg p-4">
          {FAKE_DATA.map((item: any) => (
            <div
              key={item.id}
              className="w-full h-10 bg-stone-800 hover:bg-white/20 rounded-md px-3 py-2 cursor-pointer"
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
