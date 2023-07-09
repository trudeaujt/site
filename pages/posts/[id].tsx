import { GetStaticProps, GetStaticPaths } from "next";
import { getAllPostIds, getPostData } from "../../lib/markdown";
import Head from "next/head";
import Layout from "../../components/layout";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    description: string;
    image: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout
      title={postData.title}
      description={postData.description}
      image={postData.image}
    >
      <article className="py-16 px-4 mx-auto max-w-none sm:py-24 sm:px-6 lg:px-8 prose lg:prose-lg">
        <h1 className="mb-8 text-4xl font-bold">{postData.title}</h1>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Check if params is not undefined
  if (params && params.id) {
    const postData = await getPostData(params.id as string);
    return {
      props: {
        postData,
      },
    };
  }

  // If params is undefined, return an error or an empty object.
  return {
    notFound: true,
  };
};
