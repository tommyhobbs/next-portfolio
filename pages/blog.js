import Link from 'next/link';
import Layout from '../components/Layout';

const PostLink = ({ slug, title }) => (
  <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
      <a>{`${title} Post`}</a>
    </Link>
  </li>
);
export default () => (
  <Layout title="Blog">
    <ul>
      <PostLink slug="react-post" title="React" />
      <PostLink slug="angular-post" title="Angular" />
      <PostLink slug="vue-post" title="Vue" />
    </ul>
  </Layout>
);
