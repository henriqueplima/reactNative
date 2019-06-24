import React from 'react'

import { SafeAreaView } from 'react-navigation';
import { Container, Header, Content, List, ListItem, Text, Button, Left, Right, Card, CardItem, Body } from 'native-base'
import { ScrollView } from 'react-native'

export default class Detalhes extends React.Component {

    state = {
        season:"",
        title:"",
        item:{}
    };

    static navigationOptions = () => {
        return {
            title:'Detalhes',
        }; 
    }

    componentDidMount() {
        const itemSelected = this.props.navigation.getParam('itemSelected');
        const title = this.props.navigation.getParam('title');
        this.setState({
            title: title,
            item: itemSelected
        });
    }

    renderDrive(item, title) {
        return (
            <Card>
                <CardItem header bordered>
                    <Text>{item.familyName}</Text>
                </CardItem>
                <CardItem bordered>
                    <Body>
                        <Text>Nome: {item.givenName} </Text>
                        <Text>Sobrenome: {item.familyName}</Text>
                        <Text>Nascimento: {item.dateOfBirth }</Text>
                        <Text>Nacionalidade: { item.nationality } </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }

    renderRace(item) {
        return (
            <Card>
                <CardItem header bordered>
                    <Text>{item.Circuit.circuitName}</Text>
                </CardItem>
                <CardItem bordered>
                    <Body>
                        <Text>Cidade: {item.Circuit.Location.locality} / {item.Circuit.Location.country}</Text>
                        <Text>País: {item.Circuit.Location.country}</Text>
                        <Text>Data: {item.date }</Text>
                        <Text>Hora: { item.time } </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }

    

    render(){
        const { title } = this.state;
        const { item } = this.state;
        return (
            <SafeAreaView>
                {title == "Corridas" ? this.renderRace(item) : this.renderDrive(item, title)}
            </SafeAreaView>
        );
    }

}
