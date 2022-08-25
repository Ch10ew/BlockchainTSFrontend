import Head from 'next/head';

import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function Upload() {
    return (
        <Layout>
            <Head>
                <title>BlockchainTS | Upload</title>
            </Head>
            <div className={utilStyles.column}>
                <input className={`${utilStyles.fileUpload} ${utilStyles.center}`} type="file" name="image" />
                <br />
                <button className={utilStyles.center} type="submit">
                    Send to server
                </button>
            </div>
        </Layout>
    );
}
