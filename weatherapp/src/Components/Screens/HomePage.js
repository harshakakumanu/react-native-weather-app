import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import styles from '../Styles'
import { getWeather } from '../../Actions'

const HomePage = props => {

    const [text, setText] = useState('')

    return (
        <View style={[styles.container, styles.center]}>
            <Text style={styles.text}>Weather App</Text>
            <Text style={styles.text}>Please specify a city name:</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={{flex: 1, marginHorizontal: 15}}
                    onChangeText={text => setText(text)}
                    value={text}/>
            </View>


            <TouchableOpacity
                disabled={text.length === 0}
                style={styles.button}
                onPress={() => {
                    props.navigation.navigate('Weather')
                    props.getWeather(text)
                    setText('')
                }}
                title="Submit"
                color="#841584">
                <Text style={{fontSize: 25}}>SUBMIT</Text>
            </TouchableOpacity>
        </View>
    )
}

export default connect(state => state, { getWeather })(HomePage)
