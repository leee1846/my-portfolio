import * as Styled from "./Project.style";

type ProjectProps = {
  project: {
    id: number;
    image: string;
    title: string;
    content: string;
    concept: string[];
    githubUrl: string;
    githubContent: string;
  };
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
