import React from 'react'

import { SafeAreaView } from 'react-navigation';
import {  List, ListItem, Text, Button, Left, Right, Icon } from 'native-base'
import { ScrollView } from 'react-native'

export default class ListaItem extends React.Component {

    state = {
        season:"",
        title:"",
        items:[]
    };

    static navigationOptions = () => {
        return {
            title:'Lista',
        }; 
    }

    componentDidMount() {
        this.state.title = this.props.navigation.getParam('itemSelected');
        this.state.season = this.props.navigation.getParam('season');
        this.callAPI();
    }

    nextView(itemSelected, title) {
        let season = this.state.season;
        this.props.navigation.navigate('Detalhes',{
            itemSelected,
            season,
            title,
        });
    }

    callRacesAPI() {
        fetch(`http://ergast.com/api/f1/${this.state.season}.json`)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                items : data.MRData.RaceTable.Races,
            });
        });
    }

    callDriversAPI() {
        fetch(`http://ergast.com/api/f1/${this.state.season}/drivers.json`)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                items : data.MRData.DriverTable.Drivers,
            });
        });
    }

    callAPI() {

        let title = this.state.title;
        if (title == "Corridas") {
            this.callRacesAPI();
        } else if (title == "Pilotos") {
           this.callDriversAPI();
        } 

    }

    renderListItem(items, title) {
        
        let viewItems = [];

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            var key = "";
            var text = "";
            if (title == "Corridas") {
                key = item.round;
                text = item.raceName;
            } else if (title == "Pilotos") {
                key = i;
                text = item.familyName;
            }
        
            viewItems.push(
                <ListItem key={key}>
                    <Left>
                        <Text>{text}</Text>
                    </Left>
                    <Right>
                        <Button style={{ backgroundColor: "#FF9501" }} onPress={ () => this.nextView(item, title) }>
                           <Icon name="arrow-forward" />
                        </Button>
                    </Right>
                    
                </ListItem> 
            );
        }
        
        return viewItems;

     }

    render() {
        // const { races } = this.state;
        const { items } = this.state;
        const { title } = this.state;
        return (
            <ScrollView>
                <SafeAreaView>
                    
                    <List>
                        <ListItem itemHeader>
                            <Text>{this.state.season}</Text>
                        </ListItem>
                        {this.renderListItem(items, title)}
                    </List>
                        
                </SafeAreaView>
            </ScrollView>
        );
    }

}