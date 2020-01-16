import React , {Component} from 'react';
import { AppState, Text } from 'react-native';

type Props = {};

export default class App extends Component<Props> {

  state = {
    appState: AppState.currentState,
  };
  componentDidMount(){
    AppState.addEventListener('change',this._handleAppStateChange);
  }
  componentWillMount(){
    AppState.removeEventListener('change',this._handleAppStateChange);
  }
  _handleAppStateChange = nextAppState => {
    if(this.state.appState.match(/inactive|background/) && nextAppState === 'active') {

      console.log('App has come to the foreground!');
    }
    console.log(nextAppState);
    this.setState({ appState: nextAppState});
  };
  render(){
    return(
      <Text style ={{ margin: 30, padding: 20 }}>

        Current State is: {this.state.appState}
      </Text>
    );
  }
}