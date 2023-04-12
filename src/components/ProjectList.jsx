export default function ProjectList({ projects }) {
  return (
    <div className="projects">
      {
        projects.map(project => (
          <div className='project'>
            <img src={project.img} alt="" />            
          </div>
        ))
      }
    </div>
  );
}