import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Home1 from './src/component/Home'
import About2 from './src/component/About1'
import Course2 from './src/component/Course1'
import Data2 from './src/component/Data1'
import Contact2 from './src/component/Contact1'
import About3 from './src/component/About2'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='home'>
      <Stack.Screen name='Home' component={Home1} options={{headerShown:false}}/>
      {/*course screen */}
      <Stack.Screen name='Course' component={Course2} options={{headerTitleStyle:{fontSize:25},
       headerTitle:"Courses", headerTitleAlign:"center"} }/>
      {/*About screen */}
      <Stack.Screen name='About' component={About3} options={{headerTitleStyle:{fontSize:25},
       headerTitle:"About Us", headerTitleAlign:"center"}}/>
      {/*UserData screen */}
      <Stack.Screen name='Data' component={Data2} options={{headerTitleStyle:{fontSize:25},
       headerTitle:"Student Data", headerTitleAlign:"center"}}/>
      {/*Contact screen */}
      <Stack.Screen name='Contact' component={Contact2} options={{headerTitleStyle:{fontSize:25},
       headerTitle:"Contact Us", headerTitleAlign:"center"}}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}


