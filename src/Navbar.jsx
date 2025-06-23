function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title"></a>
      <ul>
        <li>
          <a href="https://github.com/sophieynw" target="_blank">
            <img src="github.png" alt="github" width="20px" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sophie-y-wang" target="_blank">
            <img src="linkedin.png" alt="linkedin" width="20px" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
