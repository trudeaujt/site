import Head from 'next/head'
import Footer from "@/components/Footer";
import Header from "@/components/Header";

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className="container mx-auto max-w-3xl px-4 md:px-0 mt-4 mb-6 flex-grow">
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout;
