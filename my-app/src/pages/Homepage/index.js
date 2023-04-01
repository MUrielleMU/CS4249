import styles from "./index.module.css";
import FullCategory from "../full-category";
import CustomizedCategory from "../customized-category";

const Homepage = (props) => {
  const { isFCP } = props;
  // isFCP == true: FCP
  // isFCP == flase: CCP
  const pageKind = isFCP
    ? "fixed category page(FCP)"
    : "Customized Category Page (CCP)";
  return (
    <div className={styles.fcp}>
      <FullCategory btnClassName={styles.Btn} btnFromPage={pageKind} />
      {!isFCP && (<CustomizedCategory btnClassName={styles.customizeCategory} btnFromPage={pageKind}  />)}
    </div>
  );
};

export default Homepage;
