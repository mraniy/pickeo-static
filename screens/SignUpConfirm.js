import {StyleSheet, Text, View} from "react-native";


const SignUpConfirm = ({navigation}) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>An email has been sent , please confirm your email!</Text>
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

export  default SignUpConfirm
