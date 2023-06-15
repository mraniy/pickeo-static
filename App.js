import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from "./screens/Home";
import {FontAwesome, Ionicons, MaterialIcons} from "@expo/vector-icons";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Orders from "./screens/Orders";
import Travels from "./screens/Travels";
import Earnings from "./screens/Earnings";

export default function App() {

    let Stack = createNativeStackNavigator();

    //let Drawer = createDrawerNavigator();


    const Tab = createBottomTabNavigator();


    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home"
                            component={Home}
                            options={{
                                tabBarLabel: 'Home',
                                tabBarOptions: {
                                    activeTintColor: '#81B347'
                                },
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialIcons name ="home" size = {24} color = "gray" />
                                ),
                            }}/>
                <Tab.Screen name="Orders"
                            component={Orders}
                            options={{
                                tabBarLabel: 'Orders',
                                tabBarOptions: {
                                    activeTintColor: '#81B347'
                                },
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialIcons name ="shopping-cart" size = {24} color = "gray" />
                                ),
                            }}/>

                <Tab.Screen name="Travels"
                            component={Travels}
                            options={{
                                tabBarLabel: 'Travels',
                                tabBarOptions: {
                                    activeTintColor: '#81B347'
                                },
                                tabBarIcon: ({ color, size }) => (
                                    <Ionicons name ="airplane" size = {24} color = "gray" />
                                ),
                            }}/>

                <Tab.Screen name="Earnings"
                            component={Earnings}
                            options={{
                                tabBarLabel: 'Earnings',
                                tabBarOptions: {
                                    activeTintColor: '#81B347'
                                },
                                tabBarIcon: ({ color, size }) => (
                                    <FontAwesome name="dollar" size={24} color="black" />
                                ),
                            }}/>
            </Tab.Navigator>

        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

