import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Actionsheet, useDisclose} from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from 'react-native-popup-menu';

const width = Dimensions.get('window').width;

export default function DocumentPick() {
  let {content, btnStyle} = styles;
  const [fileList, setFileList] = useState([]);
  const {isOpen, onOpen, onClose} = useDisclose();




  //Delete Image funcation

const DeleteImage=(index)=>{
const DeleteImage=[...fileList]
DeleteImage.splice(index,1)
setFileList(DeleteImage)

}


  const renderItem = ({item, index}) => {
    return (
      <View style={styles.itemViewImage}>
        <MenuProvider>
          <Menu>
            <MenuTrigger>
          
             <View style={{flexDirection:'row-reverse'}}>
             <Image source={item.url} style={styles.itemImage} />
             </View>
             
            </MenuTrigger>
            <MenuOptions>
              <MenuOption  onSelect={()=>DeleteImage(index)} style={{ flex:1,backgroundColor:'#AEB6BF',alignItems:'center',justifyContent:'center',flexDirection: 'row'}}>
                <Text style={{color:'black'}}>Remove</Text>
                <Image
                  source={require('../Img/delete.jpg')}
                  style={{width: 25, height: 25, marginLeft: 10}}
                />
              </MenuOption>
            </MenuOptions>
          </Menu>
        </MenuProvider>
      </View>
    );
  };

  const onSelectedImage = image => {
    let newDataImg = fileList;
    const source = {uri: image.path};
    let item = {
      id: Date.now(),
      url: source,
      content: image.data,
    };
    newDataImg.push(item);
    setFileList(newDataImg);
  };

  const takePhoto = () => {
    ImagePicker.openCamera({
      width: 600,
      height: 700,
      cropping: true,
    }).then(image => {
      onSelectedImage(image);
      console.log(image);
    });
  };

  const ChoosePhoto = image => {
    ImagePicker.openPicker({
      width: 600,
      height: 700,
      cropping: true,
    }).then(image => {
      onSelectedImage(image);
      console.log(image);
    });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#34495E'}}>
      <View style={content}>
        <Text style={{fontSize: 30, color: '#fff'}}>Gallery</Text>
      
        <FlatList
          data={fileList}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        
          keyExtractor={(item, index) => index.toString()}
          style={{ margin:10, }}
        />
       
        <Button style={btnStyle} onPress={onOpen}>
          <Text style={{fontSize: 20, color: '#fff'}}> Add Image</Text>
        </Button>

        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content style={{borderRadius: 8}}>
            <Actionsheet.Item onPress={() => takePhoto()}>
              Take Photo
            </Actionsheet.Item>
            <Actionsheet.Item onPress={() => ChoosePhoto()}>
              Choose Photo Library
            </Actionsheet.Item>
            <Actionsheet.Item>Cancel</Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    // paddingLeft: 10,
    // paddingRight: 10,
    marginBottom: 30,
    backgroundColor: '#34495E',
  },
  btnStyle: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    width: width - 60,
    alignItems: 'center',
  },
  itemImage: {
    backgroundColor: '#2F455C',
    height: 200,
    width:Dimensions.get('window').width/2-20 ,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  itemViewImage: {
    alignItems: 'center',
    borderRadius: 8,
    margin: 5,
  },
});
