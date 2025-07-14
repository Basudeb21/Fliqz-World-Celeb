import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackpressTopBar from '../../../../components/framework/navbar/BackpressTopBar'
import { Colors } from '../../../../constants'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import GradientIconTextCard from '../../../../components/framework/card/GradientIconTextCard'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import Entypo from 'react-native-vector-icons/dist/Entypo'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import Foundation from 'react-native-vector-icons/dist/Foundation'


const HelpAndSettingsScreen = () => {
    const cardContents = [
        { id: 1, Icon: Ionicons, iconName: "settings-sharp", label: "Account Settings", content: "Adjust settings, manage notifications, learn about name changes and more." },
        { id: 2, Icon: Entypo, iconName: "key", label: "Login and Password", content: "Fix login issues and learn how to change or reset your password." },
        { id: 3, Icon: MaterialIcons, iconName: "security", label: "Privacy and Security", content: "Control who can see what you share and add extra protection to your account." },
        { id: 4, Icon: Entypo, iconName: "shop", label: "Marketplace", content: "Learn how to buy and sell things on Facebook." },
        { id: 5, Icon: FontAwesome, iconName: "group", label: "Groups", content: "Learn how to create, manage and use Groups." },
        { id: 6, Icon: Foundation, iconName: "page-multiple", label: "Pages", content: "Learn how to create, use, follow and manage a Page." }
    ]
    return (
        <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
            <BackpressTopBar title={"Help and Support"} />
            <Text style={styles.updateTxt}>Last updated: 2025-05-06</Text>
            <FlatList
                data={cardContents}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={styles.row}
                renderItem={({ item }) => (
                    <GradientIconTextCard
                        Icon={item.Icon}
                        iconName={item.iconName}
                        label={item.label}
                        content={item.content}
                    />
                )}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default HelpAndSettingsScreen

const styles = StyleSheet.create({
    updateTxt: {
        color: Colors.PLACEHOLDER,
        fontWeight: "500",
        fontSize: scale(16),
        marginStart: moderateScale(20)
    },
    contentContainer: {
        marginHorizontal: moderateScale(10),
        marginTop: verticalScale(20),
    },
    row: {
        justifyContent: 'space-between',
    }
})