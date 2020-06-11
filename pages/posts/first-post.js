import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Alert from '../../components/alert'
import utilStyles from '../../styles/utils.module.css'

const siteTitle = 'My First Post'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section className={utilStyles.headingMd}>
                <Alert type="success">
                    <h1>First Post By Yan Ever</h1>
                </Alert>
                <p>
                    Go to the <Link href="/posts/second-post"><a>Second Post &rarr;</a></Link>
                </p>
            </section>
            <style jsx>{`
                /* custom style for this page */
            `}</style>
        </Layout>
    ) 
}