import { useState, useEffect } from "react";

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
              <h3>{project.name}</h3>
              <p>{project.technologies}</p>
            </div>
            );
        })}
     </div>
    );
}