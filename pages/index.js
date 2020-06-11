import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Alert from '../components/alert'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>  
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <Alert type="success">
        <p>Bonjour, je suis Yannick Nkendem Ingénieur de conception en developpement logiciel <br />
        Visitez mon compte <a href="https://twitter.com" title="my twitter" target="_blank">Twitter</a></p>
      </Alert>
        <p>
            Go to the <Link href="/posts/first-post"><a>First Post &rarr;</a></Link> {/* génération statique */}
            {/* Go to the <a href="/posts/first-post">First Post &rarr;</a> */} {/* rendu coté serveur */}
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, author}) => (
            <li className={utilStyles.listItem} key={id}>
              {/* {title}
              <br />
              {author}
              <br />
              {id}
              <br />
              {date} */}
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                  <Date dateString={date} /> 
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props : {
      allPostsData
    }
  }
}