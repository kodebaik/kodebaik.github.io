import Head from 'next/head'
import { GetStaticProps } from 'next'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from "../lib/posts";
import Link from 'next/link';
import Date from '../components/date';
import Header from '../components/header';
import styles from "./index.module.css";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const portfolioList = [{
  type: 'company profile',
  date: '01 Jul 2019',
  title: 'acsata.com',
  url: 'https://acsata.com',
  image: '/images/portfolio/acsata.com.png'
}, {
  type: '',
  date: '',
  title: '',
  url: '',
  image: '#'
}, {
  type: '',
  date: '',
  title: '',
  url: '',
  image: '#'
},]

export default function Home() {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Header />
      </section>
      <section id="hero" className={[styles.heroContainer, utilStyles.layout].join(' ')}>
        <div>
          <h2>Hi, kita a/ kodeBaik</h2>
          <div style={{ fontStyle: 'italic', }}>FrontEnd Software Engineer </div>
          <div>sedang belajar berbagi <a href="https://medium.com/kodebaik">tulisan</a>, audio & video.</div>

          <div>
            <a className="github-button" href="https://github.com/kodebaik" data-show-count="true" aria-label="Follow @kodebaik on GitHub">Follow @kodebaik</a>
            <script async defer src="https://buttons.github.io/buttons.js"></script>

          </div>
          <div>
            <a href="https://twitter.com/kodebaik?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @kodeBaik</a>
            <script async src="https://platform.twitter.com/widgets.js"></script>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src="/images/profile.jpg" alt="avatar" />
          <div className={styles.avatarBackground}>
            <img src="/images/profile.jpg" alt="avatar" />
          </div>
        </div>
        {/* <Link href="/blog"><a>sementara bisa lihat blog saya</a></Link> */}
      </section>
      <section id="portfolio" className={[styles.portfolioContainer, utilStyles.layout].join(' ')}>
        <h2>Portfolio</h2>

        <div className={styles.portfolioList}>
          {portfolioList.map(({ type, date, title, url, image }, index) => {
            return (
              <div key={index} className={styles.portfolio}>
                <div className={styles.portfolioInner}>
                  <div>{type} ~ {date}</div>
                  <a href={url} target="_blank">{title}</a>

                  <div>
                    <img src={image} alt={`image ${title}`} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
