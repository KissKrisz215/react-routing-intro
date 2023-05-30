import projectsData from '../projects-data.json'
import { useParams, Link } from 'react-router-dom';

export function ProjectDetailsPage(){
    const {projectId} = useParams();
    console.log("ProjectId", projectId);

    const foundProject = projectsData.find((project) => {
        return project._id === projectId;
    })

    return(
       <div>
         <h1>Project Details</h1>
         {!foundProject && <p>Project Not Found!</p>}
         {foundProject && 
          <>
            <h2>{foundProject.name}</h2>
            <p>{foundProject.description}</p>
          </>
         }
         <Link to="/projects">Back</Link>
       </div>
    );
}