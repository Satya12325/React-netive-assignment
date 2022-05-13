import { StatusBar } from 'expo-status-bar';
import { Image,StyleSheet, Text, View,FlatList } from 'react-native';
import Header from './src/Components/Header';
import {useState} from "react";
import Todos from './src/Components/Todos';

export default function App() {

  const [data, setData] = useState([
    {
      "id": 1,
      "name": "Seven Rocks",
      "type": "Tshirt",
      
      "price":450,
      "image": "https://rukminim1.flixcart.com/image/452/542/kjuby4w0/t-shirt/2/v/a/3xl-t2-seven-rocks-original-imafzbptgchwstcx.jpeg?q=50"
    },
    {
      "id": 2,
      "name": "Surahi",
      "type": "Full-Shirt",
      
      "price": 380,
      "image": "https://rukminim1.flixcart.com/image/309/371/kc0u7bk0/shirt/a/m/i/m-pk19sh09g-surhi-original-imaft8y3wdfshukg.jpeg?q=50"
    },
    {
      "id": 3,
      "name": "Black-dog",
      "type": "Black Casual Shirt",
      
      "price": 540,
      "image": "https://rukminim1.flixcart.com/image/452/542/kh80vww0-0/shirt/x/2/3/l-fo-shrt-499-blk-5th-anfold-original-imaeue3bxqnnfhkx.jpeg?q=50"
    },
    {
      "id": 4,
      "name": "5TH ANFOLD",
      "type": "Shirt-half-size",
      
      "price": 459,
      "image": "https://rukminim1.flixcart.com/image/452/542/k0plpjk0/shirt/z/y/b/5xl-fo-hlf-skyblu-5th-anfold-original-imafkg2mqjavcesz.jpeg?q=50"
    },
    {
      "id": 5,
      "name": "MILDIN",
      "type": "MILDIN-FULL HAND SHIRT",
      
      "price": 800,
      "image": "https://rukminim1.flixcart.com/image/452/542/kt7jv680/shirt/a/z/h/m-men-slim-fit-solid-mandarin-collar-casual-shirt-mildin-original-imag6hxmthavsbkt.jpeg?q=50"
    }
  ])



  return (
    <View style={styles.container}>
      <Header
        title="Hello, world!"
      />
      <View>
        <FlatList
          data={data}
          keyExtractor={item =>item.id}
          renderItem={({item})=>{
            console.log(item)
            return (
              <View style={styles.Product} key={item.id}>
              
              <Image
          source={{
            uri: `${item.image}`,
          }}
          style={{ width: 200, height: 200 }}
        />
        <View>
        <Text style={styles.ProductText}>{item.name}</Text>
        <Text style={styles.ProductText}>{item.price}</Text>
        </View>
        </View>
            )
          }} 
        />
      </View>
      <View>
        <Text></Text>
      </View>
      <Todos/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:10,
    paddingTop: 30
  },
  Product:{
    alignSelf: "center",
   margin: 10,
   backgroundColor: 'gray',
   display: "flex", 
  flexDirection: "row",
  
  },
  ProductText:{
    alignSelf: "center",
  }

});
