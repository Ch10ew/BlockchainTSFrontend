import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

import Layout from '../components/layout';
import LoginForm from '../components/loginForm';
import utilStyles from '../styles/utils.module.css';
import useUser from '../lib/useUser';

export default function Login() {
    const { user, mutateUser } = useUser({
        redirectTo: '/someAfterLoginPage',
        redirectIfFound: true,
    });

    console.log(user);

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

                            setErrorMessage(''); // Reset

                            const body = {
                                username: event.currentTarget.username.value,
                                password: event.currentTarget.password.value,
                            };

                            try {
                                const res = await (await fetch('http://localhost:8000/user/login', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify(body),
                                })).json().then(x => { return x; });

                                mutateUser(
                                    await (await fetch('api/login', {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify(res),
                                    })).json().then(x => { return x; }),
                                    false,
                                );
                            }
                            catch (error) {
                                console.log('An unexpected error happened: ', error);
                                setErrorMessage('' + error);
                            }
                        }
                    }
                />
                <p className={utilStyles.center}>
                    Dont have an account?{' '}
                    <Link href='/signup'>Sign Up</Link>
                </p>
            </div>
        </Layout>
    );
}
