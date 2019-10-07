import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    inputContainer: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 50,
        height: 40,
        borderColor: 'gray',
        width: width / 2,
    },
    button: {
        margin: 10,
        padding: 5,
        backgroundColor: 'pink',
        borderWidth: 1,
        borderRadius: 15,
    },
    separator: {
        height: 2,
        backgroundColor: 'black',
        width: width / 2,
    },
    boldText: { fontWeight: 'bold' },
    tabText: { fontSize: 15 },
})
