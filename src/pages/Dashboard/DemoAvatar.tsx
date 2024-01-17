import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const DemoAvatar = () => {
  return (
    <div className='mt-6'>
      <h2 className='font-bold'>Avatar</h2>
      <div>
        <Avatar>
          <AvatarImage src='https://github.com/jmarcosg.png' />
          <AvatarFallback>JM</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default DemoAvatar;
