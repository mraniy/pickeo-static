import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";
import UnitOfferByOrder from "./UnitOfferByOrder";

const OffersByOrder = ({navigation}) => {
    const data = require('../../../mocks/offersByOrder');
    return (
        <View style={{flex: 1, flexDirection:'column', justifyContent: 'center', marginLeft:10}}>
           <Text> {data.title}  </Text>
           <Text> {data.productPrice}  </Text>
           <Text> {data.fee}  </Text>
            <View style={{flex: 1, flexDirection:'column', justifyContent: 'center', marginLeft:10}}>
                <FlatList data={data.offers}
                          renderItem={({item}) =>
                              <UnitOfferByOrder fee = {item.fee}
                                                date = {item.date}
                                                traveler = {item.traveler}
                              />
                          }>

                </FlatList>
            </View>
        </View>


    )
};
const styles = StyleSheet.create({})

export default OffersByOrder
