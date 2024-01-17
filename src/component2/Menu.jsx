import { StyleSheet, Text, View ,TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu1 = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.mainMenu}>

      <TouchableOpacity 
      style={styles.button}
      onPress={()=>{navigation.navigate("Course")}}>
        <Image
        style={styles.imgStyles}
          source={{
            uri: "https://img.icons8.com/stickers/90/000000/training.png",
          }}  
        />
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.button}
      onPress={()=>{navigation.navigate("About")}}>

        <Image
             style={styles.imgStyles}
             source={{uri:"https://img.icons8.com/stickers/100/000000/about.png"}}
        />
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.button}
      onPress={()=>{navigation.navigate("Data")}}>
       <Image
         style={styles.imgStyles}
             source={{uri:"https://img.icons8.com/stickers/100/000000/conference.png"}}
       />
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.button}
      onPress={()=>{navigation.navigate("Contact")}}>
        <Image
        style={styles.imgStyles}
             source={{uri:"https://img.icons8.com/stickers/100/000000/phone-office.png"}}
             />
      </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
    mainMenu:{
        flexDirection:"row",
        justifyContent:'space-evenly'


    },
    button:{
        

    },
    imgStyles:{
        width:"100%",
        height:50,
        aspectRatio:1,
    }
    
    
})

export default Menu1

