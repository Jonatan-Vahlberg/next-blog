import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { GetStaticProps } from 'next';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/Date';

const Home: React.FC<{
  allPostsData: {
    [key: string]: any;
    id: string;
  }[];
}> = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          I am a Swedish programmer from Stockholm, currently enrolled in a two year Application development course hosted by STI (Stockholm Institute of Technology). The main goal with the course is
          to give budding programers a more real program closely tied with the current tech industry. The course helps us develop a lot of different skills such as "HTML, CSS, SCCS, Javascript and
          NodeJS" for web development. "IOS/Swift, Java, xamarin and React-Native" for more native and hybrid mobile development. Alongside these skills we also develop a sense of UI/UX, good clean
          coding, debugging, avoiding antipatterns, light database handling, working with APIs and perhaps most importantly, internships with real companies, where we get to further develop our skills
          in real world projects.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={'/posts/[id]'} as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;
