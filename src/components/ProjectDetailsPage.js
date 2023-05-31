import { useState, useEffect } from 'react';
import projectsData from '../projects-data.json'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const apiUrl = "https://rickandmortyapi.com/api/character";

export function ProjectDetailsPage(){
   const [foundProject, setFoundProject] = useState(null);

    const {projectId} = useParams();

    useEffect(() => {
        // const projects = projectsData.find((project) => {
        //     return project._id === projectId;
        // })
      
        // if(projects){
        //   setFoundProject(projects);
        // }

        const characterData = axios.get(apiUrl)
        .then((response) => {
            const responseData = response.data.results;
            const character = responseData.filter((char) => char.id == projectId)
            setFoundProject(character)
            console.log(character);
        })

    }, [])

    return(
       <div>
         <h1>Project Details</h1>
         {!foundProject && <p>Project Not Found!</p>}
         {foundProject && 
          <>
            {foundProject.map((project) => {
                return(
                <div key={project.id}>
                    <p>{project.name}</p>
                </div>
                );
            })}
            {/* <p>{foundProject.description}</p> */}
          </>
         }
         <Link to="/projects">Back</Link>
       </div>
    );
}