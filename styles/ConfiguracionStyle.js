import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: '#F9F7F7',
    },
    image1: {
      width: 100,
      height: 64,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginTop: 20,
    },
    text1: {
      fontSize: 28,
      textAlign: 'center',
      alignContent: 'center',
      marginTop: 10,
    },
    text2: {
      fontSize: 20,
      marginTop: 25,
    },
    boton: {
      marginTop: 40,
      backgroundColor: '#112D4E',
      paddingVertical: 10,
      marginLeft: 50,
      marginRight: 50,
      borderRadius: 20,
      alignItems: 'center',
    },
    textBoton: {
      color: '#fff',
      fontSize: 26,
    },
});