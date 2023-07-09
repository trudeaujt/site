import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export type Post = {
  id: string;
  date?: string;
  title: string;
  description: string;
  image: string;
  contentHtml: string;
};

async function parseMarkdownFile(fileName: string): Promise<Post> {
  const id = fileName.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date || "",
    description: matterResult.data.description,
    image: matterResult.data.image,
  };
}

export async function getSortedPostsData(): Promise<Post[]> {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(parseMarkdownFile);

  return Promise.all(allPostsData).then((posts) =>
    posts.sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return a.date < b.date ? 1 : -1;
    })
  );
}

export async function getPostData(id: string): Promise<Post> {
  return parseMarkdownFile(`${id}.md`);
}

export function getAllPostIds(): { params: { id: string } }[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: { id: fileName.replace(/\.md$/, "") },
  }));
}
