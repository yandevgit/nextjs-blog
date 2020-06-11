// pages/404.js
import Head from 'next/head'
import utilStyle from '../styles/utils.module.css'
import Layout from '../components/layout'

export default function Custom404() {
    return (
        <Layout>
            <Head>  
                <title>404 - Page Not Found</title>
            </Head>
            <section className={utilStyle.headingMd}>
                <h1 className={utilStyle.center}>404 - Page Not Found</h1>
            </section>
        </Layout>
    )
}