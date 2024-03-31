'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Container from '../Container';
import Card from './Card';

const MostSaled = () => {
  return (
    <Container className="hidden lg:block">
      <Tabs defaultValue="most-saled" className="flex flex-col p-0 gap-1">
        <TabsList className="flex flex-col lg:flex-row items-center p-0 h-12 bg-transparent">
          <TabsTrigger
            className="rounded-none lg:w-[calc(100%/6)] h-full bg-stone-900 lg:data-[state=active]:scale-105 text-lg font-bold data-[state=active]:bg-brand"
            value="most-saled"
          >
            Çok Satanlar
          </TabsTrigger>
          <TabsTrigger
            className="rounded-none lg:w-[calc(100%/6)] h-full bg-stone-900 lg:data-[state=active]:scale-105 text-lg font-bold data-[state=active]:bg-green-500"
            value="new"
          >
            Yeni
          </TabsTrigger>
          <TabsTrigger
            className="rounded-none lg:w-[calc(100%/6)] h-full bg-stone-900 lg:data-[state=active]:scale-105 text-lg font-bold data-[state=active]:bg-red-500"
            value="riot"
          >
            Riot Games
          </TabsTrigger>
          <TabsTrigger
            className="rounded-none lg:w-[calc(100%/6)] h-full bg-stone-900 lg:data-[state=active]:scale-105 text-lg font-bold data-[state=active]:bg-violet-500"
            value="steam"
          >
            Steam
          </TabsTrigger>
          <TabsTrigger
            className="rounded-none lg:w-[calc(100%/6)] h-full bg-stone-900 lg:data-[state=active]:scale-105 text-lg font-bold data-[state=active]:bg-yellow-500"
            value="gift"
          >
            Hediye
          </TabsTrigger>
          <TabsTrigger
            className="rounded-none lg:w-[calc(100%/6)] h-full bg-stone-900 lg:data-[state=active]:scale-105 text-lg font-bold data-[state=active]:bg-pink-500"
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
