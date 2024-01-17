import { Button } from '@/components/ui/button';

const DemoButton = () => {
  return (
    <div className='mt-6'>
      <h2 className='font-bold'>Buttons</h2>
      <div className='mt-2 flex flex-wrap gap-2'>
        <Button variant='default'>Default</Button>
        <Button variant='destructive'>Destructive</Button>
        <Button variant='outline'>Outline</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='ghost'>Ghost</Button>
        <Button variant='link'>Link</Button>
      </div>
    </div>
  );
};

export default DemoButton;
