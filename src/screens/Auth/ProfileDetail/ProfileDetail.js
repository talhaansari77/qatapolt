import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
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
import ProfileTop from './molecules/ProfileTop';
import ProfilePhoto from '../../../components/ProfilePhoto';
import AgeRange from './molecules/AgeRange';
import GanderConatiner from './molecules/GanderConatiner';
import GradientButton from '../../../components/GradientButton';
const ProfileDetail = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState('');
  const [signupId, setSignupId] = useState(-1);
  const [signupValues, setSignupValues] = useState({
    accountType: '',
    country: '',
    city: '',
    selectSport: '',
    position: '',
    skill1: '',
    skill2: '',
    skill3: '',
    bio: '',
    stats: '',
  });

  console.log('SugnupIndex', signupValues.accountType);
  const SignupData = [
    {
      id: 2,
      withLabel: 'Country',
      placeholder: 'Select Country',
      iconHeight: verticalScale(11),
      iconWidth: scale(11),
      value: signupValues.country,
      editable: false,
      rigthIcon: icons.dropdown,
      onRightPress: () => {
        setModalVisible(true);
      },
    },
    {
      id: 3,
      withLabel: 'City/Town',
      placeholder: 'Select City',
      iconHeight: verticalScale(11),
      iconWidth: scale(11),
      value: signupValues.city,
      editable: false,
      rigthIcon: icons.dropdown,
      onRightPress: () => {
        setModalVisible(true);
      },
    },
    {
      id: 4,
      withLabel: 'Select Sport',
      placeholder: 'Sport',
      iconHeight: verticalScale(11),
      iconWidth: scale(11),
      value: signupValues.selectSport,
      editable: false,
      rigthIcon: icons.dropdown,
      onRightPress: () => {
        setModalVisible(true);
      },
    },
    {
      id: 6,
      withLabel: 'Select Position',
      placeholder: 'Position',
      iconHeight: verticalScale(11),
      iconWidth: scale(11),
      value: signupValues.position,
      editable: false,
      rigthIcon: icons.dropdown,
      onRightPress: () => {
        setModalVisible(true);
      },
    },
    {
      id: 7,
      withLabel: 'Skill #1',
      placeholder: 'Choose your skills',
      iconHeight: verticalScale(11),
      iconWidth: scale(11),
      value: signupValues.skill1,
      editable: false,
      rigthIcon: icons.dropdown,
      onRightPress: () => {
        setModalVisible(true);
      },
    },
    {
      id: 8,
      withLabel: 'Skill #2',
      placeholder: 'Choose your skills',
      iconHeight: verticalScale(11),
      iconWidth: scale(11),
      value: signupValues.skill2,
      editable: false,
      rigthIcon: icons.dropdown,
      onRightPress: () => {
        setModalVisible(true);
      },
    },
    {
      id: 9,
      withLabel: 'Skill #3',
      placeholder: 'Choose your skills',
      iconHeight: verticalScale(11),
      iconWidth: scale(11),
      value: signupValues.skill3,
      editable: false,
      rigthIcon: icons.dropdown,
      onRightPress: () => {
        setModalVisible(true);
      },
    },
    {
      id: 10,
      withLabel: 'Bio',
      placeholder: 'Enter bio',
      height: verticalScale(80),
      value: signupValues.bio,

      multiline: true,
      inputHeight: verticalScale(50),
    },
    {
      id: 11,
      withLabel: 'Stats',
      placeholder: 'Enter Stats',
      height: verticalScale(80),
      multiline: true,
      value: signupValues.stats,

      inputHeight: verticalScale(50),
    },
  ];
  const SignupData2 = [
    {
      id: 2,
      withLabel: 'Country',
      placeholder: 'Select Country',
      iconHeight: verticalScale(11),
      iconWidth: scale(11),
      value: signupValues.country,
      editable: false,
      rigthIcon: icons.dropdown,
      onRightPress: () => {
        setModalVisible(true);
      },
    },
    {
      id: 3,
      withLabel: 'City/Town',
      placeholder: 'Select City',
      iconHeight: verticalScale(11),
      iconWidth: scale(11),
      value: signupValues.city,
      editable: false,
      rigthIcon: icons.dropdown,
      onRightPress: () => {
        setModalVisible(true);
      },
    },
    {
      id: 4,
      withLabel: 'Select Sport',
      placeholder: 'Sport',
      iconHeight: verticalScale(11),
      iconWidth: scale(11),
      value: signupValues.selectSport,
      editable: false,
      rigthIcon: icons.dropdown,
      onRightPress: () => {
        setModalVisible(true);
      },
    },
    {
      id: 5,
      withLabel: 'Bio',
      placeholder: 'Enter bio',
      value: signupValues.bio,

      height: verticalScale(80),
      multiline: true,
      inputHeight: verticalScale(50),
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
    'Esports',
  ];
  const EsportsSport = ['Gamer', 'Multi-Genre Gamer'];
  const country = ['Country'];
  const city = ['City'];
  const empty = ['empty'];
  const position1 = ['Other'];
  const position2 = [
    'First Person Shooters (FPS Games)',
    'Role Playing Games (RPG Games)',
    'Adventure',
    'Simulation',
    'Strategy',
    'Sports & Fitness',
    'Fighting',
    'Platformers',
    'Survival & Horror',
    'Stealth',
    'Interactive Movie',
    'Puzzlers & Party Games',
    'Social Deduction',
    'Educational',
    'Augmented Reality',
    'Other',
  ];
  const accountType1 = ['Agent'];
  const sports = [
    'American Football',
    'Athletics',
    'Baseball',
    'Basketball',
    'Boxing',
    'Cricket',
    'Football',
    'Formula One',
    'Golf',
    'Gymnastics',
    'Hockey',
    'Horse Racing',
    'Ice Hockey',
    'MMA',
    'Netball',
    'Rugby',
    'Swimming',
    'Tennis',
    'Volleyball',
    'Other',
    'Multi-Sport',
  ];
  const EsportsSkills = [
    'One Player Games',
    'Multiplayer Games',
    'Quick Thinking',
    'Streaming',
    'Communication',
    'Critical Thinking',
    'Researching',
    'Multitasking',
    'Risk Taking',
    'Teamwork',
    'Leadership',
    'Problem Solving',
    'Strategising',
    'Resilience',
    'Networking with Others',
    'Recognising Patterns',
    'Confidence',
    'Giving Instructions',
    'Receiving Instructions',
    'Creativity',
    'Hand-Eye Coordination',
    'Vision',
    'Spatial Awareness',
    'Patience',
    'Concentration',
    'Conflict Resolution',
    'Other',
  ];
  const skill = ['Other'];

  const onSetValue = item => {
    if (signupId == 1) {
      setSignupValues({...signupValues, accountType: item});
      setModalVisible(false);

      return;
    }
    if (signupId == 2) {
      setSignupValues({...signupValues, country: item});
      setModalVisible(false);

      return;
    }
    if (signupId == 3) {
      setSignupValues({...signupValues, city: item});
      setModalVisible(false);

      return;
    }
    if (signupId == 4) {
      setSignupValues({...signupValues, selectSport: item});
      setModalVisible(false);
      return;
    }
    if (signupId == 5 || signupId == 10) {
      setSignupValues({...signupValues, bio: item});
      setModalVisible(false);
      return;
    }
    if (signupId == 6) {
      setSignupValues({...signupValues, position: item});
      setModalVisible(false);
      return;
    }

    if (signupId == 7) {
      setSignupValues({...signupValues, skill1: item});
      setModalVisible(false);
      return;
    }
    if (signupId == 8) {
      setSignupValues({...signupValues, skill2: item});
      setModalVisible(false);
      return;
    }
    if (signupId == 9) {
      setSignupValues({...signupValues, skill3: item});
      setModalVisible(false);
      return;
    }
    setModalVisible(false);
  };

  const windowHeight = Dimensions.get('screen').height;

  return (
    <>
      <View style={commonStyles.main}>
        <ImageBackground style={commonStyles.img} source={images.background}>
          <Spacer height={Platform.OS == 'ios' ? 20 : 0} />
          <ProfileTop navigation={navigation} />
          <ProfilePhoto />
          {/* <Spacer height={ windowHeight / 13} /> */}
          <View style={{height: '13%'}} />

          {/* <Spacer height={40} /> */}

          <View style={{flex: 1}}>
            <ImageBackground
              style={{width: '100%', height: '100%'}}
              resizeMode={'stretch'}
              source={images.rectangle}>
              <Spacer height={60} />
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{flex: 1, paddingHorizontal: 20}}>
                <Spacer height={20} />
                {/* <AgeRange/> */}
                <CustomTextInput
                  inputStyle={{
                    shadowColor:
                      Platform.OS == 'ios' ? colors.inputGray : colors.black,
                    shadowRadius: 5,
                    elevation: 5,
                    shadowOpacity: 0.5,

                    shadowOffset: {width: 1, height: 1},
                  }}
                  withLabel={'Change Account Type'}
                  value={signupValues.accountType}
                  editable={false}
                  iconWidth={scale(11)}
                  iconHeight={verticalScale(11)}
                  rigthIcon={icons.dropdown}
                  onRightPress={() => {
                    setSignupId(1);
                    setModalVisible(true);
                  }}
                  placeholder={'Select Type'}
                />
                {signupValues.accountType == 'Athlete' ||
                !signupValues.accountType ||
                signupValues.accountType == 'Esports' ? (
                  <View>
                    <Spacer height={15} />
                    <AgeRange />
                    <Spacer height={15} />

                    <GanderConatiner />
                  </View>
                ) : null}

                <Spacer height={15} />

                {signupValues.accountType == 'Athlete' ||
                !signupValues.accountType ||
                signupValues.accountType == 'Esports' ? (
                  <View  >
                    {SignupData.map((item, index) => {
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
                            inputMarginTop={Platform.OS == "ios" ? 5 : -7}
                            withLabel={item.withLabel}
                            value={item.value}
                            editable={item.editable}
                            height={item.height}
                            iconWidth={item.iconWidth}
                            iconHeight={item.iconHeight}
                            rigthIcon={item.rigthIcon}
                            inputHeight={item.inputHeight}
                            multiline={item.multiline}
                            onRightPress={() => {
                              setSignupId(item?.id);
                              setModalVisible(true);
                            }}
                            secureTextEntry={item.secureTextEntry}
                            placeholder={item.placeholder}
                          />
                          <Spacer height={15} />
                        </>
                      );
                    })}
                  </View>
                ) : (
                  <View>
                    {SignupData2.map(item => {
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
                            height={item.height}
                            iconWidth={item.iconWidth}
                            iconHeight={item.iconHeight}
                            rigthIcon={item.rigthIcon}
                            inputHeight={item.inputHeight}
                            multiline={item.multiline}
                            onRightPress={() => {
                              setSignupId(item?.id);
                              setModalVisible(true);
                            }}
                            secureTextEntry={item.secureTextEntry}
                            placeholder={item.placeholder}
                          />
                          <Spacer height={15} />
                        </>
                      );
                    })}
                  </View>
                )}

                <Spacer height={5} />
                {/* CustomDrawer */}
                <GradientButton
        onPress={() => navigation.navigate('MainStack')}
        title="Register"
      />
                      <Spacer height={20} />

                {/* <SignupBottom navigation={navigation} /> */}
              </ScrollView>
            </ImageBackground>
          </View>
        </ImageBackground>
      </View>
      <CustomBottomSheet
        EsportsSport
        modalVisible={modalVisible}
        list={
          signupId === 1
            ? accountType
            : signupId === 2
            ? country
            : signupId == 3
            ? city
            : signupId == 4 && signupValues.accountType == 'Esports'
            ? EsportsSport
            : signupId == 4
            ? sports
            : signupId == 6 && signupValues.accountType == 'Esports'
            ? position2
            : signupId == 6
            ? position1
            : signupId >= 7 && signupValues.accountType == 'Esports'
            ? EsportsSkills
            : signupId >= 7
            ? skill
            : empty
        }
        onSetValue={onSetValue}
        setValue={setValue}
        onCloseModal={() => setModalVisible(false)}
      />
    </>
  );
};

export default ProfileDetail;
