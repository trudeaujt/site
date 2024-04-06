import Link from "next/link";

function Header() {
  return (
    <header className="flex sticky top-0 justify-center py-2 space-x-4 text-white bg-gray-800 shadow-md">
      <nav className="flex space-x-4">
        <Link href="/" className="hover:text-blue-300">
          Home
        </Link>
        <Link href="/posts" className="hover:text-blue-300">
          Posts
        </Link>
        <Link href="/about" className="hover:text-blue-300">
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;
