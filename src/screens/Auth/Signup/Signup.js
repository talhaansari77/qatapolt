import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React,{useState} from 'react';
import commonStyles from '../../../utils/CommonStyles';
import {images} from '../../../assets/images';
import {Spacer} from '../../../components/Spacer';
import SignupTop from './molecules/SignupTop';
import {scale, verticalScale} from 'react-native-size-matters';
import {styles} from './styles';
import SignupBody from './molecules/SignupBody';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import CustomTextInput from '../../../components/CustomTextInput';
import { icons } from '../../../assets/icons';

const Signup = ({navigation}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false)
    const SignupData = [
    {id: 1, withLabel: 'Full Name', placeholder: 'i.e.john Doe'},
    {id: 2, withLabel: 'Username', placeholder: 'i.e.@john23'},
    {id: 3, withLabel: 'Email', placeholder: 'i.e.johnoe@mail.com'},
    {id: 4, withLabel: 'Password', placeholder: '********', 
    secureTextEntry:showPassword,
    onRightPress:()=>{setShowPassword(!showPassword)},
    iconHeight:verticalScale(15),
    rigthIcon:showPassword ? icons.eye : icons.hidden
},
    {
      id: 5,
      withLabel: 'Confirm password',
      placeholder: '********',
      secureTextEntry:showConfirmPass,
      onRightPress:()=>{setShowConfirmPass(!showConfirmPass)},
      iconHeight:verticalScale(15),
      rigthIcon:showConfirmPass ? icons.eye : icons.hidden
    },
    {id: 6, withLabel: 'Player Account', placeholder: 'Select Type'},
  ];
  return (
    <View style={commonStyles.main}>
      <ImageBackground style={commonStyles.img} source={images.background}>
        <Spacer height={40} />
        <SignupTop navigation={navigation} />
        <Spacer height={10} />

        <View style={styles.bodyView}>
          <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
            <Spacer height={20} />
            <CustomText
              label="Create your account"
              fontSize={12}
              textAlign="center"
              color={colors.black}
            />
            <Spacer height={20} />
            {SignupData.map(item => {
              return (
                <>
                  <CustomTextInput
                    inputStyle={{
                      shadowColor:
                        Platform.OS == 'ios' ? colors.inputGray : colors.black,
                      shadowRadius: 5,
                      elevation: 5,
                      shadowOpacity: 0.5,

                      shadowOffset: {width: 1, height: 1},
                    }}
                    withLabel={item.withLabel}
                    iconHeight={item.iconHeight}
                    rigthIcon={item.rigthIcon}
                    onRightPress={item.onRightPress}
                    secureTextEntry={item.secureTextEntry}
                    placeholder={item.placeholder}
                  />
                                    <Spacer height={15} />

                </>
              );
            })}
            {/* <SignupBody/> */}
          </ScrollView>
        </View>

        {/* <View style={{height: '4%'}} />
      <LoginBodyItem />
      <Spacer height={20} />
      <View style={{paddingHorizontal: scale(15)}}>
        <GradientButton title="Sign In" />
        <Spacer height={20} />
        <AuthOption />
        <Spacer height={30} />

        <LoginBottomContainer/>
      </View> */}
      </ImageBackground>
    </View>
  );
};

export default Signup;
