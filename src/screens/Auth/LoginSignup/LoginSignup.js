import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import commonStyles from '../../../utils/CommonStyles';
import {images} from '../../../assets/images';
import {verticalScale} from 'react-native-size-matters';
import {Spacer} from '../../../components/Spacer';
import {styles} from './styles';
import BodyItem from './molecules/BodyItem';

const LoginSignup = () => {
  return (
    <View style={commonStyles.main}>
      <ImageBackground style={commonStyles.img} source={images.background}>
        <Spacer height={80} />
        <View style={styles.imgContainer}>
          <Image
            resizeMode="center"
            style={commonStyles.img}
            source={images.appIcon}
          />
        </View>
        <View style={{height:"25%"}}/>
        <BodyItem/>
      </ImageBackground>
    </View>
  );
};

export default LoginSignup;
