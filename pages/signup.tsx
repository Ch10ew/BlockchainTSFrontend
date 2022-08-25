import Link from "next/link";
import Head from "next/head";
import { useState } from "react";

import Layout from "../components/layout";
import SignupForm from "../components/signupForm";
import utilStyles from "../styles/utils.module.css";
import useUser from "../lib/useUser";
import { useRouter } from "next/router";

export default function Signup() {
  const { user, mutateUser } = useUser({
    redirectTo: "/someAfterLoginPage",
    redirectIfFound: true,
  });

  const router = useRouter();

  console.log(user);

  const [errorMessage, setErrorMessage] = useState("");

  return (
    <Layout>
      <Head>
        <title>BlockchainTS | Signup</title>
      </Head>
      <div className="signup">
        <SignupForm
          errorMessage={errorMessage}
          onSubmit={async function handleSubmit(event) {
            event.preventDefault();

            if (
              event.currentTarget.password.value !==
              event.currentTarget.confirmPassword.value
            ) {
              setErrorMessage("Password does not match");
              return;
            }

            if (event.currentTarget.userType.value === "") {
              setErrorMessage("User type not selected");
              return;
            }

            setErrorMessage(""); // Reset

            const body = {
              username: event.currentTarget.username.value,
              password: event.currentTarget.password.value,
              userType: event.currentTarget.userType.value,
            };

            try {
              fetch("http://localhost:8000/user/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
              }).then((x) => router.push("/login"));
            } catch (error) {
              console.log("An unexpected error happened: ", error);
              setErrorMessage("" + error);
            }
          }}
        />
        <p className={utilStyles.center}>
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </Layout>
  );
}
