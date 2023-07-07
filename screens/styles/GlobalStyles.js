import {StyleSheet} from "react-native";

const GlobalStyles = StyleSheet.create({

    ////////////////////////////////////////////Direction des Flex////////////////////////////////////////////////////
    viewRowContainer: {
        flexDirection: 'row',

    },

    viewColumnContainer: {
        flexDirection: 'column',

    },

    //////////////////////////////////////LA PETITRE FENTETRE DANS LES LISTES////////////////////////////////////////
    window: {
        marginTop: 12,
        marginBottom: 0,
        flexDirection: 'column',
        backgroundColor: 'white',
        width: "97%"
    },

    /////////////////////////////////////////////BOUTTONS/////////////////////////////////////////////////////////////
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

    //try c9ee00
    btnText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF1D7'

    },

    /////////////////////////////////////////////LIENS/////////////////////////////////////////////////////////////
    centeredLinkContainer: {
        borderRadius: 6,
        paddingHorizontal: 9,
        paddingVertical: 23,
        marginTop: 20,
        width: '40%',
        alignItems: 'center'
    },

    linkContainer: {
        borderRadius: 6,
        paddingHorizontal: 9,
        paddingVertical: 8,
        marginTop: 0,
        width: '40%',
        alignItems: 'flex-start'
    },

    //orig 2584cc bleu  1E847F vert 5b971b
    linkText: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E847F'
    },
    linkTextSmall: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E847F'
    },

    ///////////////////////////////////////TEXTES//////////////////////////////////////////////////////////////
    ////////TEXTE BRUT
    textPlain: {
        color: "#3D3C3A",
        padding: 20,
        fontSize: 15,
        marginHorizontal: 5,
        marginVertical: 0
    },

    /////TEXTE SIMPLE
    textGreyed: {
        color: "#708090",
        padding: 4,
        fontSize: 13,
        marginHorizontal: 20,
        marginVertical: 4
    },

    ///////TEXTE EN GRAS
    textBold: {
        color: "#357b9c",
        fontWeight: "700",
        padding: 5,
        fontSize: 13,
        marginHorizontal: 20,
        marginVertical: 0
    },

    //////Les DATES
    textDate: {
        color: "#141e83",
        padding: 4,
        fontSize: 13,
        marginHorizontal: 20,
        marginVertical: 4
    },

    ////////////////////////////////////////////FORMULAIRES///////////////////////////////////////////////////////////
    /////////STYLE DES FORMULAIRES///////
    formContainer: {
        backgroundColor: 'white',
        borderRadius: 9,
        padding: 20,
        paddingTop: 6,
        margin: 10
     /////////STYLE DES CONTROLES///////
    },
    formControl: {
        width: '100%',
        flexDirection: 'column'
    },

    ////////CHAMPS DE TEXTE/////////////
    //357b9c
    label: {
        marginVertical: 15,
        color: '#357b9c',
        fontWeight: 'bold'
    },
    input: {
        paddingHorizontal: 9,
        paddingVertical: 9,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 6,
        width: '100%'
    },

//////////////////////////////////////////////ICONES/////////////////////////////////////////////////////////////////
    iconStyle: {
        fontSize: 22,
        color: '#dc543c',
        marginLeft : 20,
        paddingTop: 10,

    },

})


export default GlobalStyles
