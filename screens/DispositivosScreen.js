import React from 'react';
import { ScrollView, Text, Image} from 'react-native';
import { styles } from '../styles/DispositivosStyle';

const DispositivosScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/yout1.png')} style={styles.image1} />
      <Text style={styles.text1}>Dispositivos</Text>
      <Text style={styles.text2}>Aquí estara la interfaz para los dispositivos</Text>
    </ScrollView>
  );
};


export default DispositivosScreen;
