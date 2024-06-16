import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

function BarChart({ data, options }) {
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

  return <Bar data={data} options={options} />;
}

export default BarChart;
