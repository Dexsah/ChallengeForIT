import { Routes, Route } from "react-router-dom";
import { ViewTask } from "./page/View-task";
import { CreateTask } from "./page/Create-task";
import { EditTask } from "./page/Edit-task";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ViewTask />} />
      <Route path="/create" element={<CreateTask />} />
      <Route path="/:id" element={<EditTask />} />
    </Routes>
  );
};

export default App;
