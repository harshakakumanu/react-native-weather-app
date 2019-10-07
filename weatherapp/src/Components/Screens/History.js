import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import styles from '../Styles'
import { connect } from 'react-redux'
import { getWeather } from '../../Actions'

const History = props => {

    const mapCities = (city, index) => {
        return [
            // Separator
            index > 0 && <View key={`${city}-separator`} style={styles.separator}></View>,
            <TouchableOpacity key={city} onPress={() => {
                props.navigation.navigate('Weather')
                props.getWeather(city)
            }}>
                <Text style={{paddingVertical: 10, fontSize: 20}}>{city}</Text>
            </TouchableOpacity>
        ]
    }

    const renderContent = () => {
        return (
            <ScrollView>
                {props.history.map(mapCities)}
            </ScrollView>
        )
    }

    return (
        <View style={[styles.container, styles.center]}>
            <Text style={styles.text}>History</Text>
            {renderContent()}
        </View>
    )
}

export default connect(state => state, { getWeather })(History)
