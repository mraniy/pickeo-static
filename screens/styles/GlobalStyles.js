import {StyleSheet} from "react-native";

const GlobalStyles = StyleSheet.create({

    viewRowContainer: {
        flexDirection: 'row',

    },

    viewColumnContainer: {
        flexDirection: 'column',

    },

    //dont delete height 60% width 40% 00578A 0f63DD
    buttonContainer: {
        borderRadius: 6,
        paddingHorizontal: 9,
        paddingVertical: 12,
        backgroundColor: '#1b6997',
        marginTop: 30,
        height: 50,
        width: 140,
        alignItems: 'center'
    },

    //orig 0e535b - FFDEAD FFF5EE F5F5DC FFE5B4 FFF1D7 try c9ee00
    btnText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF1D7'

    },

    linkContainer: {
        borderRadius: 6,
        paddingHorizontal: 9,
        paddingVertical: 25,
        marginTop: 20,
        width: '40%',
        alignItems: 'center'
    },

    centeredLinkContainer: {
        borderRadius: 6,
        paddingHorizontal: 9,
        paddingVertical: 23,
        marginTop: 20,
        width: '40%',
        alignItems: 'center'
    },

    //orig 2584cc marron C34723 vert 5b971b
    linkText: {
        fontSize: 16,
        fontWeight: '800',
        color: '#5b971b'
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
        paddingTop: 6,
        margin: 10

    },
    formControl: {
        width: '100%',
        flexDirection: 'column'
    },

    //357b9c
    label: {
        marginVertical: 15,
        color: '#357b9c',
        fontWeight: 'bold'
    },

    message: {
        paddingTop: 10
    },
})
export default GlobalStyles
