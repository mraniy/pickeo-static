import Home from "../screens/Home";
import {MaterialIcons} from "@expo/vector-icons";

const CustomTabNavgator = ({Component,Tab}) => {
    return (
        <Tab.Screen name="Home"
                    component={Component}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarOptions: {
                            activeTintColor: '#81B347'
                        },
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name ="home" size = {24} color = "gray" />
                        ),
                    }}/>
    )
}
export default CustomTabNavgator
