import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import SendCommentArea from '../../../components/framework/input/SendCommentArea';
import CommentCard from '../../../components/framework/card/CommentCard';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Colors, Images } from '../../../constants';
import BackpressTopBar from '../../../components/framework/navbar/BackpressTopBar';

const AllComments = () => {
    const comment = [
        {
            id: 1,
            userImg: Images.CELEBRITY_AVATAR_ONE,
            userName: 'MS Dhoni',
            comment: 'Hello, how are you? I like your content. It is superb...',
            time: '2d',
        },
        {
            id: 2,
            userImg: Images.CELEBRITY_AVATAR_TWO,
            userName: 'Virat Kohli',
            comment: 'Awesome post! Keep it up 💪',
            time: '1d',
        },
        {
            id: 3,
            userImg: Images.CELEBRITY_AVATAR_THREE,
            userName: 'Rohit Sharma',
            comment: 'Nice work, really impressed by your creativity.',
            time: '5h',
        },
        {
            id: 4,
            userImg: Images.CELEBRITY_AVATAR_FOUR,
            userName: 'Sachin Tendulkar',
            comment: 'Proud of you! Keep doing what you love.',
            time: '3h',
        },
        {
            id: 5,
            userImg: Images.CELEBRITY_AVATAR_FIVE,
            userName: 'Yuvraj Singh',
            comment: 'Haha, this is amazing 😂👏',
            time: '1h',
        },
        {
            id: 6,
            userImg: Images.CELEBRITY_AVATAR_ONE,
            userName: 'KL Rahul',
            comment: 'Looking forward to your next update!',
            time: '50m',
        },
        {
            id: 7,
            userImg: Images.CELEBRITY_AVATAR_TWO,
            userName: 'Suresh Raina',
            comment: 'Wow! This just made my day.',
            time: '45m',
        },
        {
            id: 8,
            userImg: Images.CELEBRITY_AVATAR_THREE,
            userName: 'Ravindra Jadeja',
            comment: 'Truly inspiring, keep sharing your journey.',
            time: '30m',
        },
        {
            id: 9,
            userImg: Images.CELEBRITY_AVATAR_FOUR,
            userName: 'Ravi Ashwin',
            comment: 'Amazing talent on display!',
            time: '20m',
        },
        {
            id: 10,
            userImg: Images.CELEBRITY_AVATAR_FIVE,
            userName: 'Zaheer Khan',
            comment: 'Loved this one. Great job!',
            time: 'Just now',
        },
    ];

    return (
        <View style={styles.container}>
            <BackpressTopBar title={"Comments"} />
            <FlatList
                data={comment}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CommentCard
                        image={item.userImg}
                        userName={item.userName}
                        comment={item.comment}
                        time={item.time}
                    />
                )}

                contentContainerStyle={{
                    marginTop: verticalScale(10),
                    gap: verticalScale(10),
                    paddingBottom: verticalScale(20),
                    paddingStart: moderateScale(10),
                }}
            />

            <View style={styles.sendCommentWrapper}>
                <SendCommentArea placeholder={'Write a comment...'} />
            </View>
        </View>
    );
};

export default AllComments;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    sendCommentWrapper: {
        backgroundColor: Colors.WHITE,
        width: "100%",
        height: verticalScale(63),
        borderTopWidth: 1,
        borderTopColor: Colors.INPUTBOX_DEACTIVE_BORDER_COLOR,
    },
});
