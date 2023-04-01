import { Routes, Route } from "react-router-dom";
import Homepage from "@/pages/Homepage";
import Intro from "@/pages/introduction";
import GamePage from "@/pages/GamePage";
import Cart from "@/pages/CartPage";
import Complete from "@/pages/CompletePage";

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Intro />} />
        <Route path="fcp" element={<Homepage />} />
        <Route path="ccp" element={<Homepage />} />
        <Route path="game/:name" element={<GamePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="complete" element={<Complete />} />
        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
