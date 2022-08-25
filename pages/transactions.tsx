import Head from 'next/head';
import useSWR from 'swr';

import Layout from '../components/layout';
import fetchJson from '../lib/fetchJson';

export default function Transactions() {
    const { data: transactions } = useSWR(
        'http://localhost:8000/request/blockchain',
        fetchJson,
    );

    return (
        <Layout>
            <Head>
                <title>BlockchainTS | Transactions</title>
            </Head>
            <div>
                <table>
                    <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Artwork</th>
                        <th>Timestamp</th>
                        <th>Previous Hash</th>
                    </tr>
                    {transactions &&
                        (transactions as any).map((transaction, i) => {
                            if (i === 0) return;
                            return (
                                <tr>
                                    <td>{transaction.transaction.fromId}</td>
                                    <td>{transaction.transaction.toId}</td>
                                    <td>{transaction.transaction.artworkId}</td>
                                    <td>{transaction.timestamp}</td>
                                    <td>{transaction.previousBlockHash}</td>
                                </tr>
                            );
                        })}
                </table>
            </div>
        </Layout>
    );
}
