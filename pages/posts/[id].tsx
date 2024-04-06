import Layout from "@/components/Layout";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  getAllPostIds,
  getPostData,
  Post as PostType,
} from "../../lib/markdown";

type Props = {
  postData: PostType;
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export default function Post({ postData }: Props) {
  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
  }
  console.log(postData);
  return (
    <div>
      <Layout>
        <h1 className="text-4xl mb-2">{postData.title}</h1>
        <div className="mb-6 text-gray-500">{postData.date}</div>
        {postData.image && (
          <Image
            src={postData.image}
            alt={postData.title}
            width={600}
            height={400}
            className="mb-6"
          />
        )}
        <div
          className="prose lg:prose-lg dark:prose-dark max-w-none"
          dangerouslySetInnerHTML={{
            __html: postData.contentHtml.replace(
              /<pre class="language-(\w+)"><code[^>]*>([\s\S]*?)<\/code><\/pre>/g,
              (match, language, code) => `
                <div class="code-block">
                  <div class="code-header">
                    <span class="code-language">${language}</span>
                    <span class="copy-code" onclick="copyCode(this.parentElement.nextElementSibling.textContent)">Copy Code</span>
                  </div>
                  <pre class="language-${language}"><code>${code}</code></pre>
                <div>
                `
            ),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `function copyCode(code) { navigator.clipboard.writeText(code); }`,
          }}
        />
      </Layout>
    </div>
  );
}
