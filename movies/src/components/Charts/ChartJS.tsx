import { Bar, Line } from "react-chartjs-2";
import styles from "./Charts.module.css";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const ChartJS = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# BarChart Dataset",
        data: [12, 19, 3, 5, 2, 3],

        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: [
          "rgba(255, 23, 68, 0.6)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],

    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "rgb(255, 99, 132)",
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          color: "#ffffff",
        },
        grid: {
          color: "#ffffff",
        }
      },
    },
  };

  const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Line Graph Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "#FF6384",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img
          className="logo"
          src={`${process.env.PUBLIC_URL}/assets/chartjs-logo.svg`}
          alt="logo"
          height="50"
        />
        Chart.js
      </div>
      <div className={styles.charts}>
        <div className={styles.bar}>
          <Bar
            data={data}
            width="100%"
            height="100%"
            options={{
              maintainAspectRatio: false,
              scales: {
                y: {
                  ticks: {
                    color: "#fff",
                  },
                  grid: {
                    color: "rgba(13, 32, 54, 0.3)",
                  },
                },

                x: {
                  ticks: {
                    color: "#fff",
                  },
                },
              },
              plugins: {
                legend: {
                  labels: {
                    color: "#fff",
                  },
                },
              },
            }}
          ></Bar>
        </div>

        <div className={styles.line}>
          <Line
            data={lineChartData}
            width="100%"
            height="100%"
            options={{
              maintainAspectRatio: false,
              scales: {
                y: {
                  ticks: {
                    color: "#fff",
                  },
                  grid: {
                    color: "rgba(13, 32, 54, 0.3)",
                  },
                },

                x: {
                  ticks: {
                    color: "#fff",
                  },
                },
              },

              animations: {
                tension: {
                  duration: 2000,
                  easing: "easeInQuad",
                  from: 1,
                  to: 0,
                  loop: false,
                },
              },

              plugins: {
                legend: {
                  labels: {
                    color: "#fff",
                  },
                },
              },
            }}
          ></Line>
        </div>
      </div>

      <div className={styles.summary}>
        <p style={{ fontSize: "18px" }}>Summary</p>
        <div className={styles.points}>
          <div className={styles.point}>Responsive by default</div>
          <div className={styles.point}>Customizable</div>
          <div className={styles.point}>
            Canvas for drawing support, and no mobile support
          </div>
          <div className={styles.point}>Supports animation</div>
          <div className={styles.point}>Offers various types of charts</div>
          <div className={styles.point}>Detailed documentation</div>
        </div>
      </div>
    </div>
  );
};

export default ChartJS;
