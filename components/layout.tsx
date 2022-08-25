import Head from 'next/head';
import Header from './header';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="BlockchainTS Frontend"
                />
                <meta name="og:title" content="Login" />
            </Head>
            <Header />
            <main>
                <div className="container">{children}</div>
            </main>
        </div>
    );
}