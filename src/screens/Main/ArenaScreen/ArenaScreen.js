import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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

const ArenaScreen = ({navigation}) => {
  const Header = () => (
    <View style={styles.header}>
      {/* <CustomText label={''}/> */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
        onPress={()=>navigation.openDrawer()}
          style={{
            width: 40,
            height: 40,
            backgroundColor: colors.superLightGray,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
            marginRight: 10,
          }}>
          <Image source={icons.drawer} style={{height: 27, width: 27}} />
        </TouchableOpacity>
        <Image source={icons.logoText} style={{height: 27, width: 145}} />
      </View>

      <View style={styles.row}>
        <Image source={icons.search} style={{height: 27, width: 27}} />
        <Spacer width={10} />
        <Image source={icons.bell} style={{height: 27, width: 27}} />
      </View>
    </View>
  );
  const PostHeader = () => (
    <View>
      <ListItem>
        <Avatar rounded source={icons.profile} size={50} />
        <ListItem.Content>
          <ListItem.Title style={{fontWeight: 'bold'}}>
            {'Rodney Marks'}
          </ListItem.Title>
          <Spacer height={3} />
          <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
            {'30 Min . 10:30 AM'}
          </ListItem.Subtitle>
        </ListItem.Content>
        <Avatar source={icons.menu} />
      </ListItem>
      <PH10>
        <CustomText label={'⚽ Teamwork makes the dream work ⚽'} />
      </PH10>
    </View>
  );
  const PostItem = () => (
    <View>
      <PostHeader />
      <Spacer height={10} />
      <View>
        <Image
          source={images.postPic}
          containerStyle={styles.postContainer}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <PH20>
        <View style={{...commonStyles.rowJustify, paddingVertical: 10}}>
          <View style={styles.row}>
            <View style={commonStyles.rowMain}>
              <Image
                source={icons.thumbLike}
                containerStyle={styles.postFooterIcon}
                PlaceholderContent={<ActivityIndicator />}
              />
              <Spacer width={5} />
              <CustomText
                label={'832'}
                fontSize={12}
                color={colors.inputGray}
              />
            </View>
            <Spacer width={10} />
            <View style={commonStyles.rowMain}>
              <Image
                source={icons.comment}
                containerStyle={styles.postFooterIcon}
                PlaceholderContent={<ActivityIndicator />}
              />
              <Spacer width={5} />
              <CustomText label={'20'} fontSize={12} color={colors.inputGray} />
            </View>
          </View>
          <View>
            <Image
              source={icons.share}
              containerStyle={styles.postFooterIcon}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>
        </View>
      </PH20>
      <Divider width={5} color={colors.divider} />
    </View>
  );
  return (
    <View style={styles.container}>
      <Spacer height={40} />
      <Header />
      <Spacer height={10} />
      <Divider />

      <ScrollView
        showsVerticalScrollIndicator={false}
        // stickyHeaderIndices={[0]}
      >
        <View>
          <Spacer height={5} />
          <TopTabs />
          <Spacer height={5} />
          <Divider />
          <Spacer height={5} />
        </View>
        {[1, 2, 3, 4].map(() => (
          <PostItem />
        ))}
      </ScrollView>
    </View>
  );
};

export default ArenaScreen;

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
});
