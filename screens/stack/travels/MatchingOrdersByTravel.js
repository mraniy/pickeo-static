import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";
import UnitMatchingOrderByTravel from "./UnitMatchingOrderByTravel";

const MatchingOrdersByTravel = ({navigation}) => {
    const data = require('../../../mocks/matchingOrdersByTravel');
    return (
        <View style={{flex: 1, flexDirection:'column', justifyContent: 'center', marginLeft:10}}>
            <Text> {data.fromCity}  </Text>
            <Text> {data.toCity}  </Text>
            <Text> {data.travelDate}  </Text>
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
const styles = StyleSheet.create({})

export default MatchingOrdersByTravel
