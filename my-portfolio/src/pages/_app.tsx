// Import Statements
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NavigationBar from '@/components/layout/NavigationBar';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <NavigationBar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;