// header, link React/dom/css/footer/
import { React } from "react";
import "../styles/ProjectsPage.css";

const ProjectsWindowPage = () => {
    return (
        <div id="project3">
            <div className="project-item">
                <a href="https://github.com/Clarky13F/new-project-3" target="_blank" rel="noopener noreferrer">
                    <img src="../src/images/135402.png" className="clickableImage" alt="Project 3" />
                </a>
            </div>
            <div className="project-item">
                <a href="https://github.com/3lectricfly69/EeriePapers" target="_blank" rel="noopener noreferrer">
                    <img src="../src/images/Screenshot109.png" className="clickableImage" alt="Eerie Papers" />
                </a>
            </div>
            <div className="project-item">
                <a href="https://github.com/RPMcQuigg/Vandy-Project-01" target="_blank" rel="noopener noreferrer">
                <img src="../src/images/repo-screenshot.png" className="clickableImage" alt="Local List"></img></a>
            </div>
        </div>
    )
}



//   const profile = data?.profile || {};

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div>
//       <h2 className="card-header">
//         {profile.name}'s friends have endorsed these skills...
//       </h2>

//       {profile.skills?.length > 0 && <SkillsList skills={profile.skills} />}

//       <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
//         <SkillForm profileId={profile._id} />
//       </div>
//     </div>
//   );
// };

export default ProjectsWindowPage