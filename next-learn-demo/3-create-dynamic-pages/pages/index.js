import Layout from '../components/MyLayout.js';
import Link from 'next/link';

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
    <a>{props.title}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>Blog</h1>
      <p>Hello Next.js</p>
      <ul>
        <PostLink title="Hello NextJs"/>
        <PostLink title="Learn NextJs is awesome"/>
        <PostLink title="deploy Apps with Zenit"/>
      </ul>
    </Layout>
  );
};
