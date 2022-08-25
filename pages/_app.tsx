import { useAtom } from "jotai";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SWRConfig } from "swr";
import { userAtom } from "../context/userContext";
import fetchJson from "../lib/fetchJson";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [user, setUser] = useAtom(userAtom);
  useEffect(() => {
    if (!user.loggedIn) router.push("/");
  }, [user]);
  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: (err) => {
          console.error(err);
        },
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}
