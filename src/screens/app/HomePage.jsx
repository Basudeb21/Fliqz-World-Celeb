import React, { useEffect } from 'react';
import {
    BackHandler,
    FlatList,
    SafeAreaView,
    StyleSheet,
    ToastAndroid,
} from 'react-native';
import { Colors, NavigationStrings } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import HomeTopBar from '../../components/framework/navbar/HomeTopBar';
import { StoryHighlightArea, SuggestionArea } from './home-mini-components';
import SharedPost from '../../components/framework/card/SharedPost';
import Spacer from '../../components/framework/boots/Spacer';
import { dummyFeedData } from '../../data/dummyFeedData';

let backPressedOnce = false;

const HomePage = () => {
    const navigation = useNavigation();

    const token = useSelector(state => state.auth.token);
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        console.log('Token:', token);
        console.log('User:', user);

        if (!token || !user) {
            navigation.replace(NavigationStrings.AUTH_STACK);
        }

        const backAction = () => {
            if (backPressedOnce) {
                navigation.goBack();
                return true;
            }
            ToastAndroid.show("Press again to back.", ToastAndroid.SHORT);
            backPressedOnce = true;

            setTimeout(() => {
                backPressedOnce = false;
            }, 2000);

            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        );

        return () => backHandler.remove();
    }, [token, user]);

    const handleSearchPress = () => {
        navigation.navigate(NavigationStrings.HOME_STACK, {
            screen: NavigationStrings.HOME_SEARCH_SCREEN,
        });
    };

    const handleNotificationPress = () => {
        navigation.navigate(NavigationStrings.HOME_STACK, {
            screen: NavigationStrings.HOME_NOTIFICATION_SCREEN,
        });
    };

    const handleWalletPress = () => {
        navigation.navigate(NavigationStrings.HOME_STACK, {
            screen: NavigationStrings.HOME_WALLET_SCREEN,
        });
    };

    const handleCartPress = () => {
        navigation.navigate(NavigationStrings.HOME_STACK, {
            screen: NavigationStrings.HOME_CART_SCREEN,
        });
    };

    const feedData = dummyFeedData;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.WHITE }}>
            <HomeTopBar
                searchOnPress={handleSearchPress}
                notificationOnPress={handleNotificationPress}
                walletOnPress={handleWalletPress}
                cartOnPress={handleCartPress}
            />

            <FlatList
                data={feedData}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
                    <>
                        <StoryHighlightArea />
                        <Spacer height={20} />
                    </>
                }
                renderItem={({ item }) => {
                    if (item.type === 'post') {
                        return (
                            <SharedPost
                                userAvatar={item.avatar}
                                postImage={item.image}
                                userName={item.user}
                            />
                        );
                    } else if (item.type === 'suggestion') {
                        return <SuggestionArea />;
                    }
                    return null;
                }}
                ItemSeparatorComponent={() => <Spacer height={20} />}
                ListFooterComponent={<Spacer height={30} />}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

export default HomePage;

const styles = StyleSheet.create({});
