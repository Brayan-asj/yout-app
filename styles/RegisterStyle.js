import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: '#F9F7F7',
    },
    img1:{
      width: 185,
      height: 108,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginTop: 40,
    },
    label1: {
      fontSize: 18,
      marginTop: 20,
    },
    label2: {
      fontSize: 18,
      marginTop: 20,
    },
    input1: {
      borderBottomWidth: 1,
      borderBottomColor: '#000000',
      paddingBottom: 5,
      marginBottom: 15,
    },
    input2: {
      borderBottomWidth: 1,
      borderBottomColor: '#000000',
      paddingBottom: 5,
      marginBottom: 30,
    },
  
    
  // Estilos para el element dropdown
    dropdown: {
      margintop: 800,
      width: 350,
      height: 50,
      backgroundColor: 'white',
      borderRadius: 12,
      padding: 12,
      shadowColor: '#000',
      borderWidth: 1.5,
      borderColor: '#000000',
      borderRadius: 12,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textItem: {
      flex: 1,
      fontSize: 16,
    },
    icon: {
      marginRight: 5,
    },
    boton: {
      marginTop: 20,
      marginBottom: 50,
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
    cuentaContainer: {
      justifyContent: 'center',
      marginRight: 100,
      marginBottom: 25,
      paddingTop: 10,
      paddingBottom: 10,
    },
    enlace1: {
      color: '#3F72AF',
      fontSize: 18,
    },
    iconoContainer: {
      width: 45,
      height: 45,
      marginLeft: 300,
      marginBottom: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });