import { useAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/router";
import { userAtom } from "../context/userContext";
import useUser from "../lib/useUser";
import utilStyles from "../styles/utils.module.css";

export default function Header() {
  const [user, setUser] = useAtom(userAtom);
  const router = useRouter();

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
          {!user?.loggedIn ? (
            <li className={utilStyles.navbar}>
              <Link href="/login">
                <a className={utilStyles.navbar} rel="noopener noreferrer">
                  Login
                </a>
              </Link>
            </li>
          ) : (
            <>
              <li className={utilStyles.navbar}>
                <a
                  className={utilStyles.navbar}
                  onClick={async (event) => {
                    event.preventDefault();
                    await fetch("http://localhost:8000/user/logout", {
                      method: "POST",
                    });
                    setUser({
                      loggedIn: false,
                      username: "",
                      userType: "",
                      id: "",
                    });
                  }}
                >
                  Logout ({user.username})
                </a>
              </li>
              <li className={utilStyles.navbar}>
                <Link href="/requests">
                  <a className={utilStyles.navbar} rel="noopener noreferrer">
                    Requests
                  </a>
                </Link>
              </li>
              {user.userType.localeCompare("ARTIST") === 0 ? (
                <li className={utilStyles.navbar}>
                  <Link href="/artist/upload">
                    <a className={utilStyles.navbar} rel="noopener noreferrer">
                      Upload
                    </a>
                  </Link>
                </li>
              ) : (
                <>
                </>
              )
              }
            </>
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
    </header >
  );
}
