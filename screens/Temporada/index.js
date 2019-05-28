import React from 'react'

import { SafeAreaView } from 'react-navigation';
import { Container, Header, Content, List, ListItem, Text } from 'native-base'

export default class Temporada extends React.Component {

    state = {
        races:[],
        season:""
    };

    componentDidMount() {
        const season = this.props.navigation.getParam('season');
        this.getData(season)
        
    }

    getData(season){
        fetch(`http://ergast.com/api/f1/${season}.json`)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                races : data.MRData.RaceTable.Races,
                season:season
            });
        });
          
    }

    renderListItem(item) {
       return (
             <ListItem key={item.round}>
                <Text>{item.raceName}</Text>
            </ListItem> 
       );
    }



  render() {
    //   console.log(this.state.races);
      const { races } = this.state;
    return (
      <SafeAreaView>
            <List>
                <ListItem itemHeader>
                    <Text>{this.state.season}</Text>
                </ListItem>
                { races.map(this.renderListItem) }
            </List>
            
      </SafeAreaView>
    );
  }
}