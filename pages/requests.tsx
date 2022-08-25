import { useAtom } from "jotai";
import Head from "next/head";
import Link from "next/link";
import useSWR from "swr";

import Layout from "../components/layout";
import { userAtom } from "../context/userContext";
import utilStyles from "../styles/utils.module.css";

export default function Requests() {
  const [user, setUser] = useAtom(userAtom);

  const { data: incRequest, mutate: mutateInc } = useSWR(
    `http://localhost:8000/request/?toId=${user.id}&status=PENDING`
  );
  const { data: outRequest } = useSWR(
    `http://localhost:8000/request/?fromId=${user.id}&status=PENDING`
  );
  const { data: finRequest, mutate: mutateFin } = useSWR(
    `http://localhost:8000/request/finished/?userId=${user.id}`
  );

  const onRequestResponse = async (requestId: string, status: string) => {
    const body = {
      requestId,
      status,
    };
    console.log(JSON.stringify(body));
    await fetch("http://localhost:8000/request/response", {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify(body),
    });
    mutateInc();
    mutateFin();
  };
  return (
    <Layout>
      <Head>
        <title>BlockchainTS | Requests</title>
      </Head>
      <div>
        <div className={utilStyles.item}>
          <table>
            <tr>
              <th>Incoming Requests</th>
            </tr>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Artwork</th>
              <th>Action</th>
            </tr>
            {incRequest &&
              incRequest.map((re, i) => {
                return (
                  <tr>
                    <td>{re.from.username}</td>
                    <td>{re.to.username}</td>
                    <td>
                      <Link href={`/artwork/${re.artwork.id}`}>
                        {re.artwork.label}
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          onRequestResponse(re.id, "ACCEPTED");
                        }}
                      >
                        Accept
                      </button>{" "}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          onRequestResponse(re.id, "REJECTED");
                        }}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
        <div className={utilStyles.item}>
          <table>
            <tr>
              <th>Outgoing Requests</th>
            </tr>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Artwork</th>
              <th>Status</th>
            </tr>
            {outRequest &&
              outRequest.map((re, i) => {
                return (
                  <tr>
                    <td>{re.from.username}</td>
                    <td>{re.to.username}</td>
                    <td>
                      <Link href={`/artwork/${re.artwork.id}`}>
                        {re.artwork.label}
                      </Link>
                    </td>
                    <td>{re.status}</td>
                  </tr>
                );
              })}
          </table>
        </div>
        <div className={utilStyles.item}>
          <table>
            <tr>
              <th>Requests History</th>
            </tr>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Artwork</th>
              <th>Status</th>
            </tr>
            {finRequest &&
              finRequest.map((re, i) => {
                return (
                  <tr>
                    <td>{re.from.username}</td>
                    <td>{re.to.username}</td>
                    <td>
                      <Link href={`/artwork/${re.artwork.id}`}>
                        {re.artwork.label}
                      </Link>
                    </td>
                    <td>{re.status}</td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    </Layout>
  );
}
