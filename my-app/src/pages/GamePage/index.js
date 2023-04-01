import styles from "./index.module.css";
import { Link } from "react-router-dom";
import FullCategory from "../full-category";
import { useParams } from "react-router-dom";
import CustomizedCategory from "../customized-category";
import { loggingjs } from "@/utils/logging.js";
import { Button, message } from "antd";
import EndTrialBtn from "../endTrialBtn";

const GamePage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const localStorage = window.localStorage;
  const isFCP = localStorage.getItem("isFCP");
  const params = useParams();
  const gameName = params?.name;
  const gameNameFormatted = gameName?.replace(/\s/g, "");
  // isFCP == true: FCP
  // isFCP == flase: CCP
  const pageKind =
    isFCP === 1 ? "fixed category page(FCP)" : "Customized Category Page (CCP)";

  const handleAdd2Cart = () => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      if (gameName) {
        // 去重
        if (cart?.indexOf(gameName) === -1) {
          cart?.push(gameName);
          // logging
          let temp = JSON.stringify(cart);
          localStorage.setItem("cart", temp);
          loggingjs.logEvent(null, "addGameToCart", {
            eventName: "addGameToCart",
            info: { gameName },
          });
        }
      }
    } else {
      if (gameName) {
        let cart = JSON.stringify([gameName]);
        localStorage.setItem("cart", cart);
        loggingjs.logEvent(null, "addGameToCart", {
          eventName: "addGameToCart",
          info: { gameName },
        });
      }
    }
  };
  const handleInstantlyBuy = () => {
    //logging
    loggingjs.logEvent(null, "instantlyBuyGame", {
      eventName: "instantlyBuyGame",
      info: { gameName },
    });

    messageApi.success("Successfully bought game");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${require(`@/img/games/${gameNameFormatted}.png`)})`,
      }}
      className={styles.wrapper}
    >
      {contextHolder}
      <FullCategory btnClassName={styles.Btn} btnFromPage={pageKind} />
      {isFCP === "false" && (
        <CustomizedCategory
          btnClassName={styles.customizeCategory}
          btnFromPage={pageKind}
        />
      )}
      <div className={styles.btnGroup}>
        <Link to="/cart" onClick={handleAdd2Cart}>
          <Button className={styles.add2Cart}>Add to Cart</Button>
        </Link>
        <Button className={styles.instantlyBuy} onClick={handleInstantlyBuy}>
          Instantly Buy
        </Button>
      </div>
      <div className={styles.endTrialBtn}>
        <EndTrialBtn text={"End Current Trial"} />
      </div>
    </div>
  );
};

export default GamePage;
