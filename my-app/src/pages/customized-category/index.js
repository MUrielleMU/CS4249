import styles from "./index.module.css";
import { loggingjs } from "@/utils/logging.js";
import { Link } from "react-router-dom";
import * as cx from "classnames";
import { customizedCategories } from "@/utils/customized_categories";

const CustomizedCategory = (props) => {
  const { btnClassName, btnFromPage } = props;

  const logClickCategoryName = (name) => {
    loggingjs.logEvent(null, `clickCategoryName`, {
      eventName: `clickCategoryName`,
      info: {
        page: btnFromPage,
        category: name,
      },
    });
  };

  return (
    <div className={cx(btnClassName, styles.wrapper)}>
      <div className={styles.title}>Customized Categories</div>
      {customizedCategories.map((item, index) => (
        <Link
          to={{ pathname: `/game/${item.game}` }}
          className={styles.categoryName}
          key={`category${index}`}
          onClick={() => {
            logClickCategoryName(item.category);
          }}
        >
          <div className={styles.categoryName}>{item.category}</div>
        </Link>
      ))}
    </div>
  );
};

export default CustomizedCategory;
