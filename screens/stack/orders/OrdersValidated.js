import {FlatList, StyleSheet, View} from "react-native";
import React from "react";
import UnitOrderValidated from "./UnitOrderValidated";

const OrdersWaiting = ({navigation}) => {
    const data = require('../../../mocks/orders');

    function retrieveData(statuses) {
        return data
            .filter(value => statuses.indexOf(value.status) !== -1)
    }

    return (
        <View style={{flex: 1, flexDirection:'column', justifyContent: 'center', marginLeft:10}}>
            <FlatList data={retrieveData(['WAITING_FOR_DELIVERY', 'DELIVERED'])}
                      renderItem={({item}) =>
                          <UnitOrderValidated message={item.message}
                                              id={item.id}
                                              price={item.price}
                                              fee={item.fee}
                                              status={item.status}
                                              deliveryDate={item.deliveryDate}
                                              expectedDeliveryDate={item.expectedDeliveryDate}
                          />
                      }>

            </FlatList>
        </View>

    )
};
const styles = StyleSheet.create({})

export default OrdersWaiting
