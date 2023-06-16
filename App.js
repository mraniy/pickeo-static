import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from "./screens/Home";
import {FontAwesome, Ionicons, MaterialIcons} from "@expo/vector-icons";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Orders from "./screens/Orders";
import Travels from "./screens/Travels";
import Earnings from "./screens/Earnings";
import Profile from "./screens/Profile";

export default function App() {

    let Stack = createNativeStackNavigator();
    //let Drawer = createDrawerNavigator();
    const Tab = createBottomTabNavigator();

    return (
        //Options de labels dans le menu navigation
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                activeTintColor :'#ff3333', inactiveTintColor : 'gray',
                labelStyle: { paddingBottom: 2, fontWeight: '100', fontSize: 11, paddingTop:0 }
            }}
            >
                <Tab.Screen name="Home" style={styles.navLabelStyle}
                            component={Home}
                            options={{
                                tabBarLabel: 'Home',
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialIcons  name ="home" style={styles.navIconStyle}/>
                                ),
                            }}/>
                <Tab.Screen name="Orders"
                            component={Orders}
                            options={{
                                tabBarLabel: 'Orders',
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialIcons name ="shopping-cart" style={styles.navIconStyle}/>
                                ),
                            }}/>

                <Tab.Screen name="Travels"
                            component={Travels}
                            options={{
                                tabBarLabel: 'Travels',
                                tabBarIcon: ({ color, size }) => (
                                    <Ionicons name ="airplane" style={styles.navIconStyle}/>
                                ),
                            }}/>

                <Tab.Screen name="Earnings"
                            component={Earnings}
                            options={{
                                tabBarLabel: 'Earnings',
                                tabBarIcon: ({ color, size }) => (
                                    <FontAwesome name="dollar" style={styles.navIconStyle}/>
                                ),
                            }}/>
                <Tab.Screen name="Profile"
                            component={Profile}
                            options={{
                                tabBarLabel: 'Profile',
                                tabBarIcon: ({ color, size }) => (
                                    <Ionicons name="person" style={styles.navIconStyle}/>
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
        justifyContent: 'center'
    },
    navLabelStyle: {
        //activeTintColor : 'red',
        //inactiveTintColor : 'green',
        //labelStyle: { paddingBottom: 4, fontSize: 12, paddingTop:0 }
        paddingBottom: 4,
        fontSize: 12,
        paddingTop:0
    },
    navIconStyle: {
        fontSize : 22,
        color : 'gray',
        paddingTop :4
    }
});

