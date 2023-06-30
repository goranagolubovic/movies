import classNames from "classnames";
import React from "react";
import Chart from "react-google-charts";
import styles from "./Charts.module.css";
export const barChartData = [
  ["Color", "Movies", { role: "style" }],
  ["Red", 12, "color:#ff6384;opacity:1"],
  ["Blue", 19, "color:#36a2eb;opacity:0.6"],
  ["Yellow", 3, "color:#ffce56;opacity:0.6"],
  ["Green", 5, "color:#4bc0c0;opacity:0.6"],
  ["Purple", 2, "color:#9966ff;opacity:0.6"],
  ["Orange", 3, "color:#ff9f40;opacity:0.6"],
];
const lineChartData = [
  ["Mounth", "Movies"],
  ["January", 65],
  ["February", 59],
  ["March", 80],
  ["April", 81],
  ["May", 56],
  ["June", 55],
  ["July", 50],
];
export const options = {
  backgroundColor: "none",
  colors: ["#ff6384"],
  maintainAspectRatio: false,
  chartArea: {
    width: "100%",
    left: 40

  },
  height: 400,
  legend: {
    textStyle: {
      color: "#ffffff",
    },
  },
  hAxis: {
    textStyle: {
      color: "#ffffff",
    },
    gridlines: { color: "#0D2036" },
  },
  vAxis: {
    textStyle: {
      color: "#ffffff",
    },

    gridlines: { color: "#0D2036" },
  },
};
const GoogleGraph = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img
          className="logo"
          src={`${process.env.PUBLIC_URL}/assets/googlechart.png`}
          alt="logo"
          height="40"
        />
        Google Chart
      </div>
      <div className={styles.charts}>
        <div className={classNames(styles.bar, styles.googlechart)}>
          <Chart
            chartType="BarChart"
            data={barChartData}
            options={options}
          ></Chart>
        </div>
        <div className={classNames(styles.line, styles.googlechart)}>
          <Chart
            chartType="LineChart"
            data={lineChartData}
            options={options}
          ></Chart>
        </div>
      </div>
      <div className={styles.summary}>
        <p style={{ fontSize: "18px" }}>Summary</p>
        <div className={styles.points}>
          <div className={styles.point}>Not responsive by default</div>
          <div className={styles.point}>Customization can be improved</div>
          <div className={styles.point}>Supports animation</div>
          <div className={styles.point}>Offers various types of charts</div>
          <div className={styles.point}>Detailed documentation</div>
        </div>
      </div>
    </div>
  );
};

export default GoogleGraph;
