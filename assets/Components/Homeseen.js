import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import {freeGames, paidGames, sliderData} from '../../model/data';
import BannerSidar from './BannerSidar';
import {windowWidth} from '../../utils/Dimensions';
import CustomButton from './CustomButton';
import ListItem from './ListItem';
const Homeseen = ({navigation}) => {
  const [gamesTab, setGamesTab] = useState(1);
  const renderBanner = ({item, index}) => {
    return <BannerSidar data={item} />;
  };

  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#132134'}}>
      <ScrollView style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#37B84A'}}>
            Hello parijat
          </Text>
          <TouchableOpacity onPress={()=>navigation.openDrawer()}>
          <ImageBackground
            source={require('../Img/user-profile.jpg')}
            style={{width: 35, height: 35}}
            imageStyle={{borderRadius: 25}}
          />
          </TouchableOpacity>
        </View>
        <View style={{borderColor: '#B00A28', borderWidth: 1, borderRadius: 8}}>
          <TextInput style={{color: '#4148B5'}} placeholder="Search...." />
        </View>
        <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#7A8FAF'}}>
            Upcoming Games
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#12AD2B'}}>See all</Text>
          </TouchableOpacity>
        </View>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />
        <View style={{marginVertical: 20}}>
          <CustomButton
            selectionMode={1}
            option1="Free to play"
            option2="Paid games"
            onSelectSwitch={onSelectSwitch}
          />
        </View>
        <View>
          {gamesTab == 1 &&
            freeGames.map(item => (
              <ListItem
                key={item.id}
                photo={item.poster}
                title={item.title}
                subtitle={item.subtitle}
                isFree={item.isFree}
                onPress={()=>navigation.navigate('Game Details',{title:item.title,id:item.id ,poster:item.poster})}
                
              />
            ))}
          {gamesTab == 2 && 
            paidGames.map(item => (
              <ListItem
                key={item.id}
                photo={item.poster}
                title={item.title}
                subtitle={item.subtitle}
                isFree={item.isFree}
                price={item.price}
                
              />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homeseen;
