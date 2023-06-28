import {FlatList, StyleSheet, View} from "react-native";
import UnitNextTravell from "./UnitNextTravell";
import React from "react";


const NextTravels = ({navigation}) => {
    const data = require('../../../mocks/travels');

    function retrieveData(statuses) {
        return data
            .filter(value => statuses.indexOf(value.status) !== -1)
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <FlatList data={retrieveData(['NEXT'])}
                      renderItem={({item}) =>
                          <UnitNextTravell fromCity={item.fromCity}
                                          id={item.id}
                                          toCity={item.toCity}
                                          travelDate={item.travelDate}
                          />
                      }>

            </FlatList>
        </View>


    )
};
const styles = StyleSheet.create({})

export default NextTravels
