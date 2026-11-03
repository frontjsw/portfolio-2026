import { useEffect, useState } from "react";
import "./Header.scss";
export const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`main-header ${isScroll ? "is-scroll" : ""}`}>
      <div className="header-inner">
        <nav className="nav-section">
          <h1 className="logo">JOSEUNGWON</h1>
          <ul className="nav-list">
            <li className="nav-item">
              <a className="nav-link" href="#project-section">
                PROJECT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#app-section">
                APP
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#site-section">
                SITE
              </a>
            </li>
          </ul>
        </nav>
        <div className="actions-section">
          <a
            className="link-btn github-link"
            href="https://github.com/frontjsw?tab=overview&from=2025-12-01&to=2025-12-31"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </header>
  );
};
