import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from "./screens/tabs/Home";
import {FontAwesome, Ionicons, MaterialIcons} from "@expo/vector-icons";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Orders from "./screens/tabs/Orders";
import Travels from "./screens/tabs/Travels";
import Earnings from "./screens/tabs/Earnings";
import Profile from "./screens/tabs/Profile";
import React from "react";
import Login from "./screens/stack/Login";
import SignUp from "./screens/stack/Signup";
import SignUpConfirm from "./screens/stack/SignUpConfirm";
import GlobalStyles from "./screens/styles/GlobalStyles";

export default function App() {

    let Stack = createNativeStackNavigator();

    //let Drawer = createDrawerNavigator();
    const Tab = createBottomTabNavigator();
    function StackNavigator() {
        return (<Stack.Navigator>
            <Stack.Screen name="Home" style={styles.navLabelStyle}
                          component={Home}
                          options={({navigation}) => ({
                              headerRight: () => (
                                  <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                      <FontAwesome name="user-o" style={styles.headerIconStyle}/>
                                      <Text style={styles.headerLinkStyle}>Login</Text>
                                  </TouchableOpacity>
                              )
                          })}/>
            <Stack.Screen name="Login" style={styles.navLabelStyle}
                          component={Login}/>
            <Stack.Screen name="SignUp" style={styles.navLabelStyle}
                          component={SignUp}
            />
            <Stack.Screen name="SignUpConfirmation" style={styles.navLabelStyle}
                          component={SignUpConfirm}/>

        </Stack.Navigator>)
    }
    //Dont delete try these 9c3560 active tiny color e32977 ff7733 f95807 FF5F1F
    function TabNavigator() {
        return (<Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#FF5F1F', inactiveTintColor: 'gray',
                labelStyle: {paddingBottom: 2, fontWeight: '100', fontSize: 13, paddingTop: 0}
            }}
        >
            <Tab.Screen name="Home" style={styles.navLabelStyle}
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

    navLabelStyle: {
        paddingBottom: 4,
        paddingTop: 0
    },

    navIconStyle: {
        fontSize: 25,
        color: 'gray',
        paddingTop: 6
    },

    headerIconStyle: {
        fontSize: 22,
        color: '#280f00',
        paddingTop: 2,
        paddingLeft: 10

    },

    headerLinkStyle: {
        fontSize: 16,
        fontWeight: '650',
        color : '#2584cc'
    },
});


