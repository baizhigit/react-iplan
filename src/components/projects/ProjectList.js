import React from 'react';

const ProjectList = () => {
  return (
    <div className="project-list section">
      <div className="card z-depth-0 project-summary">
        <span className="card-title">Project Title</span>
        <p>Posted by John Snow</p>
        <p className="grey-text">22nd August, 23pm</p>
      </div>

      <div className="card z-depth-0 project-summary">
        <span className="card-title">Project Title</span>
        <p>Posted by Tyrion Lannister</p>
        <p className="grey-text">22nd August, 23pm</p>
      </div>

      <div className="card z-depth-0 project-summary">
        <span className="card-title">Project Title</span>
        <p>Posted by Dany Targarien</p>
        <p className="grey-text">22nd August, 23pm</p>
      </div>
    </div>
  );
};

export default ProjectList;
