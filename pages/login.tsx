import Link from "next/link";
import Head from "next/head";
import { useState } from "react";

import Layout from "../components/layout";
import LoginForm from "../components/loginForm";
import utilStyles from "../styles/utils.module.css";
import useUser from "../lib/useUser";
import fetchJson from "../lib/fetchJson";
import { userAtom } from "../context/userContext";
import { useAtom } from "jotai";
import Router, { useRouter } from "next/router";

export default function Login() {
  const [user, setUser] = useAtom(userAtom);
  const router = useRouter();
  console.log(user);

  const [errorMessage, setErrorMessage] = useState("");

  return (
    <Layout>
      <Head>
        <title>BlockchainTS | Login</title>
      </Head>
      <div className="login">
        <LoginForm
          errorMessage={errorMessage}
          onSubmit={async function handleSubmit(event) {
            event.preventDefault();

            setErrorMessage(""); // Reset

            const body = {
              username: event.currentTarget.username.value,
              password: event.currentTarget.password.value,
            };

            try {
              const res = await await fetchJson(
                "http://localhost:8000/user/login",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(body),
                }
              );
              console.log(res);
              if (res) {
                // @ts-ignore
                setUser({
                  loggedIn: true,
                  ...(res as object),
                });
                router.push("/");
              }
            } catch (error) {
              console.log("An unexpected error happened: ", error);
              setErrorMessage("" + error);
            }
          }}
        />
        <p className={utilStyles.center}>
          Dont have an account? <Link href="/signup">Sign Up</Link>
        </p>
      </div>
    </Layout>
  );
}
