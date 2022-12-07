import { View } from 'react-native'
import React, {useContext} from 'react'
import LoginForm from '../components/auth/LoginForm'
import { ContextMovies } from '../context/Context'
import UserData from '../components/auth/UserData'

const Account = () => {

  const {auth} : any = useContext(ContextMovies)

  return (
    <View>
      {auth !== "" && auth !== undefined ? <UserData /> : <LoginForm />}
      
    </View>
  )
}

export default Account