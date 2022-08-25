import Head from 'next/head';
import Image from 'next/image';

import Layout from '../../components/layout';
import { getAllArtworkIds, getArtworkData } from '../../lib/artwork';
import utilStyles from '../../styles/utils.module.css';

// @TODO: Replace with request when API is done
export default function Request({ artworkData }) {
    return (
        <Layout>
            <Head>
                <title>BlockchainTS | {artworkData.title}</title>
            </Head>
            <div className={utilStyles.artworkContainer}>
                <div className={utilStyles.artworkItem}>
                    <div className={utilStyles.artworkImage}>
                        <Image
                            priority
                            src={'/' + artworkData.filename}
                            width={1024}
                            height={1024}
                            alt={artworkData.title}
                        />
                    </div>
                    <h2>{artworkData.title}</h2>
                    <p>by {artworkData.artist}</p>
                    <br />
                    <p>Owned by: {artworkData.owner}</p>
                    <button>Request to Buy</button>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllArtworkIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const artworkData = await getArtworkData(params.id);
    return {
        props: {
            artworkData,
        },
    };
}