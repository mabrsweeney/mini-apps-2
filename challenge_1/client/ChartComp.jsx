import React from 'react';
import {Line} from 'react-chartjs-2';

const ChartComp = props => {
  return (<Line data={{
    labels: Object.keys(props.bpi),
    datasets: [{
        label: 'Price at close',
        data: Object.values(props.bpi),
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)'
        ],
        borderWidth: 1
    }]
  }}/>);
}

export default ChartComp;