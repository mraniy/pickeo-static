import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";
import UnitMatchingOrderByTravel from "./UnitMatchingOrderByTravel";
import GlobalStyles from "../../styles/GlobalStyles";
import {Ionicons} from "@expo/vector-icons";
import HorizontalLineSeparator from "../../../components/HorizontalLineSeparator";

const MatchingOrdersByTravel = ({navigation}) => {
    const data = require('../../../mocks/matchingOrdersByTravel');
    return (
        <View style={{flex: 1, flexDirection:'column', justifyContent: 'center', marginLeft:10}}>

            <View style={  [GlobalStyles.window, {backgroundColor:"#FDFDFC"}]  }>
                <View style={GlobalStyles.viewRowContainer}>
                    <Text style={  [GlobalStyles.textRoute, {marginLeft:20}]  }>{data.fromCity}</Text>
                    <Ionicons name="airplane" style={[GlobalStyles.iconStyle, {width:"10%", color:"#0897B4"}]}/>
                    <Text style={GlobalStyles.textRoute}>{data.toCity}</Text>
                </View>

                <View style={{marginTop: 10, marginBottom:6}}>
                    <HorizontalLineSeparator/>
                </View>

                <View style={ {backgroundColor: "white"} }>
                    <View style={GlobalStyles.viewRowContainer}>
                        <Ionicons name="calendar" style={GlobalStyles.iconStyle}/>
                        <Text style={[GlobalStyles.textGreyed, {marginHorizontal:4, marginVertical: 9}]}>On</Text>
                        <Text style={  [GlobalStyles.textDate, { marginHorizontal: 2}]  }>{'' +data.travelDate}</Text>

                    </View>

                </View>

            </View>

            <View style={{flex: 1, flexDirection:'column', justifyContent: 'center', marginLeft:10}}>
                <FlatList data={data.matchingOrders}
                          renderItem={({item}) =>
                              <UnitMatchingOrderByTravel title = {item.title}
                                                price = {item.price}
                                                fee = {item.fee}
                                                shopper = {item.shopper}
                              />
                          }>

                </FlatList>
            </View>
        </View>


    )
};
const styles = StyleSheet.create({

});

export default MatchingOrdersByTravel
