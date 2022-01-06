import React from 'react'
import { Doughnut } from 'react-chartjs-2';

const Charts = () => {
    const data = {
        
        datasets: [{
          label: 'Appointments',
          data: [80000, 43545, 2145],
          backgroundColor: [
              'rgb(119, 119, 119)',
              'rgb(111, 78, 255)',
              'rgb(255, 147, 19)'
          ],
          hoverOffset: 4
        }]
      };
    return (
        <div>
            <Doughnut data={data}/>
        </div>
    )
}

export default Charts
