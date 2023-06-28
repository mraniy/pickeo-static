import {StyleSheet} from "react-native";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NewOrder from "../stack/orders/NewOrder";
import OrdersWaiting from "../stack/orders/OrdersWaiting";
import OrdersValidated from "../stack/orders/OrdersValidated";

const Tab = createMaterialTopTabNavigator();


function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="New" component={NewOrder}/>
            <Tab.Screen name="Waiting" component={OrdersWaiting}/>
            <Tab.Screen name="Validated" component={OrdersValidated}/>
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
