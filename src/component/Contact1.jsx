import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Alert}  from 'react-native'
import React,{useState} from 'react'
import CheckBox from "expo-checkbox";


const Contact2 = ({navigation}) => {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[mobile,setMobile]=useState("")
  const[message,setMessage]=useState("")
  const[agree,setAgree]=useState(false)
  const submit=()=>{
    if(!name && !email && !mobile && !message){
      Alert.alert("Please fill all the fields")
      
    }
    else{
      Alert.alert(`Thank you ${name}`)
      navigation.navigate("Home")
    }
  }
  return (
   <View style={styles.mainContainer}>
    <Text style={styles.mainHeader}> Level up your knowledge</Text>
    <Text style={styles.description}>You can reach us anytime via Harsh@123</Text>
    <View style={styles.inputContanier}>
      <Text style={styles.labels}>Enter your name</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder='Harsh Shukla'
       value={name}
        onChangeText={(userdata)=>setName(userdata)}
      />
    </View>

    <View style={styles.inputContanier}>
      <Text style={styles.labels}>Enter your Email</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder='Harsh123@gmail.com'
        value={email}
        onChangeText={(email)=>setEmail(email)}
      />
    </View>

    <View style={styles.inputContanier}>
      <Text style={styles.labels}>Enter your Mobile Number</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder='12345678'
        value={mobile}
       onChangeText={(mobile)=>setMobile(mobile)}
      />
    </View>
    <View style={styles.inputContanier}>
      <Text style={styles.labels}>Feedback</Text>
      <TextInput
        style={[styles.inputStyle,styles.multi]}
        placeholder='Tell us about your thought'
        value={message}
        onChangeText={(feedback)=>setMessage(feedback)}
        numberOfLines={5}
        
      />
    </View>
    <View style={styles.checkBox}>
      <CheckBox
        value={agree}
        onValueChange={()=>setAgree(!agree)}
        //color={}
      />
      <Text style={styles.checkBoxText}> I have read and agreed with the TC</Text>
    </View>
    <TouchableOpacity
    style={[styles.buttonStyle,{
      backgroundColor:agree?"#4630EB":"grey"
      

    }]}
onPress={submit}
disabled={!agree}
    >
      <Text style={styles.buttonText}>Contact Us</Text>
    </TouchableOpacity>
   </View>
   
  )
}
const styles = StyleSheet.create({
  mainContainer:{
   height:"100%" ,
   paddingHorizontal:30,
   backgroundColor:"white"
  },
  mainHeader:{
    fontSize:20,
    color:"#344055",
    fontWeight:"500",
    paddingTop:20,
    paddingBottom:15,
    textTransform:"uppercase",

  },
  description:{
    fontSize:20,
    color:"#7d7d7d",
    lineHeight:25,
  },
  inputContanier :{
    marginTop:20,
  },
  inputStyle:{
    borderWidth:1,
    borrderColor:"rgba(0,0,0,0.3)",
    paddingHorizontal:15,
    paddingVertical:5,
    borderRadius:2,
  },
  multi:{
    
  },
  labels:
  {
    fontWeight:"bold",
  color:"#7d7d7d",
  paddingBottom:5,
  lineHeight:25,
},
buttonStyle:{
  marginTop:10,
  height:40,
  justifyContent:"cemter"
  
},
buttonText:{
textAlign:"center",
marginVertical:10,
fontSize:15,
textTransform:"uppercase",
color:"white",
},
checkBox:{
  flexDirection:"row",
  marginVertical:10,
  justifyContent:''
}

})

export default Contact2
