import {FlatList, StyleSheet, View} from "react-native";
import UnitOrderWaiting from "./UnitOrderWaiting";
import React from "react";

const OrdersWaiting = ({navigation}) => {
    const data = require('../../../mocks/orders');

    function retrieveData(statuses) {
        return data
            .filter(value => statuses.indexOf(value.status) !== -1)
    }

    return (
        <View style={{flex: 1, flexDirection:'column', justifyContent: 'center', marginLeft:10}}>
            <FlatList data={retrieveData(['WAITING_FOR_TRAVELER', 'WAITING_FOR_VALIDATION'])}
                      renderItem={({item}) =>
                          <UnitOrderWaiting message={item.message}
                                            id={item.id}
                                            price={item.price}
                                            fee={item.fee}
                                            status={item.status}
                                            offersCount={item.offersCount}
                          />
                      }>

            </FlatList>
        </View>


    )
};
const styles = StyleSheet.create({})

export default OrdersWaiting
