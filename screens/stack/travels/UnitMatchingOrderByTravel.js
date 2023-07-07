import {StyleSheet, Text, View} from 'react-native';
import LineSeparator from "../../../components/LineSeparator";
import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";

const UnitMatchingOrderByTravel = ({title, price, fee, shopper}) => {
    return (
        <View style={GlobalStyles.window}>
            <Text style={GlobalStyles.textPlain}>{title}</Text>
            <Text style={GlobalStyles.textBold}>{price}</Text>
            <Text style={GlobalStyles.textBold}>{fee}</Text>
            <Text style={GlobalStyles.textGreyed}>{shopper.firstName}</Text>
            <LineSeparator imageName={'grey-line.png'}/>
        </View>
    )
};

const styles = StyleSheet.create({
});

export default UnitMatchingOrderByTravel
