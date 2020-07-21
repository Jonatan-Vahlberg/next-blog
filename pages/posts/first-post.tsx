import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

const FirstPost: React.FC<{}> = () => {
  return (
    <Layout home={false}>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>Hi</h1>
      <Link href={'/'}>
        <a>Back</a>
      </Link>{' '}
    </Layout>
  );
};

export default FirstPost;
