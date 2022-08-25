import Head from 'next/head';
import { useState } from 'react';

import Layout from '../components/layout';
import LoginForm from '../components/loginForm';

export default function Login() {
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <Layout>
            <Head>
                <title>BlockchainTS | Login</title>
            </Head>
            <div className='login'>
                <LoginForm
                    errorMessage={errorMessage}
                    onSubmit={
                        async function handleSubmit(event) {
                            event.preventDefault();
                            setErrorMessage('test error');
                            console.log(event);
                        }
                    }
                />
            </div>
        </Layout>
    );
}
