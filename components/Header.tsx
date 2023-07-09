import Link from "next/link";

function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
