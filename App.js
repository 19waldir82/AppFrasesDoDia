import React from 'react';
import {
   View,
   Text,
} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={style.texto}>Frases Do Dia</Text>
    </View>
  );
};

const style = {
  texto: {
    fontSize: 30,
    backgroundColor: 'green',
    padding: 30,
  }
}

export default App;