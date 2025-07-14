import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../../constants'
import { scale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import Feather from 'react-native-vector-icons/dist/Feather'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import { likePressSound } from '../../../sound/SoundManager'

const LiveShowButtonGroup = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    const handleOnPressFavorite = () => {
        likePressSound()
        setIsFavorite(!isFavorite)
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleOnPressFavorite}>
                <MaterialIcons
                    name={isFavorite ? "favorite" : "favorite-outline"}
                    color={Colors.WHITE}
                    size={24}
                />
            </TouchableOpacity>
            <Feather
                name="bookmark"
                color={Colors.WHITE}
                size={24}
            />
            <Feather
                name="dollar-sign"
                color={Colors.WHITE}
                size={24}
            />
            <MaterialIcons
                name="subscriptions"
                color={Colors.WHITE}
                size={24}
            />
            <AntDesign
                name="message1"
                color={Colors.WHITE}
                size={24}
            />
        </View>
    )
}

export default LiveShowButtonGroup

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 120,
        right: 10,
        zIndex: 100,
        // backgroundColor: Colors.TRANSPARENT_WHITE_LIGHT,
        alignSelf: "flex-start",
        padding: scale(10),
        justifyContent: "center",
        alignItems: "center",
        gap: scale(15),
        borderRadius: (100)
    }
})