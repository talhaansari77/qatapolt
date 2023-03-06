import {View, Text, ImageBackground, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {images} from '../../assets/images';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {scale, verticalScale} from 'react-native-size-matters';
import ProfilePhoto from '../../components/ProfilePhoto';
import CustomText from '../../components/CustomText';
import {Spacer} from '../../components/Spacer';
import { InterFont } from '../../utils/Fonts';

const CustomDrawer = ({...props}) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        // contentContainerStyle={{backgroundColor: '#FD703B'}}
      >
        <ImageBackground
          source={images.background}
          style={{
            padding: 20,
            height: verticalScale(150),
            alignItems: 'center',
          }}>
          <Spacer height={10} />
          <ProfilePhoto  image width={scale(90)} height={scale(90)} />
          <Text
            style={{
              top: '75%',
              // left: -15,
              fontSize: verticalScale(11),
              fontWeight: '700',
              fontFamily:InterFont.regular,
              alignSelf: 'center',
              color: '#f3f3f3',
            }}>
            {'umairabbas719@gmail.com'}
          </Text>
          {/* <CustomText label="umairabbas719@gmail.com"/> */}
          {/* <View style={{padding: 30}}>
            <Image
              source={images.appIcon}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                marginBottom: 10,
                // marginLeft: -10,
                top: 40,
                left: -20,
              }}
            />
            <Text
              style={{
                top: 40,
                left: -15,
                fontSize: 20,
                fontWeight: '700',
                color: '#f3f3f3',
              }}>
              {'UserName'}
            </Text>
            <Text
              style={{
                color: '#f3f3f3',
                justifyContent: 'center',
                top: 40,
                left: -15,
                fontSize:16
              }}>
              {"Email"}
            </Text>
          </View> */}
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      {/* <View style={{marginBottom: 20}}>
        {status ? (
          <Button
            text="Logout"
            size={20}
            color={appColors.secondary}
            onPress={() => {
              CustomConfirmAlert(
                'Important',
                'Are Your Sure You Want To Logout',
                () => {
                  dispatch({
                    type: 'Logout',
                  });
                },
              );
              // console.log(res);
            }}
          />
        ) : (
          <></>
        )}
      </View> */}
    </View>
  );
};

export default CustomDrawer;
const CustomConfirmAlert = (title, msg, onConfirm) => {
  alert(title, msg, [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel'),
      style: 'cancel',
    },
    {
      text: 'OK',
      onPress: () => {
        onConfirm();
      },
    },
  ]);
};
