import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Settings } from "react-native";
import HomePage from "../pages/HomePage";

const Tab = createBottomTabNavigator();

const AppRoute = () => {
    return(
        <NavigationContainer>
            <TabNavigator>
                <Tab.Screen
                name = "Home"
                component ={HomePage}/>
                <Tab.Screen 
                name = "Settings"
                component = {SettingsPage}/>
            </TabNavigator>
        </NavigationContainer>
    );
}