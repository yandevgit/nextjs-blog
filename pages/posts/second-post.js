import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Alert from '../../components/alert'
import utilStyles from '../../styles/utils.module.css'

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName : 'Yan',
    lastName  : 'Ever',  
};

const siteTitle = 'My Second Post By ' + formatName(user) ;

export default function SecondPost() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section className={utilStyles.headingMd}>
                <Alert type="error">
                    <h2>Congratulations on your second post {formatName(user)}</h2>
                </Alert>
                <p>
                    Back to <Link href="/posts/first-post"><a>&larr; First Post</a></Link>
                </p>
            </section>

            <style jsx>{`
                /* custom style for this page */
            `}</style>
        </Layout>
    )
}