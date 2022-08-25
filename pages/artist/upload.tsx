import { useAtom } from "jotai";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Layout from "../../components/layout";
import { userAtom } from "../../context/userContext";
import fetchJson from "../../lib/fetchJson";
import utilStyles from "../../styles/utils.module.css";

export default function Upload() {
  const [user, setUser] = useAtom(userAtom);
  const router = useRouter();

  useEffect(() => {
    if (!user.loggedIn) router.push("/");
  }, []);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("artworkImg", data.file[0]);
    formData.append("label", data.label);
    formData.append("userId", user.id);

    const res = await fetch("http://localhost:8000/artwork/upload", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <Layout>
      <Head>
        <title>BlockchainTS | Upload</title>
      </Head>
      <div className={utilStyles.column}>
        <h1 className={utilStyles.center}>Upload an artwork</h1>
        <br />
        <form className={utilStyles.center} onSubmit={handleSubmit(onSubmit)}>
          <span>Artwork Title</span>
          <input type="text" name="label" {...register("label")} required />
          <br />
          <input
            className={`${utilStyles.fileUpload} ${utilStyles.center}`}
            type="file"
            required
            {...register("file")}
          />
          <br />
          <button className={utilStyles.center} type="submit">
            Send to server
          </button>
        </form>
      </div>
    </Layout>
  );
}
