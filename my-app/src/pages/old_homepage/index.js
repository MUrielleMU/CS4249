import "./App.css";
import Button from "@material-ui/core/Button";
import { loggingjs } from "./logging";
import old_homepage from "./img/old_homepage.svg";

function App() {
  const loggingClick = () => {
    loggingjs.logEvent(null, "clickCategoryBtn", {
      eventName: "clickCategoryBtn",
      info: { homepage: "OCP" },
    });
  };

  return (
    <div className="App">
      <div className="Btn" onClick={loggingClick}>
        Category
      </div>
    </div>
  );
}

export default App;
