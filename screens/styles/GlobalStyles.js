import {StyleSheet} from "react-native";

const GlobalStyles = StyleSheet.create({

    linkContainer : {
        flexDirection: 'row'
    },
    btnText: {
        fontSize: 19,
    },
    sendContainer: {
        borderRadius: 6,
        paddingHorizontal: 9,
        paddingVertical: 25,
        backgroundColor: 'lightblue',
        marginTop: 20,
        width: '40%',
        alignItems: 'center'
    },
    signUpContainer: {
        borderRadius: 6,
        paddingHorizontal: 9,
        paddingVertical: 25,
        marginTop: 20,
        width: '40%',
        alignItems: 'center'
    },
    input: {
        paddingHorizontal: 9,
        paddingVertical: 9,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 6,
        width: '100%'
    },
    formContainer: {
        backgroundColor: 'white',
        borderRadius: 9,
        padding: 20,
        margin: 20

    },
    formControl: {
        width: '100%',
        flexDirection: 'column'
    },
    label: {
        marginVertical: 15,
        color: 'green',
        fontWeight: 'bold'
    },
    linkText: {
        fontSize: 16,
        fontWeight: 'bold',
        color : 'blue'
    }
})
export default GlobalStyles
