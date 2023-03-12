import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  moderateScale,
  scale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters';
import {colors} from '../../../../utils/Colors';
import commonStyles from '../../../../utils/CommonStyles';
import {icons} from '../../../../assets/icons';
import {Spacer} from '../../../../components/Spacer';
import {ChatBody} from '../../../../components/ChatBody';
import {images} from '../../../../assets/images';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SendMessage from '../../../../components/SendMessage';
import ChatHeader from '../../../../components/ChatHeader';

const ChatDetail = ({navigation}) => {
  const [textMessage, setTextMessage] = useState([]);

  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
          <ChatHeader navigation={navigation}/>
        {/* <Spacer height={40} /> */}
        <ChatBody />
        <SendMessage/>
      
      </SafeAreaView>
    </>
  );
};

export default ChatDetail;

const styles = ScaledSheet.create({
  textInputContainer: {
    backgroundColor: colors.primary,
    borderTopLeftRadius: '20@s',
    borderTopRightRadius: '20@s',
    minHeight: verticalScale(60),
    maxHeight: verticalScale(100),
    // paddingTop: verticalScale(20),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: verticalScale(5),
  },
  inPutContainer: {
    backgroundColor: colors.white,
    // height: verticalScale(35),
    fontSize: verticalScale(14),
    width: '75%',
    color: colors.black,
    fontWeight: '600',
    paddingHorizontal: verticalScale(10),
  },

  sendContainer: {
    width: '20@s',
    height: '25@vs',
  },
  sendVideo: {
    width: 30,
    height: 30,
    backgroundColor: colors.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    width: '75%',
    margin: 10,
    minHeight: verticalScale(38),
    maxHeight: verticalScale(100),
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: '#BFBFBF',
    shadowColor: Platform.OS == 'ios' ? colors.inputGray : colors.black,
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 0.5,

    shadowOffset: {width: 1, height: 1},
  },
  send: {
    width: 37,
    height: 37,
    borderRadius: 30,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    paddingHorizontal: 20,
    fontSize: verticalScale(12),
    flex: 1,
  },
});
