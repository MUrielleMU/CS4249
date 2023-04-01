import { Routes, Route } from "react-router-dom";
import Homepage from "@/pages/Homepage/index.js";
import Intro from "@/pages/introduction/index.js";
import GamePage from "./pages/GamePage";

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Intro />} />
        <Route path="fcp" element={<Homepage isFCP={true} />} />
        <Route path="ccp" element={<Homepage isFCP={false} />} />
        <Route path="game/:name" element={<GamePage />} />
        {/* <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} /> */}

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
