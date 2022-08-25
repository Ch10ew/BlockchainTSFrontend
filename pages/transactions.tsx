import Head from 'next/head';

import Layout from '../components/layout';

export default function Transactions() {
    return (
        <Layout>
            <Head>
                <title>BlockchainTS | Transactions</title>
            </Head>
            <div>
                <p>Transaction records go here.</p>
            </div>
        </Layout>
    );
}
