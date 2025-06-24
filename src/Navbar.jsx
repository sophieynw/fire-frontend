function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title"></a>
      <ul>
        <li>
          <a href="https://github.com/sophieynw/fire-frontend" target="_blank">
            <img src="github.png" alt="github" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sophie-y-wang" target="_blank">
            <img src="linkedin.png" alt="linkedin" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
