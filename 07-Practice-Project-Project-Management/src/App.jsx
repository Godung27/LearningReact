import { useState } from "react";

import Sidebar from "./components/Sidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectProjectId: undefined,
    projects: [],
  });

  const handleStartAddProject = function () {
    setProjectsState(preState => {
      return {
        ...preState,
        selectProjectId: null,
      };
    });
  }

  const handleCancelAddProject = function () {
    setProjectsState(preState => {
      return {
        ...preState,
        selectProjectId: undefined,
      };
    });
  }

  const handleAddProject = function (projectData) {
    setProjectsState(preState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...preState,
        selectProjectId: undefined,
        projects: [...preState.projects, newProject],
      };
    });
  }

  let content;

  if (projectsState.selectProjectId === null) {
    content = <NewProject
      onAdd={handleAddProject}
      onCancel={handleCancelAddProject}
    />
  } else if (projectsState.selectProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
