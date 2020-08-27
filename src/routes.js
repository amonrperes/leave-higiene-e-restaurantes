import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeActivity from './pages/HomeActivity/index'

const DrawerNavigation = createDrawerNavigator();

export default function Routes(){

    return(
        <NavigationContainer>
            <DrawerNavigation.Navigator screenOptions={{headerShown: true}}>
                <DrawerNavigation.Screen name='Home' component={HomeActivity}/>
            </DrawerNavigation.Navigator>
        </NavigationContainer>
    );

}