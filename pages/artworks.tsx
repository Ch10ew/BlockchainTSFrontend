import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import fetchJson from '../lib/fetchJson';
import useSWR from 'swr';

export default function Artworks() {
    // const [artworks, setArtworks] = useState(null);
    const { data: artworks } = useSWR('http://localhost:8000/artwork', fetchJson);
    //  useEffect(async () => {
    //     fetchJson('').then(list => {
    //         console.log(list);
    //         setArtworks(list);
    //     })
    // }, [])
    return (
        <Layout>
            <Head>
                <title>BlockchainTS | Artwork Gallery</title>
            </Head>
            <div>
                <h1>Artwork Gallery</h1>
                <div className={utilStyles.gallery}>
                    {artworks &&
                        (artworks as any).map((artwork) => {
                            return (
                                <Link href={`/artwork/${artwork.id}`}>
                                    <a
                                        className={`${utilStyles.galleryItem} ${utilStyles.noLinkStyle}`}
                                    >
                                        <div key={artwork.id}>
                                            <Image
                                                priority
                                                loader={() => artwork.artworkPath}
                                                src={artwork.artworkPath}
                                                height={256}
                                                width={256}
                                                alt={artwork.label}
                                            />
                                            <p>{artwork.label}</p>
                                            <p className={utilStyles.lightText}>
                                                Owner: {artwork.owner.username}
                                            </p>
                                        </div>
                                    </a>
                                </Link>
                            );
                        })}
                </div>
            </div>
        </Layout>
    );
}
