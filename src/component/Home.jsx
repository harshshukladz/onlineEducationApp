import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Menu1 from '../component2/Menu'


const Home1 = () => {
  const description ="Welcome to the world of coding.Learn and Earn with us. We make 'Professionals' we make 'Masters'"
  return (
    <View style={styles.mainContainer}>
     <View style={styles.innerContainer}>
     <View>
     <Image style={styles.img1Style}
      source={require("../../assets/1.jpg")}
      resizeMode='contain'
      />
      </View>
      <Text style={styles.textheader1}> welcome to </Text>
         <Text style={styles.textheader2}> Shukla tutorials</Text>
            <Text style={styles.description}>{description}</Text>
     </View>
     <View style={styles.menuStyle}>
     <View style={styles.lineStyle}></View>
      <Menu1/>
      <View style={[styles.lineStyle,{marginVertical :10}]}></View>
     </View>
    </View>
  )
}

export default Home1

const styles = StyleSheet.create({
  mainContainer:{
    height:"100%",
    display:"flex",
    paddingHorizontal:20,
    backgroundColor:"white",
    justifyContent:"space-between",
    marginTop:50,
    


  },
  innerContainer:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:10,

  },
  img1Style:{
    height:undefined,
    width:"100%",
    aspectRatio:1,
    borderRadius:20,

  },
  textheader1:{
    fontSize:30,
    color:"#344055",
    textTransform:'uppercase',

  },
  textheader2:{
    fontSize:30,
    color:"#4c5dab",
    textTransform:'uppercase',
    marginTop:0,

  },
  description:{
    textAlign:"left",
    fontSize:19,
    color:"#7d7d7d",
    marginTop:30,
    paddingBottom:50,
    lineHeight:26,

  },
  menuStyle:{
  marginBottom:20,
  marginTop:0,
  
  },
  lineStyle:{
borderWidth:1,
borderColor:"Grey",
marginBottom:30,
  },
})