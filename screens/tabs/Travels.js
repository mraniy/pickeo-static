import {StyleSheet} from "react-native";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NewTravel from "../stack/travels/NewTravel";
import NextTravels from "../stack/travels/NextTravels";
import PastTravels from "../stack/travels/PastTravels";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Add" component={NewTravel}/>
            <Tab.Screen name="Next" component={NextTravels}/>
            <Tab.Screen name="Past" component={PastTravels}/>

        </Tab.Navigator>
    );
}

const Travels = ({navigation}) => {
    return (
        <MyTabs/>
    )
}
const styles = StyleSheet.create({})

export default Travels
