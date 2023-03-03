import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/Colors';
import CustomText from '../../../components/CustomText';
import {icons} from '../../../assets/icons';
import {Spacer} from '../../../components/Spacer';
import {Avatar, Divider, Image, ListItem} from 'react-native-elements';
import TopTabs from '../../../components/TopTabs';
import commonStyles, {PH10, PH20} from '../../../utils/CommonStyles';
import {images} from '../../../assets/images';
import GradientButton from '../../../components/GradientButton';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const PostScreen = ({navigation}) => {
  const Header = () => (
    <PH10>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icons.back} style={{height: 27, width: 27}} />
        </TouchableOpacity>
        <Spacer width={10} />
        <CustomText
          label={'Create Post'}
          fontSize={18}
          fontFamily={'inter-semibold'}
        />
      </View>
    </PH10>
  );

  const PostHeader = () => (
    <ListItem>
      <Avatar rounded source={icons.profile} size={50} />
      <ListItem.Content>
        <ListItem.Title style={{fontWeight: 'bold'}}>
          {'Rodney Marks'}
        </ListItem.Title>
        <Spacer height={3} />
        <ListItem.Subtitle
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{color: colors.primary}}>
          {'@danial_89'}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Spacer height={40} />
        <Header />
        <Spacer height={20} />
        <PostHeader />
        <Divider />
        <Spacer height={10} />
        <TextInput
          style={{paddingHorizontal: 20, fontSize: 20}}
          placeholder={'Write your thought here...'}
        />
        <Spacer height={40} />
        <View>
          <View style={{...styles.iconsPosition, top: 20}}>
            <Image source={icons.plusVector} style={{height:16,width:16}} />
          </View>
          <Image
            source={images.postPic}
            containerStyle={{width: '100%', height: 400}}
          />
          <View style={{...styles.iconsPosition, bottom: 20}}>
          <Image source={icons.trashVector} style={{height:16,width:16}} />
          </View>
        </View>
      </View>
      <PH10>
        <GradientButton onPress={() => {}} title="Register" />
      </PH10>
      <Spacer height={30} />
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // paddingHorizontal:20
  },
  header: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postContainer: {
    // aspectRatio: 1,
    width: '100%',
    height: 350,
    // flex: 1,
  },
  postFooterIcon: {
    width: 24,
    height: 26,
  },
  iconsPosition: {
    backgroundColor: colors.black1,
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 99,
    right: 20,
  },
});
