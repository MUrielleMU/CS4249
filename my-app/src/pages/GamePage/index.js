import styles from "./index.module.css";
import FullCategory from "../full-category";
import { useParams } from "react-router-dom";
import CustomizedCategory from "../customized-category";
import { Button } from "antd";

const GamePage = () => {
  const localStorage = window.localStorage;
  const isFCP = localStorage.getItem("isFCP");
  const params = useParams();
  const gameName = params?.name?.replace(/\s/g, "");
  // isFCP == true: FCP
  // isFCP == flase: CCP
  const pageKind =
    isFCP == 1 ? "fixed category page(FCP)" : "Customized Category Page (CCP)";

  return (
    <div
      style={{
        backgroundImage: `url(${require(`@/img/games/${gameName}.png`)})`,
      }}
      className={styles.wrapper}
    >
      <FullCategory btnClassName={styles.Btn} btnFromPage={pageKind} />
      {isFCP == 0 && (
        <CustomizedCategory
          btnClassName={styles.customizeCategory}
          btnFromPage={pageKind}
        />
      )}
      <div className={styles.btnGroup}>
        <Button style={{ marginRight: 10 }}>Add to Cart</Button>
        <Button>Instantly Buy</Button>
      </div>
    </div>
  );
};

export default GamePage;
