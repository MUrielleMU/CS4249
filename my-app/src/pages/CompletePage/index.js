import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { loggingjs } from "@/utils/logging.js";

const Complete = () => {
  const trialID = window?.localStorage?.getItem("trial_id");

  return (
    <div className={styles.wrapper}>
      <div>
        <h1>
          Congratulations! {trialID && `You've finished trial ${trialID}`}
        </h1>
        <h2>Are you ready for next trial?</h2>
        <div style={{ marginTop: 24 }}>
          <Link to="/">
            <Button style={{ backgroundColor: "#75B022", color: "#fff" }}>
              GO
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Complete;
