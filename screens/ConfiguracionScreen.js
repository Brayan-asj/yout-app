import React from "react";
import { ScrollView, Text, Image, TouchableOpacity, Alert } from "react-native";
import { styles } from "../styles/ConfiguracionStyle";
import { useNavigation } from "@react-navigation/native";
import { AUTH_URI } from "../config/uris.cfg";

const ConfiguracionScreen = () => {
  const navigation = useNavigation();

  const Logout = () => {
    fetch(`${AUTH_URI}/logout`, {
      method: "POST",
    }).then(
      async (res) => {
        const response = await res.json();
        Alert.alert(response.mensaje, undefined, [
          { onPress: () => navigation.navigate("Login") },
        ]);
      },
      (err) => console.log(err)
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require("../assets/yout1.png")} style={styles.image1} />
      <Text style={styles.text1}>Configuración</Text>
      <Text style={styles.text2}>
        Aquí estará la configuración de la aplicación
      </Text>
      <TouchableOpacity style={styles.boton} onPress={Logout}>
        <Text style={styles.textBoton}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ConfiguracionScreen;
