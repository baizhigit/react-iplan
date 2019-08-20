import React from 'react';

const ProjectDetails = props => {
  const { id } = props.match.params;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            dolores quidem cupiditate nobis eius temporibus dolor ea iure.
            Nostrum cum deleniti quibusdam blanditiis nulla cumque harum tempore
            iste vitae excepturi?
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by John Snow</div>
          <div>22nd August, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
