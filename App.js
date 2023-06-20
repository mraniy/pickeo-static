import {Button, StyleSheet} from 'react-native';
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
                                  <Button
                                      onPress={() => navigation.navigate('Login')}
                                      title="Login"
                                      color="#000"
                                  />
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
    function TabNavigator() {
        return (<Tab.Navigator
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
                        component={StackNavigator}
                        options={{
                            tabBarLabel: 'Home',
                            headerShown: false,
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
                            tabBarLabel: 'Earnings',
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

