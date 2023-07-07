import {StyleSheet, Text, View} from 'react-native';
import LineSeparator from "../../../components/LineSeparator";
import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";

const UnitOrderValidated = ({message, totalPrice, status, expectedDeliveryDate, deliveryDate}) => {
    return (
        <View style={GlobalStyles.window}>
            <Text style={GlobalStyles.textPlain}>{message}</Text>
            <LineSeparator imageName={'grey-line.png'}/>
            <Text style={GlobalStyles.textBold}>{totalPrice}E</Text>
            <Text style={GlobalStyles.textGreyed}>{status}</Text>
            {expectedDeliveryDate && !deliveryDate && (
                <Text style={GlobalStyles.textGreyed}>Expected delivery date&nbsp;&nbsp;
                    <Text style={GlobalStyles.textDate}>{expectedDeliveryDate}</Text>
                </Text>
            )}
            {deliveryDate && (
                <Text style={GlobalStyles.textGreyed}>Delivered on&nbsp;&nbsp;
                    <Text style={GlobalStyles.textDate}>{deliveryDate}</Text>
                </Text>
            )}

        </View>
    )
};

const styles = StyleSheet.create({
});

export default UnitOrderValidated
