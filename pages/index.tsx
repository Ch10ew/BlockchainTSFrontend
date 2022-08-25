import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
// import { useSWRConfig } from 'swr';

import Layout from '../components/layout';

export default function Home() {
    // const { cache } = useSWRConfig();
    // (cache as any).clear();

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
            </div>
        </Layout>
    );
}
