import { useAtom } from 'jotai';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import Layout from '../../components/layout';
import { userAtom } from '../../context/userContext';
import fetchJson from '../../lib/fetchJson';
import utilStyles from '../../styles/utils.module.css';

export default function Upload() {
    const [user, setUser] = useAtom(userAtom);
    const router = useRouter();

    if (!user.loggedIn) {
        router.push('/login');
    }

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("artworkImg", data.file[0]);
        formData.append("label", data.label);

        const res = await fetchJson("http://localhost:8000/artwork/upload", {
            method: "POST",
            headers: { "Content-Type": "multipart/form-data" },
            body: formData,
        });
    }

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
