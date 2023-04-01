import styles from "./index.module.css";
import FullCategory from "../full-category";
import CustomizedCategory from "../customized-category";

const Homepage = () => {
  const isFCP = window?.localStorage?.getItem("isFCP");
  // isFCP == true: FCP
  // isFCP == flase: CCP
  // !!! important note: in localstorage, a boolean value is stored as a string!!!
  const pageKind =
    isFCP === "true"
      ? "fixed category page(FCP)"
      : "Customized Category Page (CCP)";
  return (
    <div className={styles.fcp}>
      <FullCategory btnClassName={styles.Btn} btnFromPage={pageKind} />
      {isFCP === "false" && (
        <CustomizedCategory
          btnClassName={styles.customizeCategory}
          btnFromPage={pageKind}
        />
      )}
    </div>
  );
};

export default Homepage;
