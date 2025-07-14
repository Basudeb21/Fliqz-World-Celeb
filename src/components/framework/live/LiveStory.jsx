import React, { useRef, useState } from 'react';
import {
    View,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../../constants';
import { moderateScale, scale } from 'react-native-size-matters';
import LiveShowButtonGroup from '../button/LiveShowButtonGroup';
import LiveWatchingCard from '../card/LiveWatchingCard';
import LiveOwnerPostCard from '../card/LiveOwnerPostCard';

export default function LiveStory({ video, paused: externalPaused, creator, caption }) {
    const playerRef = useRef(null);

    const [localPaused, setLocalPaused] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const togglePlayPause = () => {
        setLocalPaused(!localPaused);
    };

    const onLoad = (data) => {
        setDuration(data.duration);
    };

    const onProgress = (data) => {
        setCurrentTime(data.currentTime);
    };

    const progress = duration > 0 ? currentTime / duration : 0;

    const effectivePaused = externalPaused || localPaused;

    return (
        <TouchableWithoutFeedback onPress={togglePlayPause}>
            <View style={styles.container}>
                <Video
                    ref={playerRef}
                    source={{ uri: video }}
                    style={styles.video}
                    resizeMode="cover"
                    paused={effectivePaused}
                    repeat
                    onLoad={onLoad}
                    onProgress={onProgress}
                />

                <LiveShowButtonGroup />
                <LiveWatchingCard />
                <LiveOwnerPostCard creator={creator} caption={caption} />

                {effectivePaused && (
                    <View style={styles.progressContainer}>
                        <View
                            style={[
                                styles.progressBar,
                                { width: `${progress * 100}%` },
                            ]}
                        />
                    </View>
                )}


                {effectivePaused && (
                    <View style={styles.playIconWrapper}>
                        <Icon name="play-arrow" size={70} color={Colors.WHITE} />
                    </View>
                )}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'black' },
    video: { flex: 1 },
    playIconWrapper: {
        position: 'absolute',
        alignSelf: 'center',
        top: '45%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 50,
        padding: 20,
    },
    progressContainer: {
        position: 'absolute',
        bottom: 10,
        left: moderateScale(10),
        right: moderateScale(10),
        height: 4,
        backgroundColor: Colors.TRANSPARENT_WHITE,
        borderRadius: scale(100),
    },
    progressBar: {
        height: 4,
        backgroundColor: Colors.THEME,
        borderRadius: scale(100),
    },
});
