import { useState, useEffect } from "react";
import {Link , useParams } from "react-router-dom";

export function ProjectsPage(props){
    const [projects, setProjects] = useState([]);

     useEffect(() => {
     setProjects(props.projects);
     }, [props.projects])

    return(
     <div>
        <h1>ProjectsPage</h1>
        {projects.map((project) => {
            return(
            <div key={project._id}>
              <Link to={`/projects/${project._id}`}>
                {project.name}
              </Link>
              <p>{project.technologies}</p>
            </div>
            );
        })}
     </div>
    );
}