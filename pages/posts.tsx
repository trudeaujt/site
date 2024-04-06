import { GetStaticProps } from "next";
import Link from "next/link";
import { getSortedPostsData, Post } from "@/lib/markdown";
import Layout from "@/components/Layout";

type Props = {
  allPostsData: Post[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

//TODO: get copilot working

function Posts({ allPostsData }: Props) {
  return (
    <div>
      <Layout>
        <h1 className="text-3xl mb-4">All Posts</h1>
        <ul>
          {allPostsData.map(({ id, title, date }) => (
            <li key={id} className="mb-6">
              <Link href={`/posts/${id}`} className="text-blue-300 hover:text-blue-200">
                {title}
              </Link>
              <br />
              <small className="text-gray-500">{date}</small>
            </li>
          ))}
        </ul>
      </Layout>
    </div>
  );
}

export default Posts;
