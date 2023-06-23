import {StyleSheet} from "react-native";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Profile from "./Profile";
import Travels from "./Travels";
import NewProductRequests from "../stack/orders/NewProductRequests";
import ProductRequests from "../stack/orders/ProductRequests";

const Tab = createMaterialTopTabNavigator();


function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="New" component={NewProductRequests}/>
            <Tab.Screen name="Product Requests" component={ProductRequests}/>
            <Tab.Screen name="Current orders" component={Profile}/>
            <Tab.Screen name="Delivered" component={Travels}/>
        </Tab.Navigator>
    );
}


const Orders = ({navigation}) => {
    return (
        <MyTabs/>
    )
}
const styles = StyleSheet.create({})

export default Orders
