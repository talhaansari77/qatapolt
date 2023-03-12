import {StyleSheet, View, FlatList, Image, Platform} from 'react-native';
import React, {useState, useEffect} from 'react';

import {verticalScale} from 'react-native-size-matters';
// import CustomText from "../CustomText";
import CustomText from './CustomText';
import {colors} from '../utils/Colors';
// import { color } from "@rneui/base";
// import colors from "../../util/colors";
import {InterFont} from '../utils/Fonts';
import {icons} from '../assets/icons';
// import { getMessages } from "../Services/chats";
export const ChatBody = ({
  userId,
  relatedUserId,
  messageText,
  authId,
  otherId,
}) => {
  // const [messages, setMessages] = useState([]);
  //   useEffect(() => {
  //     const messageSubscriber = getMessages(userId, relatedUserId, setMessages);

  //     return () => messageSubscriber();
  //   }, [userId, relatedUserId]);

  // useEffect(() => {

  //   const messageSubscriber = getMessages( otherId,authId, setMessages);
  //   return () => messageSubscriber();

  // }, [authId,otherId]);

  const message = [
    {id: 1, text: 'what is your name', createdAt: '2:30 PM'},
    {id: 2, text: 'what is your name', createdAt: '2:30 PM'},
    {id: 3, text: 'Hmmm 🤔', createdAt: '2:30 PM'},
  ];

  const renderMessages = ({item, index}) => {
    // const isUser = message?.from == authId;
    return (
      <View style={{padding: 5}}>
        {/* <View style={isUser ? styles.message1 : styles.message2}> */}
        <CustomText
          label={item.createdAt}
          textStyle={index == 1 ? styles.timerText1 : styles.timerText}
        />
        <View
          style={{
            flexDirection: 'row',
            alignSelf: index == 1 ? 'flex-start' : 'flex-end',
          }}>
          {index == 1 ? (
            <Image
              source={icons.corner1}
              style={{
                width: 10,
                height: 10,
                tintColor:colors.primary,
                marginTop: verticalScale(5),
                marginRight: -2,
              }}
            />
          ) : (
            <></>
          )}

          <View style={index == 1 ? styles.message2 : styles.message1}>
            <CustomText
              label={item.text}
              textStyle={index == 1 ? styles.messageText2 : styles.messageText}
            />
          </View>
          {index == 1 ? (
            <></>
          ) : (
            <Image
              source={icons.corner}
              style={{
                width: 10,
                height: 10,
                tintColor:colors.white,
                marginTop: verticalScale(5),
                marginLeft: -2,
              }}
            />
          )}
        </View>
      </View>
    );
  };

  //   <View key={index} style={{ padding: 5 }}>
  //         <View style={isUser ? styles.message1 : styles.message2}>
  //           <CustomText label={message.text} textStyle={styles.messageText} />
  //         </View>
  //         <CustomText
  //           label={message.createdAt}
  //           textStyle={isUser ? styles.timerText : styles.timerText1}
  //         />
  //       </View>
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={message}
        renderItem={renderMessages}
        style={styles.chat}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   chat: {
//     padding: 15,
//     height: "75%",
//   },

//   message: {
//     backgroundColor: "#F3F3F3",
//     borderTopRightRadius: 20,
//     borderTopLeftRadius: 20,
//     padding: 20,
//     minHeight: 100,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   messageSpoil: {
//     height: 30,
//     width: 30,
//     alignSelf: "flex-end",
//     top: -30,
//     right: -15,
//   },
//   message1: {
//     backgroundColor: colors.primary,
//     alignSelf: "flex-end",
//     paddingHorizontal: verticalScale(15),
//     paddingVertical: verticalScale(5),
//     borderBottomLeftRadius: verticalScale(5),
//     borderBottomRightRadius: verticalScale(5),
//     borderTopLeftRadius: verticalScale(5),
//   },
//   timerText: {
//     fontSize: verticalScale(9),
//     color: colors.lightGray,
//     alignSelf: "flex-end",
//     marginTop: verticalScale(10),
//   },
//   timerText1: {
//     fontSize: verticalScale(10),
//     color: colors.lightGray,
//     alignSelf: "flex-start",
//     marginTop: verticalScale(10),
//   },
//   message2: {
//     backgroundColor:colors.inputBorder,
//     alignSelf: "flex-start",
//     paddingHorizontal: verticalScale(15),
//     paddingVertical: verticalScale(5),
//     borderBottomLeftRadius: verticalScale(5),
//     borderBottomRightRadius: verticalScale(5),
//     borderTopLeftRadius: verticalScale(5),

//   },
//   messageText: {
//     fontSize: verticalScale(10),
//     color: colors.lightBlack,
//   },
// });

const styles = StyleSheet.create({
  chat: {
    padding: 15,
    height: '75%',
  },

  message: {
    backgroundColor: '#F3F3F3',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageSpoil: {
    height: 30,
    width: 30,
    alignSelf: 'flex-end',
    top: -30,
    right: -15,
  },
  message1: {
    backgroundColor: colors.white,
    alignSelf: 'flex-end',
    paddingHorizontal: verticalScale(15),
    paddingVertical: verticalScale(10),
    borderBottomLeftRadius: verticalScale(10),
    borderBottomRightRadius: verticalScale(10),
    borderTopLeftRadius: verticalScale(10),
    marginTop: verticalScale(5),
    shadowColor:
    Platform.OS == 'ios'
      ? colors.inputGray
      : colors.black,
  shadowRadius: 5,
  elevation: 5,
  shadowOpacity: 0.5,

  shadowOffset: {width: 1, height: 1},
  },
  timerText: {
    fontSize: verticalScale(10),
    color: colors.black,
    alignSelf: 'flex-end',
    fontWeight: '500',
    marginTop: verticalScale(10),
  },
  timerText1: {
    fontSize: verticalScale(10),
    color: colors.black,
    alignSelf: 'flex-start',
    marginTop: verticalScale(10),
    fontFamily: InterFont.regular,
    fontWeight: '500',
  },
  message2: {
    backgroundColor: colors.primary,
    alignSelf: 'flex-start',
    paddingHorizontal: verticalScale(15),
    paddingVertical: verticalScale(10),
    borderTopRightRadius: verticalScale(10),
    borderBottomLeftRadius: verticalScale(10),
    borderBottomRightRadius: verticalScale(10),
    marginTop: verticalScale(5),
    shadowColor:
    Platform.OS == 'ios'
      ? colors.inputGray
      : colors.black,
  shadowRadius: 5,
  elevation: 5,
  shadowOpacity: 0.5,

  shadowOffset: {width: 1, height: 1},
    
  },
  messageText: {
    fontSize: verticalScale(10),
    color: colors.black,
    fontFamily: InterFont.regular,
    fontWeight: '600',
  },
  messageText2: {
    fontSize: verticalScale(10),
    color: colors.white,
    fontFamily: InterFont.regular,
    fontWeight: '600',
  },
});
