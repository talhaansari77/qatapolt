import {StyleSheet, Text, View, Image, ImageBackground, Platform} from 'react-native';
import React from 'react';
import commonStyles, {PH10} from '../../../utils/CommonStyles';
import {images} from '../../../assets/images';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Spacer} from '../../../components/Spacer';
import BodyItem from './Molecules/LoginBodyItem';
import GradientButton from '../../../components/GradientButton';
import CustomButton from '../../../components/CustomButton';
import {colors} from '../../../utils/Colors';
import {styles} from './styles';
import LoginBodyItem from './Molecules/LoginBodyItem';
import AuthOption from './Molecules/AuthOption';
import LoginBottomContainer from './Molecules/LoginBottomContainer';

const LoginScreen = ({navigation}) => {
  return (
    <View style={commonStyles.main}>
      <ImageBackground style={commonStyles.img} source={images.background1}>
        <Spacer height={Platform.OS=="ios"? 40:10} />
        <View style={styles.imgContainer}>
          <Image
            resizeMode="center"
            style={commonStyles.img}
            source={images.appIcon}
          />
        </View>
        <View style={{height: '4%'}} />
        <LoginBodyItem />
        <Spacer height={20} />
        <View style={{paddingHorizontal: scale(15)}}>
          <GradientButton title="Sign In" />
          <Spacer height={20} />
          <AuthOption />
          <Spacer height={30} />

          <LoginBottomContainer navigation={navigation}/>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
