import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '../components/layout';
import { getAllArtworkData } from '../lib/artwork';
import utilStyles from '../styles/utils.module.css';

export default function Artworks({ allArtworkData }) {
    return (
        <Layout>
            <Head>
                <title>BlockchainTS | Artwork Gallery</title>
            </Head>
            <div>
                <h1>Artwork Gallery</h1>
                <div className={utilStyles.gallery}>
                    {
                        allArtworkData.map(({ id, title, owner, filename }) => (
                            <Link href={`/artwork/${id}`}>
                                <a className={`${utilStyles.galleryItem} ${utilStyles.noLinkStyle}`}>
                                    <div key={id} >
                                        <Image
                                            priority
                                            src={'/' + filename}
                                            height={256}
                                            width={256}
                                            alt={title}
                                        />
                                        <p>{title}</p>
                                        <p className={utilStyles.lightText}>Owner: {owner === '' ? 'None' : owner}</p>
                                    </div>
                                </a>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </Layout >
    );
}

export async function getStaticProps() {
    const allArtworkData = getAllArtworkData();
    return {
        props: {
            allArtworkData,
        },
    };
}