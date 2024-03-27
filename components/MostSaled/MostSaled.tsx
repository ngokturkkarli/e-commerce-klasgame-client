'use client';
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Container from '../Container';
import Card from './Card';

const MostSaled = () => {
  const [activePage, setActivePage] = useState<string>();

  return (
    <Container className="mt-6">
      <Tabs
        defaultValue="most-saled"
        className="flex flex-col w-full p-0 gap-4"
      >
        <TabsList className="w-full bg-transparent rounded-lg p-0">
          <TabsTrigger
            className="bg-stone-900 data-[state=active]:scale-110 h-12 w-[calc(100%/6)] text-lg font-bold data-[state=active]:bg-orange-500"
            value="most-saled"
          >
            Çok Satanlar
          </TabsTrigger>
          <TabsTrigger
            className="bg-stone-900 data-[state=active]:scale-110 h-12 w-[calc(100%/6)] text-lg font-bold data-[state=active]:bg-green-500"
            value="new"
          >
            Yeni
          </TabsTrigger>
          <TabsTrigger
            className="bg-stone-900 data-[state=active]:scale-110 h-12 w-[calc(100%/6)] text-lg font-bold data-[state=active]:bg-red-500"
            value="riot"
          >
            Riot Games
          </TabsTrigger>
          <TabsTrigger
            className="bg-stone-900 data-[state=active]:scale-110 h-12 w-[calc(100%/6)] text-lg font-bold data-[state=active]:bg-violet-500"
            value="steam"
          >
            Steam
          </TabsTrigger>
          <TabsTrigger
            className="bg-stone-900 data-[state=active]:scale-110 h-12 w-[calc(100%/6)] text-lg font-bold data-[state=active]:bg-yellow-500"
            value="gift"
          >
            Hediye
          </TabsTrigger>
          <TabsTrigger
            className="bg-stone-900 data-[state=active]:scale-110 h-12 w-[calc(100%/6)] text-lg font-bold data-[state=active]:bg-pink-500"
            value="rise-online"
          >
            Rise Online
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="most-saled"
          className="w-full flex gap-4 p-0 data-[state=inactive]:hidden"
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </TabsContent>
        <TabsContent
          value="new"
          className="w-full flex gap-4 p-0 data-[state=inactive]:hidden"
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </TabsContent>
        <TabsContent
          value="riot"
          className="w-full flex gap-4 p-0 data-[state=inactive]:hidden"
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </TabsContent>
        <TabsContent
          value="steam"
          className="w-full flex gap-4 p-0 data-[state=inactive]:hidden"
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </TabsContent>
        <TabsContent
          value="gift"
          className="w-full flex gap-4 p-0 data-[state=inactive]:hidden"
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </TabsContent>
        <TabsContent
          value="rise-online"
          className="w-full flex gap-4 p-0 data-[state=inactive]:hidden"
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </TabsContent>
      </Tabs>
    </Container>
  );
};

export default MostSaled;
