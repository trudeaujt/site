import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
};

export default function Layout({
  children,
  title = "This is the default title",
  description = "This is the default description",
  image = "default-image.jpg",
}: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gray-900">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
