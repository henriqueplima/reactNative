import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import Seasons from '../../components/Seasons';

import { SafeAreaView } from 'react-navigation';

export default class Home extends React.Component {

    constructor(props){
        super(props);

        this.getData = this.getData.bind(this);
    }

    static navigationOptions = () => {
        return {
            title:'Temporada',
        }; 
    }

  getData(season){
      this.props.navigation.navigate('Menu',{
        season,
        name: 'Menu'
    });
  }

  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Seasons handleClick={this.getData}/>
        </SafeAreaView>
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
