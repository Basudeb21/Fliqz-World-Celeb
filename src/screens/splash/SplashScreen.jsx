import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Colors, Images, NavigationStrings } from '../../constants'
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import LoadingBar from '../../components/framework/boots/LoadingBar';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context';

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace(NavigationStrings.SPLASH_INFO);
        }, 4500);

        return () => clearTimeout(timer);
    }, []);
    return (
        <SafeAreaView style={styles.screen}>
            <FastImage
                source={Images.BLACK_LOGO}
                style={styles.logo}
                resizeMode={FastImage.resizeMode.contain}
            />
            <View style={styles.loadingContainer}>
                <LoadingBar />
                <Text style={styles.loadingTxt}>Loading....</Text>
            </View>
        </SafeAreaView>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.BLACK,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        width: moderateScale(300),
        height: verticalScale(169),

    },
    loadingContainer: {
        position: "absolute",
        bottom: 60
    },
    loadingTxt: {
        color: Colors.WHITE,
        alignSelf: "center",
        fontSize: scale(17),
        fontWeight: "800",
        position: "absolute",
        top: 20,
        fontFamily: "DMSans-Regular"
    }

})