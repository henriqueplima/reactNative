import React from 'react';

import { Button, Text } from 'native-base';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default class Menu extends React.Component {

    render() {
        return(
            <ScrollView>
                <SafeAreaView style={ style.container }>
                    <Button>
                        <Text>Corrida</Text>
                    </Button>
                    <Button>
                        <Text>Pilotos</Text>
                    </Button>
                </SafeAreaView>
            </ScrollView>
        );
    }
    

}
