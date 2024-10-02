"use client";

import { Chart as ChartJS,ArcElement,Tooltip,Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement,Tooltip,Legend);

const DoughnutChart = ({accounts}: DoughnutChartProps) => {

  const data = {
    datasets: [
        {
            label: 'Banks',
            data: [14736, 6243 , 36771],
            backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
        }
    ],
    labels: ['Bank of Baroda', 'HDFC Bank', 'ICICI Bank']
  }
  return <Doughnut data={data} options={{ cutout: '50%', plugins: { legend: {display: false}}}}/>
}

export default DoughnutChart