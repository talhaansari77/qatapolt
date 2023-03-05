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
import {images} from '../../../assets/images';
import {Spacer} from '../../../components/Spacer';
import SignupTop from './molecules/SignupTop';
import {scale, verticalScale} from 'react-native-size-matters';
import {styles} from './styles';
import SignupBottom from './molecules/SignupBottom';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import CustomTextInput from '../../../components/CustomTextInput';
import {icons} from '../../../assets/icons';
import CustomBottomSheet from '../../../components/CustomBottomSheet';

const Signup = ({navigation}) => {
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
          <Spacer height={40} />
          <SignupTop navigation={navigation} />
          <Spacer height={10} />

          <View style={styles.bodyView}>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={{flex: 1, paddingHorizontal: 20}}>
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
                  <View style={{ paddingHorizontal: Platform.OS == 'ios' ? 0 : 5}} >
                    <CustomTextInput
                      inputStyle={{
                        shadowColor:
                          Platform.OS == 'ios'
                            ? colors.inputGray
                            : colors.black,
                        shadowRadius: 5,
                        elevation: 5,
                        shadowOpacity: 0.5,
                        // inputMarginTop:-20,
                        shadowOffset: {width: 1, height: 1},
                      }}
                      inputMarginTop={Platform.OS == "ios" ? 5 : -7}
                      withLabel={item.withLabel}
                      value={item.value}
                      editable={item.editable}
                      iconWidth={item.iconWidth}
                      iconHeight={item.iconHeight}
                      rigthIcon={item.rigthIcon}
                      onRightPress={item.onRightPress}
                      secureTextEntry={item.secureTextEntry}
                      placeholder={item.placeholder}
                      // width={"99%"}
                    />
                    <Spacer height={15} />
                  </View>
                );
              })}
              <Spacer height={5}/>
              {/* <SignupBody/> */}
              <SignupBottom navigation={navigation}/>

            </ScrollView>
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

export default Signup;
