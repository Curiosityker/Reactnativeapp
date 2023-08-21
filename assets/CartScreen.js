import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const CartScreen = () => {
     const[textInput,setTextInput]=useState('')
  const [todos, setTodos] = useState([]);
  const[index,setIndex]=useState(null)






// FlatList renderItem function

  const ListItems = ({item,index}) => {
    return (
      <View
        style={{
          padding: 20,
          backgroundColor: 'white',
          flexDirection: 'row',
          elevation: 12,
          borderRadius: 25,
          marginVertical: 10,
        }}>
        <View style={{flex:1}}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: '#669'}}>
            {item}
          </Text>
        </View>
        
       
        <TouchableOpacity onPress={()=>upDateItem(index)} style={{padding:5}}>
        <Image
            source={require('./Img/update.jpg')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>EditItem(index)} style={{padding:5}}>
        <Image
            source={require('./Img/edit.jpg')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>DeleteItem(index)} style={{padding:5}}>
        <Image
            source={require('./Img/delete.jpg')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
       
      </View>
    );
  };

// Todo List all Item Delete
 const AllItemDelete=()=>{
  const allDelete =[...todos]
  allDelete.splice(0)
  setTodos(allDelete)
 }








//AddItems todo list

const AddItems=()=>{
  if(textInput.trim() !==''){
   setTodos([...todos,textInput])
   setTextInput('')
  }
}

//Delete Item  todo List

const DeleteItem=(index)=>{
  const DeleteData=[...todos]
  DeleteData.splice(index,1)
  setTodos(DeleteData)
}



//Edit Item todo List

const EditItem=(index)=>{
setTextInput(todos[index]);
 setIndex(index)
}

//Update Item todo List

const upDateItem=(index)=>{
  const newTodo=[...todos]
  newTodo.splice(index,1,textInput)
  setTodos(newTodo)
  setTextInput('')
}





  

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1D6B67'}}>
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 25, color: '#F15406'}}>
          Todo List
        </Text>
        <TouchableOpacity onPress={AllItemDelete}>
          <Image
            source={require('./Img/delete.jpg')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 20, paddingBottom: 100}}
        data={todos}
        renderItem={ListItems}
        keyExtractor={(item, index) => index.toString()}
      />

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          color: 'white',
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            elevation: 40,
            flex: 1,
            height: 50,
            marginVertical: 20,
            marginRight: 20,
            borderRadius: 40,
            paddingHorizontal: 20,
          }}>
          <TextInput 
          placeholder="Add Todo" 
          value={textInput}
          onChangeText={(text)=>setTextInput(text)}
          />
        </View>
        <TouchableOpacity onPress={AddItems}>
          <Image
            source={require('./Img/add.jpg')}
            style={{width: 45, height: 45, borderRadius: 100}}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
