import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import FormatDate from '../components/formatDate';

export default function Home({ allPostsData }) {
  const classNames = [utilStyles.headingMd, utilStyles.textCenter].join(' ');

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={classNames}>
        <p>Welcome to my blog | {new Date().toLocaleDateString()}</p>
      </section>
      <section className={`${utilStyles.headingMD} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        {allPostsData && allPostsData.length > 0 && (
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <FormatDate dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        )}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      allPostsData: getSortedPostsData()
    }
  }
}
