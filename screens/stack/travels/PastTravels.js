import {FlatList, StyleSheet, View} from "react-native";
import UnitPastTravel from "./UnitPastTravel";
import React from "react";


const PastTravels = ({navigation}) => {
    const data = require('../../../mocks/travels');

    function retrieveData(statuses) {
        return data
            .filter(value => statuses.indexOf(value.status) !== -1)
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <FlatList data={retrieveData(['PAST'])}
                      renderItem={({item}) =>
                          <UnitPastTravel fromCity={item.fromCity}
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

export default PastTravels
