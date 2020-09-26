import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { CounterScreen } from '../screens/CounterScreen';
import { DrawerContent } from '../screens/DrawerContent';

const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerStyle={{ width: '55%', marginTop: 55 }} drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="HomeDrawer" component={CounterScreen} />
            </Drawer.Navigator>
        </NavigationContainer>

    );
}