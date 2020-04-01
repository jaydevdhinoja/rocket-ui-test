import React, { Component } from 'react';
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded} from "../actions/Launches";
import Launch from '../components/Launch';
import { RocketService } from '../services/SPACEXService';

class LaunchesView extends Component {

  state = {
    flight_number: null,
    selectedRocketId: null,
    rocketsData: []
  }


  componentDidMount() {
    const { dispatch, launchesCollection } = this.props;
    fetchLaunchesIfNeeded({ dispatch, launchesCollection });
  }

  //toggle launches 
  setLaunchToggle = async (flight_number, selectedRocketId) => {
    
    //collapse if clicked on same launch
    if(flight_number === this.state.flight_number) {
      this.setState({flight_number: null, selectedRocketId: null})
    } else {

      //check if selected rocket data is already fetched
      const currentRocketData = this.state.rocketsData.find(rocket => rocket.rocket_id === selectedRocketId)

      //fetch if not found
      if(!currentRocketData) {
        let newRocketData = await RocketService.get(selectedRocketId)
        this.setState({flight_number, selectedRocketId, rocketsData: [...this.state.rocketsData,newRocketData.data]})
      } else {

        //if found, just set the selected rocket id
        this.setState({flight_number, selectedRocketId})
      }
    }

    
  }

  getContent = () => {
    const { launchCollection } = this.props;

    if (!launchCollection || launchCollection.fetching) {
      return <div> LOADING </div>;
    }

    if (!launchCollection.launches.length) {
      return <div> NO DATA </div>;
    }

    let launches = [];

    for (let i = 0; i < launchCollection.launches.length; i++) {
      const launch = launchCollection.launches[i];

      launches.push(
        <Launch {...{
          key: launch.launch_id,
          launch,
          current_flight_number: this.state.flight_number,
          setLaunchToggle: this.setLaunchToggle,
          currentRocketData: this.state.rocketsData.find(rocket => rocket.rocket_id === this.state.selectedRocketId)
        }} />

      )
    }

    return <ul>{launches}</ul>;
  }

  render() {
    return (
      <div>
        <h2> SpaceX launches </h2>
        {this.getContent()}
      </div>
    );
  }
}

export default ConnectedView(LaunchesView, 'launches');
