import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
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
import {scale} from 'react-native-size-matters';

const WatchListScreen = () => {
  const Header = () => (
    <View style={styles.header}>
      {/* <CustomText label={''}/> */}
      <CustomText
        label={'WatchList'}
        fontSize={20}
        fontFamily={'inter-semibold'}
      />
      <View style={styles.row}>
        <Image source={icons.search} style={{height: 27, width: 27}} />
        <Spacer width={10} />
        <Image source={icons.bell} style={{height: 27, width: 27}} />
      </View>
    </View>
  );
  const WatchItem = () => (
    <View>
      <PH10>
        <WatchItemHeader />
        <ListItem style={{marginTop: -10}}>
          <ListItem.Content>
            <ListItem.Subtitle style={{width: '90%', fontSize: 16}}>
              {'Sometimes you just have to roll with the punches 🥊🥊🥊'}
            </ListItem.Subtitle>
          </ListItem.Content>
          {/* <Avatar source={icons.starGoldActive} /> */}
        </ListItem>
        <Spacer height={2} />
        <View style={{paddingHorizontal: scale(10), ...commonStyles.row}}>
          <View style={{flex: 1}}>
            <CustomText
              label={'Position'}
              fontSize={10}
              color={colors.lightGray}
              fontFamily={'inter-Regular'}
            />
            <CustomText
              label={'Outside Fighter'}
              fontSize={12}
              fontFamily={'inter-Regular'}
            />
          </View>
          <View style={{flex: 1}}>
            <CustomText
              label={'Position'}
              fontSize={10}
              color={colors.lightGray}
              fontFamily={'inter-Regular'}
            />
            <CustomText
              label={'Outside Fighter'}
              fontSize={12}
              fontFamily={'inter-Regular'}
            />
          </View>
        </View>
        <Spacer height={14} />
      </PH10>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{width: '90%'}}>
        <Spacer width={15} />
        {[1, 2, 3, 4].map(() => (
          <>
            <Spacer width={5} />
            <View style={styles.tag}>
              <CustomText
                label={'uppercut punches'}
                fontSize={10}
                color={colors.inputGray}
                fontFamily={'inter-Regular'}
              />
            </View>
          </>
        ))}
      </ScrollView>
      <Spacer height={10} />
      <Divider width={5} color={colors.divider} />
    </View>
  );
  const WatchItemHeader = () => (
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
          style={{color: colors.green}}>
          {'Boxing'}
        </ListItem.Subtitle>
      </ListItem.Content>
      <Avatar source={icons.starGoldActive} />
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <Spacer height={40} />
      <Header />
      <Spacer height={10} />

      <ScrollView
       showsVerticalScrollIndicator={false}
       >
        <PH20>
          <CustomText
            label={'8 Lists'}
            fontSize={14}
            fontFamily={'inter-Regular'}
          />
        </PH20>
        <Spacer height={10} />
        {[1, 2, 3, 4].map(() => (
          <WatchItem />
        ))}
      </ScrollView>
    </View>
  );
};

export default WatchListScreen;

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
  tag: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: colors.superDuperLightGray,
    borderRadius: 5,
  },
});
