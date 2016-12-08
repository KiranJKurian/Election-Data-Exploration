import React from 'react';
import ReactDOM from 'react-dom';
import ReactHighmaps from 'react-highcharts/ReactHighmaps';
import { Card } from 'material-ui/Card';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import SelectField from './SelectField';
import abbrState from '../data/abbrState';
import USAMapData from '../data/us-all';
import USAData from '../data/us-data';

let USAMap = (props) => {
  const { year } = props;
  let data = USAData;

  let candidates = {};
  data.forEach((state) => candidates[state[`winner${year || 2016}`]] = true);
  candidates = Object.keys(candidates);

  const GOP = ["Trump", "Romney", "McCain", "Bush"];
  const DNC = ["Clinton", "Obama", "Kerry", "Al Gore"];

  let candidateGOP = candidates.filter((candidate) => GOP.indexOf(candidate) >= 0);
  candidateGOP = candidateGOP ? candidateGOP[0] : "Trump";
  let candidateDNC = candidates.filter((candidate) => DNC.indexOf(candidate) >= 0);
  candidateDNC = candidateDNC ? candidateDNC[0] : "Clinton";

  data = data.map((state) => ({ ...state, "postal-code": abbrState(state.State, 'abbr'), value: state[`winner${year || 2016}`] == (candidateGOP) ? 0 : 1 }));

  // console.log("Year:");
  // console.log(year);

  const config = {
    title: {
      text: `US Election Results ${year || 2016}`
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
       name: candidateGOP
      },
      {
       from: 0.2,
       to: 1,
       name: candidateDNC
      }]
     },
   plotOptions: {
      map: {
         tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><br/>',
            pointFormatter: function () {
                return `${this.value < 0.2 ? candidateGOP : candidateDNC}<br/>`;
            }
         }
      }
   },
    series : [
      {
        data,
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
      <Card style={{ margin: '1em' }}>
        <SelectField location="map" question="Year" options={[2016, 2012, 2008, 2004, 2000]} />
        <ReactHighmaps config={config} />
      </Card>
    );
  };

// Decorate with redux-form
USAMap = reduxForm({
  form: 'USAMap',
  initialValues: {
    map: {
      Year: 2016,
    },
  },
})(USAMap)

const mapStateToProps = (state, ownProps) => {
  return {
    year: state.form.USAMap && state.form.USAMap.values.map.Year,
  };
};

const ConnectedUSAMap = connect(mapStateToProps)(USAMap);

export default ConnectedUSAMap;
