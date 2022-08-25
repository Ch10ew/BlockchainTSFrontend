import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Cert from '../../components/cert';

import Layout from '../../components/layout';
import fetchJson from '../../lib/fetchJson';
import utilStyles from '../../styles/utils.module.css';

export default function Artwork() {
    const router = useRouter();
    const { id } = router.query;

    const { data: artwork } = useSWR<any>(
        `http://localhost:8000/artwork/${id}`,
        fetchJson,
    );
    const { data: transaction } = useSWR<any>(
        `http://localhost:8000/request/cert/${id}`,
        fetchJson,
    );
    const { data: artist } = useSWR<any>(
        `http://localhost:8000/artwork?q=${artwork.label}&artistID=${artwork.artistId}`,
        fetchJson,
    );

    return (
        <Layout>
            <Head>
                <title>BlockchainTS</title>
            </Head>
            {artwork && (
                <div className={utilStyles.artworkContainer}>
                    <div className={utilStyles.artworkItem}>
                        <div className={utilStyles.artworkImage}>
                            <Image
                                priority
                                loader={() => artwork.artworkPath}
                                src={artwork.artworkPath}
                                width={1024}
                                height={1024}
                                alt={artwork.label}
                            />
                        </div>
                        <h2>{artwork.label}</h2>
                        <p>by {artist[0]?.artist.username}</p>
                        <br />
                        <p>Owned by: {transaction.data.to?.username}</p>
                        <button
                            onClick={async () => {
                                console.log('hi');
                            }}
                        >
                            Request to Buy
                        </button>
                    </div>
                </div>
            )
            }
            <br />
            {
                transaction && (
                    <Cert transaction={transaction.data} artwork={artwork}></Cert>
                )
            }
        </Layout >
    );
}
