import { appConfig } from '@/config/app';

export function Footer() {
  return (
    <footer className='py-6 md:px-8 md:py-0'>
      <div className='container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
        <p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
          Built by{' '}
          <a
            className='font-medium underline underline-offset-4'
            href={appConfig.author.url}
            rel='noreferrer'
            target='_blank'
          >
            jmarcosg
          </a>
          . The source code is available on{' '}
          <a
            className='font-medium underline underline-offset-4'
            href={appConfig.github.url}
            rel='noreferrer'
            target='_blank'
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
