import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Colors, Images, NavigationStrings } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import HomeTopBar from '../../components/framework/navbar/HomeTopBar'
import { StoryHighlightArea, SuggestionArea } from './home-mini-components'
import SharedPost from '../../components/framework/card/SharedPost'
import Spacer from '../../components/framework/boots/Spacer'

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

    const feedData = [
        { id: '1', type: 'post', avatar: Images.CELEBRITY_AVATAR_ONE, image: Images.POST_ONE, user: 'Fans_5' },
        { id: '2', type: 'post', avatar: Images.CELEBRITY_AVATAR_TWO, image: Images.POST_TWO, user: 'Fans_3' },
        { id: '3', type: 'suggestion' },
        { id: '4', type: 'post', avatar: Images.CELEBRITY_AVATAR_THREE, image: Images.POST_THREE, user: 'Fans_21' },
        { id: '5', type: 'post', avatar: Images.CELEBRITY_AVATAR_FOUR, image: Images.POST_FOUR, user: 'Fans_1' },
        { id: '6', type: 'post', avatar: Images.CELEBRITY_AVATAR_FIVE, image: Images.POST_FIVE, user: 'Fans_6' },
    ]

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
