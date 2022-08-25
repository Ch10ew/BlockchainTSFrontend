import Layout from '../components/layout';

export default function someAfterLoginPage({ user }) {
    return (
        <Layout>
            <h1>Hi {user ? user.username : ''} this page is after login</h1>
        </Layout>
    );
}

/* export function getServerSideProps() {

}*/