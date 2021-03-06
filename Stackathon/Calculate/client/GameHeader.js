import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Button, Overlay} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

const GameHeader = () => {
    const [score, lives, setScore, setLives] = useState(0)

    return(
        <>
        <Button title={'x'} buttonStyle={styles.button}/>
            <Icon name='heart' size={20} color={'red'} style={styles.icon}></Icon>
            <Icon name='heart' size={20} color={'red'} style={styles.icon}></Icon>
            <Icon name='heart' size={20} color={'red'} style={styles.icon}></Icon>
        <View style={styles.view}>
        <Text styles={styles.score}>Score: {score}</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '10%'
    },
    icon: {
        padding: 2,
        textAlign: 'right',
        flexDirection: 'row'
    },
    score: {
        fontSize: 24,
        textAlign: 'center'
    },
    view: {
        marginVertical: 10
    }

})

export default GameHeader