import {StyleSheet, Text, View} from 'react-native';
import HorizontalLineSeparator from "../../../components/HorizontalLineSeparator";
import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";

const UnitOrderValidated = ({message, price, fee, status, expectedDeliveryDate, deliveryDate}) => {
    return (
        <View style={GlobalStyles.window}>
            <Text style={GlobalStyles.textPlain}>{message}</Text>
            <HorizontalLineSeparator imageName={'grey-line.png'}/>
            <Text style={GlobalStyles.textBold}>{price+fee}E</Text>
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
