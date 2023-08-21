import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useScrollViewOffset} from 'react-native-reanimated';
import axios, {Axios} from 'axios';
import {request} from '@giphy/js-fetch-api';
import RNFetchBlob from 'rn-fetch-blob';

const FavoriteScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoding] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [fullData, setFullData] = useState([]);
  const [index, setIndex] = useState(0);

  const Api_url = 'https://g.tenor.com/v1/search?q=';
  const Api_key = 'LIVDSRZULELA';

  useEffect(() => {
    setIsLoding(true);
    fetchData();
  }, []);

  const fetchData = url => {
    axios
      .get(`${Api_url}${searchQuery}&key=${Api_key}&limit=60`)
      .then(res => {
        setData(res.data.results);
        setIsLoding(false);
      })
      .catch(err => {
        setError(err);
      });
  };

  const handleSearch = query => {
    
    setSearchQuery(query);
    
    fetchData();
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color="#5500dc" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          Error in fetching data ... Please check your internet connect:
        </Text>
      </View>
    );
  }

  const downloadHandeler = (url) => {
    //  console.warn(url)
    const {config, fs} = RNFetchBlob;
    const date = new Date();
    const fileDir = fs.dirs.DownloadDir;
    config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path:
          fileDir +
          '/download' +
          Math.floor(date.getDate() + date.getSeconds() / 2) +
          '.gif',
        description: 'file download',
      },
    })
      .fetch('GET', url, {
        //some headers
      })
      .then(res => {
        console.log('the file saved to ', res.path());
      });
  };



  return (
    <SafeAreaView style={{backgroundColor: '#0C956B', flex: 1}}>
      <SafeAreaView style={{flex: 1, marginHorizontal: 20}}>
        <View style={{paddingTop: 20}}>
          <TextInput
            placeholder="Search"
            autoCapitalize="none"
            value={searchQuery}
            onChangeText={query => handleSearch(query)}
            autoCorrect={false}
            clearButtonMode="always"
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderColor: '#ccc',
              borderWidth: 1,
              borderRadius: 8,
            }}
          />
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10,
                marginTop: 10,
              }}>
              <Image
                style={{width: 50, height: 50, borderRadius: 50}}
                source={{uri: item.media[0].nanogif.url}}
              />
              <View>
                <Text
                  style={{
                    fontSize: 17,
                    marginLeft: 10,
                    color: '#fff',
                    fontWeight: '600',
                  }}>
                  {item.content_description}

                  <TouchableOpacity
                    onPress={() => downloadHandeler(item.media[0].nanogif.url)}
                    style={{paddingHorizontal: 30}}>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('../Img/download.jpg')}
                    />
                  </TouchableOpacity>
                </Text>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default FavoriteScreen;
