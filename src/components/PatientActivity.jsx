import React, { useRef } from 'react'
import './css/PatientActivity.css'
import * as AiIcon from 'react-icons/ai'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )


const PatientActivity = () => {
    const chartRef = useRef(null)

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
          y: {
            ticks: {
                beginAtZero: false,
                callback: (value, index, values) =>  '',
            },
            grid: {
                display: false,
                drawBorder: false,
            },
        }
        },
        elements: {
            line: {
                tension: 0.4
            }
        }
      };

      const data = (canvas) => {
        const ctx = canvas.getContext('2d')
            // console.log(ctx);
            const gradient = ctx.createLinearGradient(200, 200, 0, 400);
            gradient.addColorStop(0, 'rgba(255, 186, 46, 1)');   
            gradient.addColorStop(1, 'rgba(255, 147, 5, 0)');

        return {
          labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
          datasets: [
            {
              label: 'Week',
              data: [1.8, 1.5, 2.0, 2.2, 2.0, 2.9, 2.5, 1.7, 2.2, ],
              borderColor: gradient,
              borderWidth: 5,
              backgroundColor: gradient,
              smooth: true
          }
      ]
  };

      } 
    return (
        <div className='patient-activity'>
            <header>
                <h3>Patient Activity</h3>
                <div className='month'>
                    <AiIcon.AiOutlineCalendar />
                    <div className='vl'></div>
                   
      <select name="month" id="lang">
        <option value="jan">Jan</option>
        <option value="feb">Feb</option>
        <option value="mar">Mar</option>
        <option value="may">May</option>
        <option value="jun">Jun</option>
        <option value="jul">July</option>
        <option value="aug">Aug</option>
        <option value="sep">Sep</option>
        <option value="Oct">Oct</option>
        <option value="nov">Nov</option>
        <option value="dec">Dec</option>
      </select>
                </div>
            </header>
            <Line 
                width={500}
                data={data}
                options={options}
                ref={chartRef}
            />
        </div>
    )
}

export default PatientActivity
