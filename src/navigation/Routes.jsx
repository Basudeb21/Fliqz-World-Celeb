import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SplashStack from './SplashStack';
const Routes = () => {

    return (
        <NavigationContainer>
            <SplashStack />
        </NavigationContainer>
    );
}

export default Routes