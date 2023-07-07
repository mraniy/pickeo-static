import {StyleSheet, Text, View} from 'react-native';
import LineSeparator from "../../../components/LineSeparator";
import React from "react";
import StyledLink from "../../../components/StyledLink";
import GlobalStyles from "../../styles/GlobalStyles";

const UnitOrderWaiting = ({message, totalPrice, status, offersCount}) => {
    return (
        <View style={GlobalStyles.window}>
            <Text style={GlobalStyles.annonce}>{message}</Text>
            <LineSeparator imageName={'grey-line.png'}/>
            <Text style={styles.boldElement}>{totalPrice}E</Text>
            {status ==="WAITING_FOR_VALIDATION" && (
                <Text style={styles.element}>{status}</Text>
            )}
            {offersCount !==0 && (
                <StyledLink link={"OffersByOrder"} linkLabel={" -> " + offersCount + " offers"} style={styles.linkContainer}/>
            )}
            {offersCount ===0 && status === 'WAITING_FOR_TRAVELER' && (
                <Text style={styles.element}>No offers yet</Text>
            )}

        </View>
    )
};

const styles = StyleSheet.create({

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
        paddingVertical: 6,
        marginTop: 4,
        width: '40%',
        alignItems: 'center'
    }
});

export default UnitOrderWaiting
