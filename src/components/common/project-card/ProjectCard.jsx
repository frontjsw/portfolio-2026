import { ArrowRight } from "lucide-react";
import "./ProjectCard.scss";

export const ProjectCard = ({ data }) => {
  return (
    <ul className="project-card-list">
      {data.map((project, index) => (
        <li className="project-card" key={index}>
          <div className="project-thumbnail">
            <img src={project.thumbnail} alt={project.title ?? "타이틀"} />
          </div>
          <div className="project-meta">
            <h3 className="project-title">{project.title ?? "타이틀"}</h3>
            <span className="project-period">
              {project.period ?? "기간 미공개"}
            </span>
            <div className="project-info-row">
              <div className="project-info-item">
                <span className="label">퍼블리싱 참여 인원</span>
                <span className="value">{project.teamSize ?? "0명"}</span>
              </div>
              <div className="project-info-item">
                <span className="label">기여도</span>
                <span className="value">{project.contribution ?? "0%"}</span>
              </div>
            </div>
            {project.stack && (
              <ul className="project-stack-list">
                {project.stack.map((stack, index) => (
                  <li className="stack" key={index}>
                    {stack}
                  </li>
                ))}
              </ul>
            )}
            <p className="project-description">{project.description ?? ""}</p>
            {project.link && (
              <a className="project-link" href={project.link} target="_blank">
                사이트 보기
                <ArrowRight width={16} height={16} />
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
