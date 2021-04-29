import * as Styled from "./Project.style";
import { projectsType } from "../../stores/projects/projectsReducer";

type ProjectProps = {
  project: projectsType;
};

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <Styled.Project key={project.id}>
      <Styled.ImageBox>
        <Styled.Img src={project.image} alt='' />
      </Styled.ImageBox>
      <Styled.Title>{project.title}</Styled.Title>
      <Styled.Content>
        {project.content}
        <ul>
          {project.concept.map((list, idx) => (
            <li key={idx}>-{list}</li>
          ))}
        </ul>
      </Styled.Content>
      <Styled.Github href={project.githubUrl}>
        {project.githubContent}
      </Styled.Github>
    </Styled.Project>
  );
};

export default Project;
