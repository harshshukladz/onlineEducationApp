import { StyleSheet, Text, View,FlatList ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import Courses from '../Api/Course'

const Course2 = ({navigation}) => {
  const courseCard=({item})=>{
    return(
<View style={styles.mainContainer}>
<View style={styles.CourseContainer}>
  <View>
    <Image
      style={styles.cardImage}
      source={item.image}
      resizeMode='contain'
    />
  </View>
  <Text style={styles.cardTitle}>{item.title}</Text>
  <Text style={styles.carddes}>{item.description}</Text>
  <View style={styles.buttonContainer}>
  <TouchableOpacity style={styles.buttonStyle} onPress={()=>{navigation.navigate()}}>
    <Text style={styles.buttonText}>Course Details</Text>
  </TouchableOpacity>
</View>
</View>
</View>
    )
  }
  return (
    <FlatList
    keyExtractor={(item)=>item.id}
      data={Courses}
      renderItem={courseCard}
    />

    
    
  )
}
const styles = StyleSheet.create({
  cardImage:{
    width:"100%",
    height:"undefined",
    aspectRatio:1,
  },
  mainContainer:{
    paddingHorizontal:20,
  },
  CourseContainer:{
    padding:30,
    backgroundColor:"white",
    textAlign:"center",
    borderRadius:50,
    shadowColor:"grey",
    shadowOffset:{width:0,heigth:0},
    shadowOpacity:0.5,
    shadowRadius:8,
    elevation:8,
    marginVertical:30,
  },
  cardTitle:{
fontSize:22,
textTransform:"uppercase",
color:"#344055",
paddingtop:15,
paddingBottom:15,
textAlign:"center"
  },
  carddes:{
    textAlign:"left",
    paddingBottom:15,
    lineHeight:20,
    fontSize:16,
    color:"#7d7d7d",
  },
  buttonContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
  },
  buttonStyle:{
    backgroundColor:"#809fff",
    borderBottomRightRadius:10,
    borderTopLeftRadius:10,
    paddingVertical:10,
    paddingHorizontal:18,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  buttonText:{
    fontSize:20,
    color:"#eee",
  }
})

export default Course2

