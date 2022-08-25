import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/layout';

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>BlockchainTS | Home</title>
            </Head>
            <div>
                <h1>Welcome to BlockchainTS</h1>
                <br />
                <h2>
                    An art transaction platform utilizing blockchain.
                    <br />
                    <Link href="./transactions">
                        <a>All transactions can be viewed here</a>
                    </Link>.
                </h2>
                <br />
                <Link href="./artist/upload">
                    <a>(Temporary) Artist Upload page</a>
                </Link>
                <br />
                <Link href="./requests">
                    <a>(Temporary) Requests page</a>
                </Link>
            </div>
        </Layout>
    );
}
