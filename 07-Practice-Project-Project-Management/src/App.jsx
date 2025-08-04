import { useState } from "react";

import Sidebar from "./components/Sidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectProjectId: undefined,
    project: [],
  });

  const handleStartAddProject = function () {
    setProjectsState(preState => {
      return {
        ...preState,
        selectProjectId: null,
      };
    });
  }

  let content;

  if (projectsState.selectProjectId === null) {
    content = <NewProject />
  } else if (projectsState.selectProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
