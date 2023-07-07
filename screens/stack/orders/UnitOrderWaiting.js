import {StyleSheet, Text, View} from 'react-native';
import LineSeparator from "../../../components/LineSeparator";
import React from "react";
import StyledLinkSmall from "../../../components/StyledLinkSmall";
import GlobalStyles from "../../styles/GlobalStyles";

const UnitOrderWaiting = ({message, totalPrice, status, offersCount}) => {
    return (
        <View style={GlobalStyles.window}>
            <Text style={GlobalStyles.textPlain}>{message}</Text>
            <LineSeparator imageName={'grey-line.png'}/>
            <Text style={GlobalStyles.textBold}>{totalPrice}E</Text>
            {status ==="WAITING_FOR_VALIDATION" && (
                <Text style={GlobalStyles.textGreyed}>{status}</Text>
            )}
            {offersCount !==0 && (
                <StyledLinkSmall link={"OffersByOrder"} linkLabel={"-> " + offersCount + " offers"} style={GlobalStyles.linkContainer}/>
            )}
            {offersCount ===0 && status === 'WAITING_FOR_TRAVELER' && (
                <Text style={GlobalStyles.textGreyed}>No offers yet</Text>
            )}

        </View>
    )
};

const styles = StyleSheet.create({
});

export default UnitOrderWaiting
