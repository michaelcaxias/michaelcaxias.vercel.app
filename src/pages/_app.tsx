import type { AppProps } from 'next/app';
import AOS from 'aos';

import { MyProvider } from '@/context/MyProvider';

import '@/styles/fonts.css';
import '@/styles/globals.css';

AOS.init();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyProvider>
      <Component {...pageProps} />
    </MyProvider>
  );
}
