import React from 'react';
import ReactDOM from 'react-dom';
import ReactHighmaps from 'react-highcharts/ReactHighmaps';
import USAMapData from '../mapData/us-all';
import USAData from '../mapData/us-data';

const USAMap = (props) => {
  const data = USAData;
  const config = {
    title: {
      text: 'US Election Results 2016'
    },

    legend: {
      enabled: true
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
          verticalAlign: 'bottom'
      }
    },

    colors: ['#e01405', '#0070ca'],
    colorAxis: {

      dataClassColor: 'category',
      dataClasses: [{
       from: 0,
       to: 0.1,
       name: 'Trump'
      },
      {
       from: 0.2,
       to: 1,
       name: 'Clinton'
      }]
     },
   plotOptions: {
      map: {
         tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><br/>',
            pointFormatter: function () {
                return `${this.value < 0.2 ? 'Trump' : 'Clinton'}<br/>`;
            }
         }
      }
   },
    series : [
      {
        data : data,
        name: 'Voting Info',
        mapData: USAMapData,
        joinBy: 'postal-code',
        states: {
          hover: {
            color: '#a4edba'
          }
        },
        dataLabels: {
          enabled: true,
          format: '{point.postal-code}',
          style: {
            textTransform: 'uppercase'
          }
        }
      },
      {
        name: 'Separators',
        type: 'mapline',
        data: USAMapData,
        color: 'silver',
        showInLegend: false,
        enableMouseTracking: false
      }]
  };
    return (
      <ReactHighmaps config={config} />
    );
  };

export default USAMap;
