import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from "./screens/tabs/Home";
import {FontAwesome, Ionicons} from "@expo/vector-icons";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Orders from "./screens/tabs/Orders";
import NewTravel from "./screens/stack/travels/NewTravel";
import Earnings from "./screens/tabs/Earnings";
import Profile from "./screens/tabs/Profile";
import React from "react";
import Login from "./screens/stack/login/Login";
import SignUp from "./screens/stack/login/Signup";
import SignUpConfirm from "./screens/stack/login/SignUpConfirm";
import OrdersWaiting from "./screens/stack/orders/OrdersWaiting";
import ProfileConfirm from "./screens/stack/profile/ProfileConfirm";
import Travels from "./screens/tabs/Travels";
import NextTravels from "./screens/stack/travels/NextTravels";

export default function App() {

    let Stack = createNativeStackNavigator();

    //let Drawer = createDrawerNavigator();
    const Tab = createBottomTabNavigator();

    function StackNavigator() {
        return (<Stack.Navigator>
            <Stack.Screen name="Home"
                          component={Home}
                          options={({navigation}) => ({
                              //Refactor
                              headerRight: () => (
                                  <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                      <FontAwesome name="user-o" style={styles.headerIconStyle}/>
                                      <Text style={styles.headerLinkStyle}>Login</Text>
                                  </TouchableOpacity>
                              )
                          })}/>

            <Stack.Screen name="OrdersWaiting"
                          component={OrdersWaiting}/>
            <Stack.Screen name="Login"
                          component={Login}/>
            <Stack.Screen name="SignUp"
                          component={SignUp}
            />
            <Stack.Screen name="SignUpConfirmation"
                          component={SignUpConfirm}/>

            <Stack.Screen name="ProfileConfirm"
                          component={ProfileConfirm}/>

            <Stack.Screen name="NextTravels"
                          component={NextTravels}/>

        </Stack.Navigator>)
    }

    //Dont delete try these active tint color 9c3560 e32977 f15c20
    //inactive tint color  40828c 40678c 174092
    function TabNavigator() {
        return (<Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#f15c20', inactiveTintColor: '#40678c',
                labelStyle: {paddingBottom: 2, fontWeight: '100', fontSize: 13, paddingTop: 0, paddingLeft: 2}
            }}
        >
            <Tab.Screen name="HomeScreenTab"
                        component={StackNavigator}
                        options={{
                            tabBarLabel: 'Home',
                            headerShown: false,
                            tabBarIcon: ({color, size}) => (
                                <Ionicons name="home-outline" style={styles.navIconStyle}/>
                            ),
                        }}/>

            <Tab.Screen name="Orders"
                        component={Orders}
                        options={{
                            tabBarLabel: 'Orders',
                            tabBarIcon: ({color, size}) => (
                                <Ionicons name="cart-outline" style={styles.navIconStyle}/>
                            ),
                        }}/>

            <Tab.Screen name="Travels"
                        component={Travels}
                        options={{
                            tabBarLabel: 'Travels',
                            tabBarIcon: ({color, size}) => (
                                <Ionicons name="airplane-outline" style={styles.navIconStyle}/>
                            ),
                        }}/>

            <Tab.Screen name="Earnings"
                        component={Earnings}
                        options={{
                            tabBarLabel: 'Earnings',
                            tabBarIcon: ({color, size}) => (
                                <Ionicons name="cash-outline" style={styles.navIconStyle}/>
                            ),
                        }}/>
            <Tab.Screen name="Profile"
                        component={Profile}
                        options={{
                            tabBarLabel: 'Profile',
                            tabBarIcon: ({color, size}) => (
                                <Ionicons name="person-outline" style={styles.navIconStyle}/>
                            ),
                        }}/>
        </Tab.Navigator>)
    }


    return (
        //Options de labels dans le menu navigation ff3333
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>

    );
}

const styles = StyleSheet.create({

    navIconStyle: {
        fontSize: 25,
        color: 'gray',
        paddingTop: 6
    },

    headerIconStyle: {
        fontSize: 22,
        color: '#280f00',
        paddingTop: 2,
        paddingLeft: 8

    },

    headerLinkStyle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#2584cc'
    },
});


