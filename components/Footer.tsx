const Footer = () => {
  return (
    <footer className="flex justify-center py-2 space-x-4 w-full text-white bg-gray-800">
      <a
        href="https://hachyderm.io/@jonathan"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-300"
      >
        Mastodon
      </a>
      <a
        href="https://github.com/trudeaujt"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-300"
      >
        GitHub
      </a>
      <a
        href="https://jp.linkedin.com/in/jonathan-trudeau"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-300"
      >
        LinkedIn
      </a>
      <p>© 2023 - 2024 Jonathan Trudeau</p>
    </footer>
  );
};

export default Footer;