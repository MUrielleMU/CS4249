import React from "react";
import { Link } from "react-router-dom";
import { loggingjs } from "@/utils/logging.js";
import { Button, Tooltip } from "antd";

const EndTrialBtn = (props) => {
  const { text } = props;
  const trialID = window?.localStorage?.getItem("trial_ID");

  const handleEndTrial = () => {
    const localStorage = window?.localStorage;
    if (localStorage) {
      //reset all localstorage
      // !important: don't delete trial_id!! It's used in complete page.
      localStorage.removeItem("cart");
      localStorage.removeItem("isFCP");
    }

    // logging
    loggingjs.logEvent(null, "completeTrial", {
      eventName: "completeTrial",
      info: { trialID },
    });
  };
  return (
    <Tooltip title={"By clicking it, you will end current trial!"}>
      <Link to="/complete" onClick={handleEndTrial}>
        <Button style={{ backgroundColor: "#D64437", color: "#fff" }}>
          {text}
        </Button>
      </Link>
    </Tooltip>
  );
};

export default EndTrialBtn;
