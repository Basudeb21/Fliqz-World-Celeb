import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import BottomBar from '../navbar/shared-post-components/BottomBar'
import Topbar from '../navbar/shared-post-components/Topbar'


const SharedPost = ({ userName, userAvatar, postImage }) => {
    return (
        <View style={styles.container}>
            <Topbar userAvatar={userAvatar} userName={userName} />
            <Image
                source={{ uri: postImage }}
                style={styles.postImage}
            />
            <BottomBar />
        </View>
    )
}

export default SharedPost

const styles = StyleSheet.create({

    postImage: {
        marginTop: verticalScale(10),
        width: "100%",
        height: verticalScale(220)
    }
})