import styles from "./Graphs.module.css";
import ChartJS from "../../components/Charts/ChartJS";
import Recharts from "../../components/Charts/Recharts";
import Nivo from "../../components/Charts/Nivo";
import GoogleGraph from "../../components/Charts/GoogleGraph";

const Graphs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1>JavaScript Graph Libraries Research</h1>
        <p style={{color:'#FF1744'}}>Libraries:</p> <br />
        <div className={styles.libraries}>
          <a href="https://recharts.org/en-US/" target="_blank" rel="noopener noreferrer"><p>Recharts</p></a>
          <a href="https://www.npmjs.com/package/react-chartjs-2" target='_blank' rel="noopener noreferrer"><p>react-chartjs-2</p></a>
          <a href="https://nivo.rocks/" target="_blank" rel="noopener noreferrer"><p>nivo</p></a>
          <a href="https://developers.google.com/chart" target="_blank" rel="noopener noreferrer"><p>Google charts</p></a>
        </div>
      </div>
      <Recharts />
      <ChartJS />
      <Nivo />
      <GoogleGraph/>
    </div>
  );
};

export default Graphs;
