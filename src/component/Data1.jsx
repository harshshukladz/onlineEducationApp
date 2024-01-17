import { StyleSheet, Text, View ,FlatList,Image} from 'react-native'
import React, { useEffect,useState } from 'react'

const Data2 = () => {
  const [isLoaded,setIsLoaded]=useState(true)
  const [myData,setMyData]=useState([])
  useEffect(()=>getUserData(),[]);
  const getUserData=async()=>{
    try{
    const response =await fetch("https://thapatechnical.github.io/userapi/users.json")
    const realData=response.json();
    setMyData(realData);
    setIsLoaded(false)
    }catch(error){
      console.log(error)
    }
  };
  
  //render the students card
  const showUserData=({item})=>{
    return(
<View style={styles.card}>
  <View style={styles.imgContainer}>
    <Image
style={styles.imgStyle}
source={{uri:item.image}}
    />
  </View>
  <View>
    <View style={styles.bioDataContainer}>
    <Text style={styles.bioData}>Biodata</Text>
    <Text style={styles.idNumber}>{item.id<10?`#0{item.id}`:`#{item.id}`}</Text>
    <View style={styles.mainContanier}>
      <Text style={styles.myName}>Name:{item.name}</Text>
      <Text style={styles.myName}>Email:{item.email}</Text>
      <Text style={styles.myName}>Mobile:{item.mobile}</Text>
    </View>

    </View>
  </View>
</View>
    )
  }
  return (
    
    <View>
      <Text>List of Students</Text>
      <FlatList
        data={myData}
        renderItem={()=>{showUserData}}
      />
    </View>
  )
}
const styles = StyleSheet.create({
card:{
  width:250,
  height:350,
  backgroundColor:"#fff",
  borderRadius:5,
  margin:20,
}
})

export default Data2

