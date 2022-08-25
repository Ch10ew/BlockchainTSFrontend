import { useAtom } from "jotai";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import Cert from "../../components/cert";

import Layout from "../../components/layout";
import { userAtom } from "../../context/userContext";
import fetchJson from "../../lib/fetchJson";
import utilStyles from "../../styles/utils.module.css";

export default function Artwork() {
  const [user, setUser] = useAtom(userAtom);
  const router = useRouter();
  const { id } = router.query;

  const { data: artwork, error } = useSWR<any>(
    `http://localhost:8000/artwork/${id}`,
    fetchJson
  );

  const { data: transaction } = useSWR<any>(
    `http://localhost:8000/request/cert/${id}`,
    fetchJson
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
            <p>by {artwork.artist?.username}</p>
            <br />
            <p>Owned by: {transaction?.data?.to.username}</p>
            {user && user.loggedIn ? (
              <button
                onClick={async (event) => {
                  event.preventDefault();

                  // @TODO: check for duplicate request (or handle this in backend)

                  const res = await fetchJson(
                    "http://localhost:8000/request",
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        artworkId: id,
                        buyerId: user.id,
                      }),
                    }
                  );
                }}
              >
                Request to Buy
              </button>
            ) : (
              <p>Please login to request to buy</p>
            )}

          </div>
        </div>
      )}
      {transaction && (
        <Cert transaction={transaction.data} artwork={artwork}></Cert>
      )}
    </Layout>
  );
}
