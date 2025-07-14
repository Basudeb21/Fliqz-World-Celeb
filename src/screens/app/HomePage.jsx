import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { Colors, NavigationStrings } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import HomeTopBar from '../../components/framework/navbar/HomeTopBar';
import { StoryHighlightArea, SuggestionArea } from './home-mini-components';
import SharedPost from '../../components/framework/card/SharedPost';
import Spacer from '../../components/framework/boots/Spacer';
import { dummyFeedData } from '../../data/dummyFeedData';

const HomePage = () => {
    const navigation = useNavigation()

    const handleSearchPress = () => {
        navigation.navigate(NavigationStrings.HOME_STACK, {
            screen: NavigationStrings.HOME_SEARCH_SCREEN,
        })
    }

    const handleNotificationPress = () => {
        navigation.navigate(NavigationStrings.HOME_STACK, {
            screen: NavigationStrings.HOME_NOTIFICATION_SCREEN,
        })
    }

    const handleWalletPress = () => {
        navigation.navigate(NavigationStrings.HOME_STACK, {
            screen: NavigationStrings.HOME_WALLET_SCREEN,
        })
    }

    const handleCartPress = () => {
        navigation.navigate(NavigationStrings.HOME_STACK, {
            screen: NavigationStrings.HOME_CART_SCREEN,
        })
    }

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
                        )
                    } else if (item.type === 'suggestion') {
                        return <SuggestionArea />
                    }
                    return null
                }}
                ItemSeparatorComponent={() => <Spacer height={20} />}
                ListFooterComponent={<Spacer height={30} />}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

export default HomePage

const styles = StyleSheet.create({})
