import { StatusBar } from 'react-native'
import Home from './src/screens/home/Index'

export default function App() {
  return(
    <>
    <StatusBar
      barStyle={'light-content'} //Icones com a cor branca
      backgroundColor={'transparent'} //backgroud
      translucent //Booleano (status bar sobreposta a aplicação)
    />
    <Home/>
    </>
  )
}