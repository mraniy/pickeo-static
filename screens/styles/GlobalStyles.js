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
        borderRadius : 20,
        backgroundColor: '#FDFDFC',
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
    buttonContainerSmall: {
        borderRadius: 6,
        paddingHorizontal: 4,
        paddingVertical: 8,
        backgroundColor: '#1b6997',
        marginTop: 10,
        height: 40,
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
        width: '55%',
        alignItems: 'center'
    },

    linkContainer: {
        borderRadius: 6,
        paddingHorizontal: 9,
        paddingVertical: 8,
        marginTop: 0,
        width: '80%',
        alignItems: 'flex-start'
    },

    //orig 2584cc bleu  1E847F vert 5b971b
    linkText: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E847F'
    },
    linkTextSmall: {
        fontSize: 15,
        fontWeight: '700',
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

    textRoute: {
        color: "#16161D",
        fontSize: 16,
        fontWeight: "600",
        marginTop: 10
    },

    toggleText: {
        fontSize:14,
        color: "#FFF1D7"

    },

    //////Les DATES
    textDate: {
        color: "#3C6CB4",
        fontWeight: "700",
        paddingVertical: 12,
        fontSize: 14,
        marginHorizontal: 0,
        marginVertical: 0
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
        fontSize: 25,
        color: '#CB205F',
        marginLeft : 20,
        paddingTop: 10,

    },

///////////////////////////////////////////////////////FOOTER/////////////////////////////////////////////////////////
    footer:{
        width:"90%",
        height:2,
        backgroundColor: "#7786c2"
    }

});

export default GlobalStyles
