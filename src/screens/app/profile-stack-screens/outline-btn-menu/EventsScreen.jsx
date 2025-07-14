import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import BackpressTopBar from '../../../../components/framework/navbar/BackpressTopBar'
import { Colors, Images, NavigationStrings } from "./../../../../constants"
import SearchBar from '../../../../components/framework/input/SearchBar'
import Spacer from '../../../../components/framework/boots/Spacer'
import { scale, verticalScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import EventCard from '../../../../components/framework/card/EventCard'
const EventsScreen = () => {
    const eventItems = [
        {
            id: 1,
            image: Images.EVENT_ONE,
            eventName: "Event One",
            date: "2025-07-12",
            orgName: "TechNova Inc."
        },
        {
            id: 2,
            image: Images.EVENT_TWO,
            eventName: "Event Two",
            date: "2025-08-03",
            orgName: "RunFast Sports"
        },
        {
            id: 3,
            image: Images.EVENT_THREE,
            eventName: "Event Three",
            date: "2025-07-28",
            orgName: "PixelPro Studios"
        },
        {
            id: 4,
            image: Images.EVENT_FOUR,
            eventName: "Event Four",
            date: "2025-09-15",
            orgName: "HealthSync"
        },
        {
            id: 5,
            image: Images.EVENT_FIVE,
            eventName: "Event Five",
            date: "2025-08-20",
            orgName: "GameVerse"
        },
        {
            id: 6,
            image: Images.EVENT_SIX,
            eventName: "Event Six",
            date: "2025-10-05",
            orgName: "SoundBlaze"
        },
        {
            id: 7,
            image: Images.EVENT_SEVEN,
            eventName: "Event Seven",
            date: "2025-07-30",
            orgName: "UrbanGear"
        },
        {
            id: 8,
            image: Images.EVENT_EIGHT,
            eventName: "Event Eight",
            date: "2025-09-10",
            orgName: "PhotoSnap"
        },
        {
            id: 9,
            image: Images.EVENT_NINE,
            eventName: "Event Nine",
            date: "2025-08-16",
            orgName: "TabWise"
        },
        {
            id: 10,
            image: Images.EVENT_TEN,
            eventName: "Event Ten",
            date: "2025-07-25",
            orgName: "FitTrack"
        }
    ];


    const navigation = useNavigation();
    const onImagePress = () => {
        navigation.navigate(NavigationStrings.PROFILE_EVENT_DETAILS)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.WHITE }}>
            <BackpressTopBar title={"Events"} />
            <View>
                <FlatList
                    ListHeaderComponent={
                        <>
                            <Spacer height={10} />
                            <SearchBar placeholder={"Search"} />
                        </>
                    }
                    data={eventItems}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <EventCard
                            image={item.image}
                            eventName={item.eventName}
                            date={item.date}
                            eventOrg={item.orgName}
                            onPress={onImagePress}
                        />
                    )}
                    ListFooterComponent={<Spacer height={130} />}
                    contentContainerStyle={styles.scrollContent}
                />
            </View>
        </SafeAreaView>
    )
}

export default EventsScreen

const styles = StyleSheet.create({
    row: {
        marginBottom: verticalScale(12),
        justifyContent: "center",
        gap: scale(10)
    },
})