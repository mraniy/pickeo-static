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

                {
                    status === "DELIVERED" ?
                        <View style={ [GlobalStyles.viewRowContainer, {marginTop:4}] }>
                            <FontAwesome5 name="hands-helping" style={GlobalStyles.iconStyle}/>
                            <Text style={[GlobalStyles.textGreyed, {marginHorizontal:4, marginVertical: 9}]}>{status}</Text>
                            <View style = {  {marginLeft:65}  }></View>

                        </View>
                        : ""
                }

                {
                    status === "WAITING_FOR_DELIVERY" ?
                        <View style={ [GlobalStyles.viewColumnContainer] }>
                            <Text style={  [GlobalStyles.textGreyed, {paddingLeft:0, paddingBottom:0}]  }>{status}</Text>
                            <View style={ [GlobalStyles.viewRowContainer] }>
                                <FontAwesome5 name="people-arrows" style={GlobalStyles.iconStyle}/>
                                <Text style={[GlobalStyles.textGreyed, {marginHorizontal:4, marginVertical: 9}]}>On  </Text>
                                <Text style={GlobalStyles.textDate}>{expectedDeliveryDate}</Text>
                            </View>

                        </View>
                        : ""
                }

                <Ionicons name="ellipsis-vertical" style={[GlobalStyles.iconStyle, {marginLeft:0, paddingTop:18, color:"grey", fontSize:20}]}/>

                <View style={ [GlobalStyles.viewRowContainer, {marginTop:8, marginLeft:1}]  }>
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
