import {StyleSheet, Text, View} from 'react-native';
import LineSeparator from "../../../components/LineSeparator";
import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import StyledLink from "../../../components/StyledLink";

const UnitOrderWaiting = ({message, totalPrice, status,offersCount}) => {
    return (
        <View style={styles.window}>
            <Text style={styles.message}>{message}</Text>
            <LineSeparator imageName={'grey-line.png'}/>
            <Text style={styles.boldElement}>{totalPrice}E</Text>
            <Text style={styles.element}>{status}</Text>
            {offersCount !==0 && (
                <StyledLink link={"ChangePassword"} linkLabel={"-> " + offersCount + " offers"} style={styles.linkContainer}/>
            )}
            {offersCount ===0 && status === 'WAITING_FOR_TRAVELER' && (
                <Text style={styles.element}>No offers yet</Text>
            )}

        </View>
    )
};

const styles = StyleSheet.create({

    window: {
        marginTop: 15,
        marginBottom: 0,
        flexDirection: 'column',
        backgroundColor: 'white',
        width: "97%"

    },
    message: {
        color: "#3D3C3A",
        backgroundColor: 'white',
        padding: 20,
        fontSize: 15,
        marginHorizontal: 5,
        marginVertical: 0
    },
    element: {
        color: "#708090",
        backgroundColor: 'white',
        padding: 4,
        fontSize: 13,
        marginHorizontal: 20,
        marginVertical: 4
    },
    boldElement: {
        color: "#357b9c",
        fontWeight: "700",
        backgroundColor: 'white',
        padding: 5,
        fontSize: 13,
        marginHorizontal: 20,
        marginVertical: 0
    },
    linkContainer: {
        borderRadius: 6,
        paddingHorizontal: 9,
        paddingVertical: 7,
        marginTop: 7,
        width: '40%',
        alignItems: 'center'
    }
});


export default UnitOrderWaiting
