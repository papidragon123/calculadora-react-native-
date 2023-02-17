import React from 'react';
import { SafeAreaView, StatusBar} from 'react-native';
import { Calculadora } from './src/screens/calculadora';
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor={'purple'} barStyle={'light-content'}/>


        <Calculadora />
    </SafeAreaView>


  )
}

export default App;
