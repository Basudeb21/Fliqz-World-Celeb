// TestSvg.js
import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import { View } from 'react-native';

export default function TestSvg() {
    return (
        <View>
            <Svg height="100" width="100">
                <Circle cx="50" cy="50" r="45" stroke="red" strokeWidth="2.5" fill="green" />
            </Svg>
        </View>
    );
}
