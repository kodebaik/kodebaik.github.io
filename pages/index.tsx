import Head from 'next/head'
import { GetStaticProps } from 'next'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from "../lib/posts";
import Link from 'next/link';
import Date from '../components/date';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Hiii, kontent segera dibuat</h1>
        <Link href="/blog"><a>sementara bisa lihat blog saya</a></Link>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

      </section>
    </div>
  )
}
