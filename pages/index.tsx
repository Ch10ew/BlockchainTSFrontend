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
                <p>An art transaction platform utilizing blockchain.</p>
                <br />
                <h2>Login here:</h2>
                <Link href="./login">Login</Link>
            </div>
        </Layout>
    );
}
