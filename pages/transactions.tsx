import Head from 'next/head';

import Layout from '../components/layout';

export default function Transactions() {
    return (
        <Layout>
            <Head>
                <title>BlockchainTS | Transactions</title>
            </Head>
            <div>
                <table>
                    <tr>
                        <th>
                            From
                        </th>
                        <th>
                            To
                        </th>
                        <th>
                            Artwork
                        </th>
                    </tr>
                    <tr>
                        <td>
                            Test Entry 1
                        </td>
                        <td>
                            Test Entry 2
                        </td>
                        <td>
                            Test Entry 3
                        </td>
                    </tr>
                </table>
            </div>
        </Layout>
    );
}
