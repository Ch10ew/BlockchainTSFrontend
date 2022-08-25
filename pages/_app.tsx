import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import fetchJson from '../lib/fetchJson';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SWRConfig
            value={{
                fetcher: fetchJson,
                onError: (err) => {
                    console.error(err);
                },
            }}
        >
            <Component {...pageProps} />
        </SWRConfig>
    );
}
