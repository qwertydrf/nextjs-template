import '@/styles/globals.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
