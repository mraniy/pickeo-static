import {StyleSheet, Text, View} from "react-native";


const Earnings = ({navigation}) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Earnings!</Text>
        </View>
    )
}
const styles= StyleSheet.create({
    btn : {
        padding : 12,
        color: 'white'

    },
    container: {
        backgroundColor: 'lightblue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text : {
        fontSize : 24
    }
})

export  default Earnings
