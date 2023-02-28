import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import commonStyles from '../../../utils/CommonStyles';
import {Spacer} from '../../../components/Spacer';
import SignupTop from '../Signup/molecules/SignupTop';
import {styles} from '../Signup/styles';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import CustomTextInput from '../../../components/CustomTextInput';
import SignupBottom from '../Signup/molecules/SignupBottom';
import CustomBottomSheet from '../../../components/CustomBottomSheet';
import {scale, verticalScale} from 'react-native-size-matters';
import {icons} from '../../../assets/icons';
import {images} from '../../../assets/images';
const ProfileDetail = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState('');
  const [signupValues, setSignupValues] = useState({
    accountType: '',
  });
  const SignupData = [
    {id: 1, withLabel: 'Full Name', placeholder: 'i.e.john Doe'},
    {id: 2, withLabel: 'Username', placeholder: 'i.e.@john23'},
    {id: 3, withLabel: 'Email', placeholder: 'i.e.johnoe@mail.com'},
    {
      id: 4,
      withLabel: 'Password',
      placeholder: '********',
      secureTextEntry: showPassword,
      onRightPress: () => {
        setShowPassword(!showPassword);
      },
      iconHeight: verticalScale(15),
      iconWidth: scale(15),
      rigthIcon: showPassword ? icons.eye : icons.hidden,
    },
    {
      id: 5,
      withLabel: 'Confirm password',
      placeholder: '********',
      secureTextEntry: showConfirmPass,
      iconWidth: scale(15),

      onRightPress: () => {
        setShowConfirmPass(!showConfirmPass);
      },
      iconHeight: verticalScale(15),
      rigthIcon: showConfirmPass ? icons.eye : icons.hidden,
    },
    {
      id: 6,
      withLabel: 'Player Account',
      placeholder: 'Select Type',
      iconHeight: verticalScale(11),
      iconWidth: scale(11),
      value: signupValues.accountType,
      editable: false,
      rigthIcon: icons.dropdown,
      onRightPress: () => {
        setModalVisible(true);
      },
    },
  ];

  const accountType = [
    'Agent',
    'Athlete',
    'Club',
    'Coach',
    'General',
    'Manager',
    'Scout',
  ];

  const onSetValue = item => {
    setSignupValues({...signupValues, accountType: item});
    setModalVisible(false);
  };
  return (
    <>
      <View style={commonStyles.main}>
        <ImageBackground style={commonStyles.img} source={images.background}>
          <Spacer height={20} />
          <SignupTop navigation={navigation} />
          <Spacer height={40} />

          <View style={{flex: 1}}>
            <ImageBackground style={commonStyles.img} source={images.rectangle}>
              <Spacer height={50} />
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{flex: 1, paddingHorizontal: 20}}>
                <Spacer height={20} />
                {SignupData.map(item => {
                  return (
                    <>
                      <CustomTextInput
                        inputStyle={{
                          shadowColor:
                            Platform.OS == 'ios'
                              ? colors.inputGray
                              : colors.black,
                          shadowRadius: 5,
                          elevation: 5,
                          shadowOpacity: 0.5,

                          shadowOffset: {width: 1, height: 1},
                        }}
                        withLabel={item.withLabel}
                        value={item.value}
                        editable={item.editable}
                        iconWidth={item.iconWidth}
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
                <Spacer height={5} />
                {/* <SignupBody/> */}
                <SignupBottom navigation={navigation} />
              </ScrollView>
            </ImageBackground>
          </View>
        </ImageBackground>
      </View>
      <CustomBottomSheet
        modalVisible={modalVisible}
        list={accountType}
        onSetValue={onSetValue}
        setValue={setValue}
        onCloseModal={() => setModalVisible(false)}
      />
    </>
  );
};

export default ProfileDetail;
