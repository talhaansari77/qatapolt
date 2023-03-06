import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Spacer} from '../../../components/Spacer';
import {colors} from '../../../utils/Colors';
import {icons} from '../../../assets/icons';
import {images} from '../../../assets/images';
import CustomText from '../../../components/CustomText';
import {InterFont} from '../../../utils/Fonts';

const QatalPoltNews = () => {
  const news = [
    {
      id: 1,
      heading: 'Muhmmad Rizwan Another Century',
      image: images.rizwan,
      textInside: true,
    },
    {
      id: 2,
      heading: 'Erling Haaland becomes 14th player to be given perfect 10 ',
      image: images.mabpa,
      textInside: false,
    },
    {
      id: 3,
      heading: 'Babar Azam Man of the Match',
      image: images.babarAzam,
      textInside: true,
    },
    {
      id: 4,
      heading: 'Muhmmad Rizwan Another Century and  noi  ldnadn lkac ,maljksbncas ,c',
      image: '',
      textInside: true,
    },
  ];

  const Header = () => (
    <View style={styles.header}>
      {/* <CustomText label={''}/> */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
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

  return (
    <View style={styles.container}>
      <Spacer height={40} />
      <Header />
      <Spacer height={10} />
      <ScrollView>
        {news.map((item, index) => (
          <View>
            {item.image && item.textInside ? (
              <View key={index} style={{padding: 20}}>
                <View>
                  <Image
                    source={item.image}
                    style={{
                      height: item.textInside ? 500 : 350,
                      width: '100%',
                      resizeMode: 'cover',
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                    }}
                  />
                  {/* {item.textInside ? ( */}
                  <View
                    style={{
                      position: 'absolute',
                      //   height:"100%",
                      //   width:"100%",
                      paddingHorizontal: 10,
                      display: 'flex',
                      bottom: 20,
                      justifyContent: 'flex-end',
                      alignItems: 'flex-start',
                      zIndex: 10,
                      //   alignSelf: 'flex-end',
                      //   backgroundColor:"red"
                    }}>
                    <CustomText
                      label={item.heading}
                      color={colors.white}
                      fontSize={25}
                      fontFamily={InterFont.bold}
                    />
                  </View>
                  {/* ) : console.log("Simple Text With no Image Will Come in")} */}

                  <Image
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      height: 100,
                      width: '100%',
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                    }}
                    source={images.blackWhite}
                  />
                </View>
              </View>
            ) : null}

            {item.image && !item.textInside ? (
              <View
                style={{
                  width: '90%',
                  height: 'auto',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  padding: 7,
                  backgroundColor: colors.white,
                  shadowColor:
                    Platform.OS == 'ios' ? colors.inputGray : colors.black,
                  shadowRadius: 5,
                  elevation: 5,
                  shadowOpacity: 0.5,
                  shadowOffset: {width: 1, height: 1},

                  borderRadius: 30,
                }}>
                <Image
                  source={item.image}
                  style={{
                    height: 250,
                    width: '100%',
                    resizeMode: 'cover',
                    borderRadius: 30,
                    shadowColor:
                      Platform.OS == 'ios' ? colors.inputGray : colors.black,
                    shadowRadius: 5,
                    elevation: 5,
                    shadowOpacity: 0.5,
                    shadowOffset: {width: 1, height: 1},
                  }}
                />
                {/* <Spacer height={10} /> */}
                <View style={{padding: 12}}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <Image
                        source={icons.flame}
                        style={{height: 12, width: 12, alignSelf: 'center'}}
                      />
                      <CustomText label="Trending" color={colors.inputGray} />
                    </View>

                    <View>
                      <CustomText label="2 Days ago" color={colors.inputGray} />
                    </View>
                  </View>

                  <Spacer height={10} />
                  <View>
                    <CustomText
                      label={item.heading}
                      fontSize={14}
                      // fontFamily={InterFont.light}
                    />
                  </View>
                </View>

                <Spacer height={15} />
              </View>
            ) : null}

            {/* Item With No Image */}

            <View style={{paddingHorizontal: 20}}>
              {!item.image ? (
                <View
                  style={{
                    width: '100%',
                    // height: 200,
                    backgroundColor: colors.white,
                    borderRadius: 20,
                    paddingBottom:25,
                    shadowColor:
                      Platform.OS == 'ios' ? colors.inputGray : colors.black,
                    shadowRadius: 5,
                    elevation: 5,
                    shadowOpacity: 0.5,
                    shadowOffset: {width: 1, height: 1},
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      //   justifyContent:"space-evenly",
                      //   width:"70%",
                      padding: 15,
                    }}>
                    <View>
                      <CustomText
                        label="Tue"
                        fontSize={11}
                        fontFamily={InterFont.medium}
                        color={colors.inputGray}
                      />
                      <CustomText
                        label="18"
                        fontSize={11}
                        fontFamily={InterFont.medium}
                        color={colors.darkBlue}
                      />
                      <CustomText
                        label="Nov"
                        fontSize={11}
                        fontFamily={InterFont.medium}
                        color={colors.lightGreen}
                      />
                    </View>
                    <Spacer width={10} />
                    <View
                      style={{
                        height: 55,
                        width: 0.5,
                        backgroundColor: colors.inputGray,
                      }}
                    />
                    <Spacer width={10} />
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '85%',
                      }}>
                      <View style={{ display:"flex", flexDirection:"row", alignItems:"center", alignSelf: 'center'}}>
                        <CustomText
                          label="Qata Polt News"
                          textAlign={'center'}
                          fontSize={14}
                          fontFamily={InterFont.semiBold}
                        />
                        <Spacer width={5} />
                        <Image source={icons.trophy} style={{height:14, width:14}} />
                      </View>
                      <Spacer width={5} />
                      <View style={{alignSelf: 'center'}}>
                        <Image
                          source={images.logo2}
                          resizeMode="cover"
                          style={{height: 40, width: 40, borderRadius: 50}}
                        />
                      </View>
                    </View>
                    
                  </View>
                  <View style={{paddingHorizontal:15}} >
                    <CustomText
                      label={item.heading}
                      fontSize={13}
                      // fontFamily={InterFont.light}
                    />
                  </View>
                </View>
              ) : null}
              {/* <Spacer height={30} /> */}
            </View>
          </View>
        ))}
      <Spacer height={50} />
      </ScrollView>
    </View>
  );
};

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
});

export default QatalPoltNews;

{
  /* backgroundColor: "linear-gradient(177.06deg, rgba(30, 30, 30, 0.03) 19.04%, rgba(30, 30, 30, 0.81) 96.74%)", */
}

// Text Not Inside

// {item.textInside ? null : (
//     <View
//       style={{
//         width: '100%',
//         height: 'auto',
//         padding: 20,
//         backgroundColor: colors.white,
//         shadowColor:
//           Platform.OS == 'ios' ? colors.inputGray : colors.black,
//         shadowRadius: 5,
//         elevation: 5,
//         shadowOpacity: 0.5,

//         shadowOffset: {width: 1, height: 1},

//         borderBottomLeftRadius: 10,
//         borderBottomRightRadius: 10,
//       }}>
//       <CustomText label={item.heading} fontSize={12} fontFamily={InterFont.bold} />
//     </View>
//   )}
