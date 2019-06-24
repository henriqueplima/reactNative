import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';

import style from './style'
import { SafeAreaView } from 'react-navigation';

class Seasons extends PureComponent {
    
    renderSeasons() {
        let items = [];

        for (let i = 0; i < 20; i++) {
            const year = '20' + (i > 9 ? i: `0${i}`);
            items.push(
                <Button style= {style.myButton}
                    onPress={ () => this.props.handleClick(year) }
                    key={ `season-${i}` }>
                    <Text>
                        20{ i > 9 ? i : `0${i}` }
                    </Text>
                </Button>
            );
        }

        return items;
    }

    render() {
        return(
            <SafeAreaView style={ style.container }>
                { this.renderSeasons() }
            </SafeAreaView>
        );
    }
}

export default Seasons;