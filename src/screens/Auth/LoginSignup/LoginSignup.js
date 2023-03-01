import {ImageBackground, StyleSheet, Text, View, Image, Platform} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import commonStyles from '../../../utils/CommonStyles';
import {images} from '../../../assets/images';
import {scale, verticalScale} from 'react-native-size-matters';
import {Spacer} from '../../../components/Spacer';
import {styles} from './styles';
import BodyItem from './molecules/BodyItem';
import GradientButton from '../../../components/GradientButton';
import CustomButton from '../../../components/CustomButton';
import {colors} from '../../../utils/Colors';

const LoginSignup = ({navigation}) => {
  return (
    <View style={commonStyles.main}>
      <ImageBackground style={commonStyles.img} source={images.background}>
      <Spacer height={Platform.OS=="ios"? 80:60} />

        <View style={styles.imgContainer}>
          <Image
            resizeMode="center"
            style={commonStyles.img}
            source={images.appIcon}
          />
        </View>
        <View style={{height: '25%'}} />
        <BodyItem />
        <Spacer height={40}/>
        <View style={{paddingHorizontal:scale(10)}}>
        <GradientButton
        onPress={()=>navigation.navigate("Signup")}
         title="Register" />
        <Spacer height={20}/>

        <CustomButton 
        onPress={()=>navigation.navigate("Login")}
        title="Sign In" backgroundColor={colors.white} />

        </View>


      </ImageBackground>
    </View>
  );
};

export default LoginSignup;
