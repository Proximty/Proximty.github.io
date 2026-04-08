import { useParams } from "react-router-dom";
import projectData from "../data/projectData.json";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectMechanics from "../components/projects/ProjectMechanics";
import ProjectPrevNext from "../components/projects/ProjectPrevNext";

export default function ProjectPage() {
    const { projectId } = useParams();
    let currentList = projectData.projects;
    let project = currentList.find(p => p.id === projectId);

    if (!project) {
        // Look in categories
        for (const catKey in projectData.categories || {}) {
            const sublist = projectData.categories[catKey].projects;
            const found = sublist.find(p => p.id === projectId);
            if (found) {
                project = found;
                currentList = sublist;
                break;
            }
        }
    }

    if (!project) {
        return <div className="container mx-auto px-4 py-32 text-center text-pink-700 font-bold">Project niet gevonden</div>;
    }

    // Find previous and next projects (with looping)
    const currentIndex = currentList.findIndex(p => p.id === projectId);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : currentList.length - 1;
    const nextIndex = currentIndex < currentList.length - 1 ? currentIndex + 1 : 0;
    
    const previousProject = { 
        title: currentList[previousIndex].title, 
        url: `/projects/${currentList[previousIndex].id}` 
    };
    const nextProject = { 
        title: currentList[nextIndex].title, 
        url: `/projects/${currentList[nextIndex].id}` 
    };

    return (
        <div>
            <ProjectHeader project={project} />
            <ProjectInfo project={project} />
            <ProjectMechanics project={project} />
            <ProjectGallery project={project} />
            <ProjectPrevNext previous={previousProject} next={nextProject} />
        </div>   
    );   
}