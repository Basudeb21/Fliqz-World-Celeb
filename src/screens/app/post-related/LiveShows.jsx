import React, { useRef, useState } from 'react';
import { FlatList, View, Dimensions, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LiveStory from '../../../components/framework/live/LiveStory';
import Videos from '../../../constants/Videos';

const { height } = Dimensions.get('window');

const videos = [
    {
        id: 1,
        video: Videos.LIVE_ONE,
        creator: "MS Dhoni",
        caption:
            "Every challenge I faced made me stronger. Leadership is not just about giving orders—it's about earning trust, making tough decisions, and staying calm under pressure.",
    },
    {
        id: 2,
        video: Videos.LIVE_TWO,
        creator: "Virat Kohli",
        caption:
            "Passion drives me every single day. The fire to improve, compete, and push boundaries keeps me moving, no matter how tough the situation gets on or off the field.",
    },
    {
        id: 3,
        video: Videos.LIVE_THREE,
        creator: "Neeraj Chopra",
        caption:
            "Discipline, persistence, and self-belief are the three pillars that build champions. No matter where you come from, your dedication defines your success.",
    },
    {
        id: 4,
        video: Videos.LIVE_FOUR,
        creator: "PV Sindhu",
        caption:
            "The journey is never easy, especially for women in sports. But with each match, I prove to myself and the world that determination and hard work always shine through.",
    },
    {
        id: 5,
        video: Videos.LIVE_FIVE,
        creator: "Rohit Sharma",
        caption:
            "Success isn’t always about hitting big shots. It’s about timing, patience, and understanding the rhythm of the game. That’s how you build a legacy worth remembering.",
    },
    {
        id: 6,
        video: Videos.LIVE_SIX,
        creator: "Hardik Pandya",
        caption:
            "From the streets to stadiums, the hustle never stopped. I carry my story with pride—it’s a reminder that dreams backed by hustle can take you anywhere.",
    },
    {
        id: 7,
        video: Videos.LIVE_SEVEN,
        creator: "KL Rahul",
        caption:
            "Silence speaks volumes when you let your performance do the talking. Focus, faith, and finesse are what define true elegance on the field.",
    },
    {
        id: 8,
        video: Videos.LIVE_EIGHT,
        creator: "Shubman Gill",
        caption:
            "Young blood, big dreams. I know that consistency and grind will shape my path to greatness. Every run I score is a step closer to that dream.",
    },
    {
        id: 9,
        video: Videos.LIVE_NINE,
        creator: "Smriti Mandhana",
        caption:
            "Women can dominate the pitch too. It’s not just about winning matches—it’s about changing mindsets, inspiring girls, and breaking barriers in every inning.",
    },
    {
        id: 10,
        video: Videos.LIVE_TEN,
        creator: "Rishabh Pant",
        caption:
            "They said I play too risky, but I know how to back myself when it counts. My game isn’t perfect—but it’s fearless, and that’s how I want to be remembered.",
    },
];


export default function LiveShows() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const onViewRef = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    });

    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 80 });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={videos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                    <View style={{ height }}>
                        <LiveStory
                            video={item.video}
                            creator={item.creator}
                            caption={item.caption}
                            paused={currentIndex !== index}
                        />
                    </View>
                )}
                pagingEnabled
                horizontal={false}
                showsVerticalScrollIndicator={false}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
                windowSize={2}
                removeClippedSubviews
                initialNumToRender={1}
            />

        </SafeAreaView>
    );
}
