import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { convertKelvinToCelsius } from '../../Utils'
import styles from '../Styles'

const Weather = props => {

    const renderContent = () => {
        if (props.weatherData) {
            return (
                <View>
                    <View style={{ alignItems: 'center' }}>
                        <Text>The weather in {props.weatherData.name} is:</Text>
                        <Text>Temperature: {convertKelvinToCelsius(props.weatherData.main.temp)} °C</Text>
                        <Text>Humidity: {props.weatherData.main.humidity}%</Text>
                        <Text>Location: Longitude {props.weatherData.coord.lon}, Latitude {props.weatherData.coord.lat}</Text>
                    </View>
                </View>
            )
        }


        if (props.weatherDataLoading) {
            return <ActivityIndicator />
        }

        if (props.weatherFetchError) {
            return (
                <View style={{ alignItems: 'center' }}>
                    <Text>There was an error fetching weather data:</Text>
                    <Text>{props.weatherFetchError}</Text>
                </View>
            )
        }
        return <Text>You have not selected any city</Text>
    }

    return (
        <View style={[styles.container, styles.center]}>
            <Text style={styles.text}>Weather</Text>
            {renderContent()}
        </View>
    )
}

export default connect(state => state)(Weather)
