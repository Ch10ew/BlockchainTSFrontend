import Link from 'next/link';
import useUser from '../lib/useUser';
import utilStyles from '../styles/utils.module.css';


export default function Header() {
    const { user, mutateUser } = useUser();
    console.log(user);

    return (
        <header>
            <nav>
                <ul className={utilStyles.navbar}>
                    <li className={utilStyles.navbar}>
                        <Link href="/">
                            <a className={utilStyles.navbar} rel="noopener noreferrer">
                                Home
                            </a>
                        </Link>
                    </li>
                    {user && !(user.isLoggedIn) ? (
                        <li className={utilStyles.navbar}>
                            <Link href="/login">
                                <a className={utilStyles.navbar} rel="noopener noreferrer">
                                    Login
                                </a>
                            </Link>
                        </li>
                    ) : (
                        <li className={utilStyles.navbar}>
                            <a
                                className={utilStyles.navbar}
                                onClick={async (event) => {
                                    event.preventDefault();
                                    await fetch('http://localhost:8000/user/logout', {
                                        method: 'POST',
                                    });
                                    mutateUser(null);
                                }}
                            >
                                Logout
                            </a>
                        </li>
                    )}
                    <li className={utilStyles.navbar}>
                        <Link href="/artworks">
                            <a className={utilStyles.navbar} rel="noopener noreferrer">
                                Artworks
                            </a>
                        </Link>
                    </li>
                    <li className={utilStyles.navbar}>
                        <Link href="/transactions">
                            <a className={utilStyles.navbar} rel="noopener noreferrer">
                                Transactions
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}