import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { loggingjs } from "@/utils/logging.js";
import { allCategories } from "@/utils/categories";
import { Tooltip } from "antd";

const FullCategory = (props) => {
  const { btnClassName, btnFromPage } = props;

  const logClickCategoryButton = () => {
    loggingjs.logEvent(null, "clickCategoryBtn", {
      eventName: "clickCategoryBtn",
      //e,g: fixed category page(FCP)
      info: { page: btnFromPage },
    });
  };

  const logClickCategoryName = (name) => {
    loggingjs.logEvent(null, `clickCategoryName`, {
      eventName: `clickCategoryName`,
      info: {
        page: btnFromPage,
        category: name,
      },
    });
  };

  // const Categories = (allCategories) => {
  //   <div className={styles.wrapper}>
  //     {allCategories.map((item, index) => (
  //       <div key={`category${index}`}>{item.category}</div>
  //     ))}
  //   </div>;
  // };

  return (
    <Tooltip
      trigger="click"
      placement="bottom"
      arrow={false}
      color="#565860"
      title={
        <div className={styles.wrapper}>
          {allCategories.map((item, index) => (
            <Link
              to={{ pathname: `/game/${item.game}` }}
              key={`category${index}`}
              onClick={() => {
                logClickCategoryName(item.category);
              }}
            >
              <div className={styles.categoryName}>{item.category}</div>
            </Link>
          ))}
        </div>
      }
    >
      <div className={btnClassName} onClick={logClickCategoryButton}>
        Category
      </div>
    </Tooltip>
  );
};

export default FullCategory;
