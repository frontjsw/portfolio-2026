import { ProjectCard } from "@/components";
import "./Home.scss";
import { app, projects, site } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export const Home = () => {
  return (
    <div className="home">
      <section className="section info-section">
        <div className="info-main">
          <span className="info-label">Publisher</span>
          <p className="info-description">
            안녕하세요, 기획자와 디자이너의 의도를
            <br />
            정확히 구현하는 4년차 퍼블리셔 조승원입니다.
          </p>
          <a className="info-contact" href="mailto:frontjsw@gmail.com">
            Contact <ArrowRight width={20} height={20} />
          </a>
        </div>
        <div className="info-side">
          <ul className="info-stats">
            <li className="info-stat">
              <strong className="num">4</strong>
              <span className="text">Years</span>
            </li>
            <li className="info-stat">
              <strong className="num">5</strong>
              <span className="text">Projects</span>
            </li>
          </ul>
          <div className="info-career">
            <h3 className="info-career-title">CAREER</h3>
            <ul className="info-career-list">
              <li className="info-career-item">
                <p className="info-career-company">오투유엑스</p>
                <p className="info-career-period">2022.08 - 2026.02</p>
              </li>
              {/* <li className="info-career-item">
                <p className="info-career-company">오투유엑스</p>
                <p className="info-career-period">2022.08 - 2026.02</p>
              </li> */}
            </ul>
          </div>
          <ul className="info-stack-list">
            <li className="info-stack-item">HTML</li>
            <li className="info-stack-item">CSS/SCSS</li>
            <li className="info-stack-item">JavaScript</li>
            <li className="info-stack-item">React</li>
            <li className="info-stack-item">TypeScript</li>
            <li className="info-stack-item">Figma</li>
            <li className="info-stack-item">Git</li>
          </ul>
        </div>
      </section>
      <section id="project-section" className="section project-section">
        <h2 className="section-title">PROJECT</h2>
        <ProjectCard data={projects} />
      </section>
      <section id="app-section" className="section app-section">
        <h2 className="section-title">APP</h2>
        <ProjectCard data={app} />
      </section>
      <section id="site-section" className="section site-section">
        <h2 className="section-title">SITE</h2>
        <ProjectCard data={site} />
      </section>
    </div>
  );
};
