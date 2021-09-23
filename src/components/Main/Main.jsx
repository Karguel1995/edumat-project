import Searcher from "../Searcher/Searcher";
import Courses from "../Courses/Courses";

import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <h1 className="main__title">Zapisane kursy</h1>
      <Searcher />
      <Courses />
    </main>
  );
};

export default Main;
