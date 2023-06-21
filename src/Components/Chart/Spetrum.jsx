import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import "./Spetrum.css"
import { ref, onValue } from "firebase/database";
import { database } from '../../firebase';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);
const options = {
  scales: { 
    x: { 
      title: { 
        display: true, 
        text: 'chanels', 
        font: {
          size: 18,
          style: 'Bold',
          family: 'Helvetica Neue',
        }
      },
      grid: {
        color: "rgb(108, 107, 107)" 
      } 
    }, 
    y: { 
      title: { 
        display: true, 
        text: 'count',
        font: {
          size: 18,
          style: 'Bold',
          family: 'Helvetica Neue',
        }
      }, 
      grid: { 
        color: "rgb(108, 107, 107)" 
      } 
    } 
  },
  indexAxis: 'x',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Spetrum Chart',
      font: {
        size: 20,
        style: 'italic',
        family: 'Helvetica Neue',
      }
    },
  },
};

const SpetrumChart = () => {
  var array = [];
  for (var i = 0; i < 4096; i++) {
    array.push(i);
  }
  const [data, setData] = useState({
    labels: array,
    datasets: [
      {
        label: 'Dataset',
        data: [],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(25, 90, 13, 0.5)',
      }
    ]
  });
  useEffect(() => {
    const starCountRef = ref(database, 'data/Spetrum');
    onValue(starCountRef, (snapshot) => {
      const Dataset = snapshot.val();
      setData({
        labels: array,
        datasets: [
          {
            label: 'Dataset ID',
            data: Dataset,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(99, 132, 0.5)',
          }
        ]
      })
    }, [data.datasets[0].data]);
    //   
  })
  return (
    <div className='analytics' style={{ width: '100%', height: '100%' }}>
      <Bar width={1200} height={600} data={data} options={options} />
    </div>)
}
export default SpetrumChart;