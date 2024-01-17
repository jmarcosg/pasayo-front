import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const DemoScrollArea = () => {
  const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

  return (
    <div className='mt-6'>
      <h2 className='font-bold'>Scroll Area with Separator</h2>
      <div className='mt-2'>
        <ScrollArea className='h-72 w-48 rounded-md border'>
          <div className='p-4'>
            <h4 className='mb-4 text-sm font-medium leading-none'>Tags</h4>
            {tags.map((tag) => (
              <React.Fragment key={tag}>
                <div className='text-sm'>{tag}</div>
                <Separator className='my-2' />
              </React.Fragment>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default DemoScrollArea;
