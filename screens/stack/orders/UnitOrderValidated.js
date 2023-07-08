import {StyleSheet, Text, View} from 'react-native';
import HorizontalLineSeparator from "../../../components/HorizontalLineSeparator";
import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import {Ionicons, FontAwesome5, FontAwesome} from "@expo/vector-icons";

const UnitOrderValidated = ({message, price, fee, status, expectedDeliveryDate, deliveryDate}) => {
    return (
        <View style={GlobalStyles.window}>
            <Text style={GlobalStyles.textPlain}>{message}</Text>
            <View style={{marginTop: 5, marginBottom:10}}>
                <HorizontalLineSeparator/>
            </View>

            <View style={ [GlobalStyles.viewRowContainer] }>
                <Ionicons name="wallet" style={GlobalStyles.iconStyle}/>
                <Text style={[GlobalStyles.textBold, {marginHorizontal:4, marginVertical: 9}]}>{price + fee}E</Text>
            </View>

            <View style={ [GlobalStyles.viewRowContainer] }>
                <Text style={GlobalStyles.textGreyed}>{status}</Text>
            </View>

            <View style={ [GlobalStyles.viewRowContainer] }>
                {
                    status === "WAITING_FOR_DELIVERY" ?  <FontAwesome5 name="people-arrows" style={GlobalStyles.iconStyle}/> :
                        <FontAwesome5 name="hands-helping" style={GlobalStyles.iconStyle}/>
                }

                <Text style={[GlobalStyles.textGreyed, {marginHorizontal:4, marginVertical: 9}]}>On  </Text>
                <Text style={GlobalStyles.textDate}>{status === "WAITING_FOR_DELIVERY" ? expectedDeliveryDate : deliveryDate}</Text>
            </View>




        </View>
    )
};

const styles = StyleSheet.create({
});

export default UnitOrderValidated
