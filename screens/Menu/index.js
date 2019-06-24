import React from 'react'

import { SafeAreaView } from 'react-navigation';
import { Text, Button } from 'native-base'
import { ScrollView, StyleSheet } from 'react-native'

export default class Menu extends React.Component {

    state = {
        season:""
    };

    static navigationOptions = () => {
        return {
            title:'Menu',
        }; 
    }
    

    componentDidMount() {
        this.state.season = this.props.navigation.getParam('season');
    }

    nextView(itemSelected) {
        let season = this.state.season;
        this.props.navigation.navigate('ListaItem',{
            itemSelected,
            season,
            name: 'Menu'
        });
    }

    renderButtons() {
        let titles = ["Corridas", "Pilotos"];
        let items = [];
        for (let i = 0; i < titles.length; i++) {
            
            items.push(
                <Button 
                    onPress={ () => this.nextView(titles[i]) }
                    key={ `title-${i}` } style={styles.myButton}>
                    <Text>
                        {titles[i]}
                    </Text>
                </Button>
            );
        }
        return items;

    }

    render() {
        
        return (
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    {this.renderButtons()} 
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
      padding: 30,
    },
    myButton: {
        height: 150,
        width:300,
        marginBottom: 50
    }
});