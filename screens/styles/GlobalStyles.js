import {StyleSheet} from "react-native";

const GlobalStyles = StyleSheet.create({

    viewRowContainer: {
        flexDirection: 'row',

    },

    viewColumnContainer: {
        flexDirection: 'column',

    },

    buttonContainer: {
        borderRadius: 6,
        paddingHorizontal: 9,
        paddingVertical: 12,
        backgroundColor: 'lightblue',
        marginTop: 30,
        height: "60%",
        width: '40%',
        alignItems: 'center'
    },

    btnText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#0e535b'

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


    linkText: {
        fontSize: 16,
        fontWeight: '800',
        color: '#2584cc'
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
        margin: 20

    },
    formControl: {
        width: '100%',
        flexDirection: 'column'
    },
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
