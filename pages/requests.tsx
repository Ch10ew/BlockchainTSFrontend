import Head from 'next/head';

import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Requests() {
    return (
        <Layout>
            <Head>
                <title>BlockchainTS | Requests</title>
            </Head>
            <div className={utilStyles.row}>
                <div className={utilStyles.item}>
                    <table>
                        <tr>
                            <th>
                                Pending Requests
                            </th>
                        </tr>
                        <tr>
                            <td>
                                Test Entry 1
                            </td>
                        </tr>
                    </table>
                </div>
                <div className={utilStyles.item}>
                    <table>
                        <tr>
                            <th>
                                Requests History
                            </th>
                        </tr>
                        <tr>
                            <td>
                                Test Entry 1
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </Layout>
    );
}
