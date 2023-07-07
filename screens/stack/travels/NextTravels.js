import {FlatList, StyleSheet, View} from "react-native";
import UnitNextTravel from "./UnitNextTravel";
import React from "react";


const NextTravels = ({navigation}) => {
    const data = require('../../../mocks/travels');

    function retrieveData(statuses) {
        return data
            .filter(value => statuses.indexOf(value.status) !== -1)
    }

    return (
        <View style={{flex: 1, flexDirection:'column', justifyContent: 'center', marginLeft:10}}>
            <FlatList data={retrieveData(['NEXT'])}
                      renderItem={({item}) =>
                          <UnitNextTravel fromCity={item.fromCity}
                                          id={item.id}
                                          toCity={item.toCity}
                                          travelDate={item.travelDate}
                                          matchingOrdersCount={item.matchingOrdersCount}
                          />
                      }>

            </FlatList>
        </View>


    )
};
const styles = StyleSheet.create({})

export default NextTravels
