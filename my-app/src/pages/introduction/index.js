import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { loggingjs } from "@/utils/logging.js";
import { Button, Steps, Input } from "antd";

const Intro = () => {
  const [current, setCurrent] = useState(0);
  const [trialID, setTrialID] = useState("");
  const localStorage = window.localStorage;

  const next = () => {
    // log trail id
    if (current === 0) {
      localStorage.setItem("trial_id", trialID);
      loggingjs.logEvent(null, "enterTrailID", {
        eventName: "enterTrailID",
        info: { trialID },
      });
    }
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onInputChange = (e) => {
    const inputValue = e.target.value;
    const reg = /^-?\d*(\.\d*)?$/;
    // must be number
    if (reg.test(inputValue) || inputValue === "") {
      setTrialID(inputValue);
    }
  };

  const steps = [
    {
      title: "Step 1",
      description: "Enter your trial ID",
      content: (
        <Input
          value={trialID}
          onChange={onInputChange}
          allowClear
          placeholder="Enter a number"
        />
      ),
    },
    {
      title: "Step 2",
      description: "Select the category page in your trial",
      content: (
        <div className={styles.redirect}>
          <Link
            to="/fcp"
            className={styles.FCP}
            onClick={() => {
              if (localStorage) {
                localStorage.setItem("isFCP", "true");
              }
            }}
          >
            Fixed Category List (FCP) page
          </Link>
          <Link
            to="/ccp"
            className={styles.CCP}
            onClick={() => {
              if (localStorage) {
                localStorage.setItem("isFCP", "false");
              }
            }}
          >
            Customized Category Page (CCP)
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div>
        <h1>Welcome to CS4249-PG05 experiment</h1>
        <Steps current={current} items={steps} />
        <div className={styles.content}>{steps[current].content}</div>
        <div style={{ marginTop: 24 }}>
          {current < steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => {
                next();
              }}
            >
              Next
            </Button>
          )}
          {/* {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )} */}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
