import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants'
import { scale, verticalScale } from 'react-native-size-matters';

const EventCard = ({ image, eventName, date, eventOrg, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}><Image style={styles.image} source={{ uri: image }} /></TouchableOpacity>
            <Text style={styles.productName}>{eventName}</Text>
            <Text style={styles.productSummary}>{date}</Text>
            <Text style={styles.productPrice}>{eventOrg}</Text>
        </View>
    )
}

export default EventCard

const styles = StyleSheet.create({
    container: {
        minWidth: "43%",
        maxWidth: "43%"
    },
    image: {
        height: verticalScale(200),
        borderRadius: scale(12)
    },
    productName: {
        marginTop: verticalScale(7),
        fontWeight: "500",
        fontSize: scale(17),
        color: Colors.FADE_TEXT
    },
    productSummary: {
        fontWeight: "400",
        fontSize: scale(12),
        color: Colors.SILVER
    },
    productPrice: {

    }
})