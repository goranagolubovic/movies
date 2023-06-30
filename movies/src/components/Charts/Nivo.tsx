import styles from "./Charts.module.css";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";
import classNames from "classnames";

const data = [
  {
    color: "Red",
    movie: 12,
    movieColor: "rgba(255, 99, 132, 1)",
  },
  {
    color: "Blue",
    movie: 19,
    movieColor: "rgba(54, 162, 235, 0.6)",
  },
  {
    color: "Yellow",
    movie: 3,
    movieColor: "rgba(255, 206, 86, 0.6)",
  },
  {
    color: "Green",
    movie: 5,
    movieColor: "rgba(75, 192, 192, 0.6)",
  },
  {
    color: "Purple",
    movie: 2,
    movieColor: "rgba(153, 102, 255, 0.6)",
  },
  {
    color: "Orange",
    movie: 3,
    movieColor: "rgba(255, 159, 64, 0.6)",
  },
];

const lineData = [
  {
    id: "movies",
    color: "#FF6384",
    data: [
      {
        x: "January",
        y: 65,
      },
      {
        x: "February",
        y: 59,
      },
      {
        x: "March",
        y: 80,
      },
      {
        x: "April",
        y: 81,
      },
      {
        x: "May",
        y: 56,
      },
      {
        x: "June",
        y: 55,
      },
      {
        x: "July",
        y: 40,
      },
    ],
  },
];

const theme = {
  axis: {
    fontSize: "14px",
    tickColor: "#0D2036",
    ticks: {
      line: {
        stroke: "#0D2036",
      },
      text: {
        fill: "#ffffff",
      },
    },
    legend: {
      text: {
        fill: "#ffffff",
      },
    },
  },
  grid: {
    line: {
      stroke: "#0D2036",
    },
  },
};

const Nivo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img
          className="logo"
          src={`${process.env.PUBLIC_URL}/assets/nivo.png`}
          alt="logo"
          height="30"
        />
      </div>

      <div className={styles.charts}>
        <div className={classNames(styles.bar, styles.nivoSize)}>
          <ResponsiveBar
            data={data}
            theme={theme}
            colors={({ id, data }) => String(data.movieColor)}
            keys={["movie"]}
            indexBy="color"
            margin={{ top: 50, right: 30, bottom: 50, left: 30 }}
            padding={0.3}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "#fffff",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "#fffff",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            borderColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendPosition: "middle",
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendPosition: "middle",
              legendOffset: -40,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={function (e) {
              return (
                e.id + ": " + e.formattedValue + " in country: " + e.indexValue
              );
            }}
          />
        </div>

        <div className={classNames(styles.line, styles.nivoSize)}>
          <ResponsiveLine
            data={lineData}
            theme={theme}
            margin={{ top: 50, right: 30, bottom: 50, left: 30 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendOffset: 36,
              legendPosition: "middle",
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendOffset: -40,
              legendPosition: "middle",
            }}
            colors={{ scheme: "nivo" }}
            lineWidth={1}
            pointSize={10}
            pointColor="#ff6384"
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            areaOpacity={0.05}
            useMesh={true}
            legends={[]}
          />
        </div>
      </div>

      <div className={styles.summary}>
        <p style={{ fontSize: "18px" }}>Summary</p>
        <div className={styles.points}>
          <div className={styles.point}>
            Responsive by default for most of the charts
          </div>
          <div className={styles.point}>Supports animation</div>
          <div className={styles.point}>
            SVG, Canvas and HTML drawing support, no support for mobile
          </div>
          <div className={styles.point}>
            Offers interactive playground or Storybook for customization
          </div>
          <div className={styles.point}>Difficult to customize</div>
        </div>
      </div>
    </div>
  );
};

export default Nivo;
