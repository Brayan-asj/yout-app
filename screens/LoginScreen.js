import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { styles } from "../styles/LoginStyle";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import { AUTH_URI } from "../config/uris.cfg";

const LoginScreen = () => {
  const navigation = useNavigation();

  const BienvenidoAlerta = () => {
    Alert.alert("Bienvenido a YOUT", "El lugar para tener seguro tu negocio", [
      {
        text: "Ok",
        style: "Cancel",
      },
    ]);
  };
  const RecuperarAlerta = () => {
    Alert.alert(
      "Olvidaste tu contraseña?",
      "Enviaremos tu nueva contraseña a tu correo",
      [
        {
          text: "Cancelar",
          // onPress: () => console.log('Cancel Pressed'),
          style: "cancel",
        },
        {
          text: "Ok",
          // onPress: () => console.log('OK Pressed')
        },
      ]
    );
  };

  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");

  const validarLogin = () => {
    if (!email.trim() || !contrasena.trim()) {
      Alert.alert("Error en Login", "Correo o contraseña incorrectos");
      return;
    }

    // Alert.alert("Login exitoso", "¡Bienvenido a Yout!");
    const myobj = { email: email, password: contrasena };
    fetch(`${AUTH_URI}/login`, {
      method: "POST",
      body: JSON.stringify(myobj),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(
      async (res) => {
        const response = await res.json();
        console.log(response);
        if (response.tkn) {
          navigation.navigate("Principal");
        } else if (response.mensaje) {
          Alert.alert("Error", response.mensaje);
        }
      },
      (err) => console.log(err)
    );
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/yout1.png")} style={styles.img1} />

      <Text style={styles.label1}>Email</Text>
      <TextInput
        style={styles.input1}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Text style={styles.label2}>Contraseña</Text>
      <TextInput
        secureTextEntry
        style={styles.input2}
        value={contrasena}
        onChangeText={(text) => setContrasena(text)}
      />

      <TouchableOpacity style={styles.boton} onPress={validarLogin}>
        <Text style={styles.textBoton}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={styles.cuentaContainer}
      >
        <Text style={styles.enlace1}>No tienes cuenta? ¡Crea una!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={RecuperarAlerta}
        style={styles.olvidarContainer}
      >
        <Text style={styles.enlace2}>Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={BienvenidoAlerta}
        style={styles.iconoContainer}
      >
        <Icon name="help" size={20} color="#000000" />
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
