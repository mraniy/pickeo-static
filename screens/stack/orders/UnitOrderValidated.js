import {StyleSheet, Text, View} from 'react-native';
import HorizontalLineSeparator from "../../../components/HorizontalLineSeparator";
import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import {Ionicons, FontAwesome5, Fontisto} from "@expo/vector-icons";

const UnitOrderValidated = ({message, price, fee, status, expectedDeliveryDate, deliveryDate}) => {
    return (
        <View style={GlobalStyles.window}>
            <Text style={GlobalStyles.textPlain}>{message}</Text>
            <View style={{marginTop: 5, marginBottom:10}}>
                <HorizontalLineSeparator/>
            </View>

            <View style={ [GlobalStyles.viewRowContainer] }>

                <View style={ [GlobalStyles.viewColumnContainer] }>
                    <View style={ [GlobalStyles.viewRowContainer] }>
                        <Text style={GlobalStyles.textGreyed}>{status}</Text>
                        {
                            status === "DELIVERED" ?<View style = {  {marginLeft:80}  }></View>: ""
                        }
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

                <Ionicons name="ellipsis-vertical" style={[GlobalStyles.iconStyle, {marginLeft:0, paddingTop:20, color:"grey", fontSize:20}]}/>


                <View style={ [GlobalStyles.viewRowContainer, {marginTop:10, marginLeft:10}] }>
                    <Fontisto name="wallet" style={GlobalStyles.iconStyle}/>
                    <Text style={[GlobalStyles.textBold, {marginHorizontal:4, marginVertical: 9}]}>{price + fee}E</Text>
                </View>












            </View>

        </View>
    )
};

const styles = StyleSheet.create({
});

export default UnitOrderValidated
