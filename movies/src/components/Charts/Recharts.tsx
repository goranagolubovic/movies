import styles from "./Charts.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";

const barChartData = [
  {
    name: "Red",
    movies: 12,
  },
  {
    name: "Blue",
    movies: 19,
  },
  {
    name: "Yellow",
    movies: 3,
  },
  {
    name: "Green",
    movies: 5,
  },
  {
    name: "Purple",
    movies: 2,
  },
  {
    name: "Orange",
    movies: 3,
  },
];

const lineChartData = [
  {
    name: "January",
    movies: 65,
  },
  {
    name: "February",
    movies: 59,
  },
  {
    name: "March",
    movies: 80,
  },
  {
    name: "April",
    movies: 81,
  },
  {
    name: "May",
    movies: 56,
  },
  {
    name: "June",
    movies: 55,
  },
  {
    name: "July",
    movies: 40,
  },
];

const colors = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 0.6)",
  "rgba(255, 206, 86, 0.6)",
  "rgba(75, 192, 192, 0.6)",
  "rgba(153, 102, 255, 0.6)",
  "rgba(255, 159, 64, 0.6)",
];

const Recharts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img
          className="logo"
          src={`${process.env.PUBLIC_URL}/assets/recharts.png`}
          alt="logo"
          height="50"
        />
      </div>
      <div className={styles.charts}>
        <div className={styles.bar}>
          <ResponsiveContainer width="100%" aspect={1}>
            <BarChart
              width={500}
              height={300}
              data={barChartData}
              margin={{
                top: 50,
                bottom: 50,
              }}
            >
              <CartesianGrid
                strokeDasharray="1"
                horizontal
                vertical
                stroke="#0D2036"
              />
              <XAxis dataKey="name" tick={{ fill: "#fff" }} />
              <YAxis tick={{ fill: "#fff" }} />
              <Tooltip cursor={{ fill: "#0D2036", strokeWidth: 2 }} />
              <Legend />
              <Bar dataKey="movies" fill="#8884d8">
                {barChartData.map((entry, index) => {
                  const color = colors[index];
                  return <Cell key={index} fill={color} />;
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className={styles.line}>
          <ResponsiveContainer width="100%" aspect={1}>
            <LineChart
              width={500}
              height={300}
              data={lineChartData}
              margin={{
                top: 50,
                bottom: 50,
              }}
            >
              <CartesianGrid
                strokeDasharray="1"
                horizontal
                vertical
                stroke="#0D2036"
              />
              <XAxis dataKey="name" tick={{ fill: "#fff" }} />
              <YAxis tick={{ fill: "#fff" }} />
              <Tooltip />
              <Legend />
              <Line
                dataKey="movies"
                strokeWidth={3}
                stroke="#FF6384"
                dot={{
                  fill: "#AA4258",
                  r: 5,
                  stroke: "#FF6384",
                  strokeWidth: 2,
                }}
                activeDot={{ r: 9 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className={styles.summary}>
        <p style={{ fontSize: "18px" }}>Summary</p>
        <div className={styles.points}>
          <div className={styles.point}>Most popular </div>
          <div className={styles.point}>Responsive, but not by default</div>
          <div className={styles.point}>
            Customizable, but poor animations support
          </div>
          <div className={styles.point}>
            SVG only for drawing support, and no mobile support
          </div>
          <div className={styles.point}>Offers various types of charts</div>
          <div className={styles.point}>Detailed documentation</div>
        </div>
      </div>
    </div>
  );
};

export default Recharts;
