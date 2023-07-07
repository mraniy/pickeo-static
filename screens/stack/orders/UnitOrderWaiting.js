import {StyleSheet, Text, View} from 'react-native';
import HorizontalLineSeparator from "../../../components/HorizontalLineSeparator";
import React from "react";
import StyledLink from "../../../components/StyledLink";
import GlobalStyles from "../../styles/GlobalStyles";

const UnitOrderWaiting = ({message, price, fee, status, offersCount}) => {
    return (
        <View style={GlobalStyles.window}>
            <Text style={GlobalStyles.textPlain}>{message}</Text>
            <HorizontalLineSeparator imageName={'horizontal-grey-line.png'}/>
            <Text style={GlobalStyles.textBold}>{price + fee}E</Text>
            {status ==="WAITING_FOR_VALIDATION" && (
                <Text style={GlobalStyles.textGreyed}>{status}</Text>
            )}
            {offersCount !==0 && (
                <StyledLink link={"OffersByOrder"} linkLabel={"-> " + offersCount + " offers"} style={GlobalStyles.linkContainer}/>
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
