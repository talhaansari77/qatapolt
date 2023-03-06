import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View,KeyboardAvoidingView,Image } from 'react-native'
import React from 'react'
import { icons } from '../assets/icons'
import { colors } from '../utils/Colors'
import { moderateScale, ScaledSheet, verticalScale,scale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SendMessage = () => {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: scale(15),
        marginBottom: Platform.OS == 'ios' ? verticalScale(10) : 0,
      }}>
      <TouchableOpacity
        activeOpacity={0.6}
        //   onPress={() => setModalVisible(true)}
        //   style={styles.sendVideo}
      >
        <MaterialIcons
          name="attach-file"
          size={moderateScale(25)}
          color={colors.black}
        />
        {/* <Image
          source={images.plus}
          style={{ width: 20, height: 20, tintColor: colors.white }}
        /> */}
      </TouchableOpacity>
      <View style={styles.footer}>
        <TextInput
          // value={inputMessage}
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder={'Type message'}
          onChangeText={text => setInputMessage(text)}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.send}
        //  onPress={() => SendMsg()}
      >
        <Image
          source={icons.send}
          style={{
            width: 20,
            height: 20,
            tintColor: colors.white,
            marginLeft: 2,
          }}
        />
      </TouchableOpacity>
    </View>
  </KeyboardAvoidingView>
   
  )
}

export default SendMessage

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