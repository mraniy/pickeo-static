import {Button, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from "./screens/Home";
import {FontAwesome, Ionicons, MaterialIcons} from "@expo/vector-icons";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Orders from "./screens/Orders";
import Travels from "./screens/Travels";
import Earnings from "./screens/Earnings";
import Profile from "./screens/Profile";
import React from "react";
import Login from "./screens/Login";
import SignUp from "./screens/Signup";
import SignUpConfirm from "./screens/SignUpConfirm";

export default function App() {

    let Stack = createNativeStackNavigator();

    //let Drawer = createDrawerNavigator();
    const Tab = createBottomTabNavigator();
    function MyTabs() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#ff3333', inactiveTintColor: 'gray',
                    labelStyle: {paddingBottom: 2, fontWeight: '100', fontSize: 13, paddingTop: 0}
                }}
                screenOptions={({navigation}) => ({
                    headerRight: () => (
                        <Button
                            onPress={() => navigation.navigate('Login')}
                            title="Login"
                            color="#000"
                        />
                    )
                })}

            >
                <Tab.Screen name="Home" style={styles.navLabelStyle}
                            component={Home}
                            options={{
                                tabBarLabel: 'Home',
                                tabBarIcon: ({color, size}) => (
                                    <MaterialIcons name="home" style={styles.navIconStyle}/>
                                ),
                            }}/>
                <Tab.Screen name="Login" style={styles.navLabelStyle}
                            component={Login}
                            options={{ headerShown: false }}
                            options={{
                                tabBarLabel: 'Login',
                                tabBarIcon: ({color, size}) => (
                                    <MaterialIcons name="home" style={styles.navIconStyle}/>
                                ),
                            }}/>
                <Tab.Screen name="Orders"
                            component={Orders}
                            options={{
                                tabBarLabel: 'Orders',
                                tabBarIcon: ({color, size}) => (
                                    <MaterialIcons name="shopping-cart" style={styles.navIconStyle}/>
                                ),
                            }}/>

                <Tab.Screen name="Travels"
                            component={Travels}
                            options={{
                                tabBarLabel: 'Travels',
                                tabBarIcon: ({color, size}) => (
                                    <Ionicons name="airplane" style={styles.navIconStyle}/>
                                ),
                            }}/>

                <Tab.Screen name="Earnings"
                            component={Earnings}
                            options={{
                                tabBarLabel: 'Earningsssss',
                                tabBarIcon: ({color, size}) => (
                                    <FontAwesome name="dollar" style={styles.navIconStyle}/>
                                ),
                            }}/>
                <Tab.Screen name="Profile"
                            component={Profile}
                            options={{
                                tabBarLabel: 'Profile',
                                tabBarIcon: ({color, size}) => (
                                    <Ionicons name="person" style={styles.navIconStyle}/>
                                ),
                            }}/>
                <Tab.Screen name="SignUp"
                            component={SignUp}
                            options={{
                                tabBarLabel: 'Sign Up',
                                tabBarIcon: ({color, size}) => (
                                    <Ionicons name="person" style={styles.navIconStyle}/>
                                ),
                            }}/>
                <Tab.Screen name="SignUpConfirmation"
                            component={SignUpConfirm}
                            options={{
                                tabBarLabel: 'Sign Up confirm',
                                tabBarIcon: ({color, size}) => (
                                    <Ionicons name="person" style={styles.navIconStyle}/>
                                ),
                            }}/>
            </Tab.Navigator>
        );
    }


    return (
        //Options de labels dans le menu navigation ff3333
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tabs" component={MyTabs} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    navLabelStyle: {
        paddingBottom: 4,
        paddingTop: 0
    },
    navIconStyle: {
        fontSize: 25,
        color: 'gray',
        paddingTop: 6
    }
});

