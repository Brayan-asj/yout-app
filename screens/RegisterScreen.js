import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { styles } from "../styles/RegisterStyle";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { Dropdown } from "react-native-element-dropdown";
import { AUTH_URI, ROLE_URI } from "../config/uris.cfg";

const data = [
  { label: "Usuario", value: null },
  { label: "Administrador", value: null },
];

fetch(ROLE_URI, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
}).then(
  async (res) => {
    const response = await res.json();
    for (let i = 0; i < data.length; i++) {
      data[i].value = response.roles[`role${i}`]._id;
    }
  },
  (err) => console.log(err)
);

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [value, setValue] = useState(null);
  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <Icon style={styles.icon} name="person" size={20} color="black" />
        )}
      </View>
    );
  };

  const BienvenidoAlerta = () => {
    Alert.alert("Bienvenido a YOUT", "El lugar para tener seguro tu negocio", [
      {
        text: "OK",
        style: "cancel",
      },
    ]);
  };

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [rol, setRol] = useState(null);
  const [contrasena, setContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");

  const validarRegistro = () => {
    // if (nombre.length < 3) {
    //   Alert.alert("Error en Nombre(s)", "Debe tener al menos 3 caracteres");
    //   return;
    // }
    // if (apellido.length < 3) {
    //   Alert.alert("Error en Apellido(s)", "Debe tener al menos 3 caracteres");
    //   return;
    // }
    // if (!email.includes("@") || !email.includes(".")) {
    //   Alert.alert("Error en Email", "Ingresa un email válido");
    //   return;
    // }
    // if (telefono.length !== 10) {
    //   Alert.alert(
    //     "Error en Teléfono",
    //     "El número de teléfono debe tener 10 dígitos"
    //   );
    //   return;
    // }
    // if (!rol) {
    //   Alert.alert("Error en Rol", "Selecciona un rol");
    //   return;
    // }
    // if (contrasena.length < 8) {
    //   Alert.alert("Error en Contraseña", "Debe tener al menos 8 caracteres");
    //   return;
    // }
    // if (contrasena !== confirmarContrasena) {
    //   Alert.alert(
    //     "Error en Confirmar Contraseña",
    //     "Las contraseñas no coinciden"
    //   );
    //   return;
    // }
    // Alert.alert("Registro exitoso", "¡Bienvenido a Porsche!");
    const myobj = {
      email: email,
      password: contrasena,
      names: {
        first_name: nombre,
        last_name: apellido,
      },
      phone: telefono,
      rol: {
        rol_id: rol,
      },
    };
    fetch(`${AUTH_URI}/register`, {
      method: "POST",
      body: JSON.stringify(myobj),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(
      async (res) => {
        const response = await res.json();
        console.log(response.tkn);
        if (response.tkn) {
          navigation.navigate("Principal");
        }
      },
      (err) => console.log(err)
    );
    console.log("------------------------------------");
    console.log(`Names: ${nombre}`);
    console.log(`Lastnames: ${apellido}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${telefono}`);
    console.log(`Role: ${rol}`);
    console.log(`Passwd: ${contrasena}`);
    console.log(`Confirm passwd: ${confirmarContrasena}`);
    console.log("------------------------------------");
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require("../assets/yout1.png")} style={styles.img1} />

      <Text style={styles.label1}>Nombre(s)</Text>
      <TextInput
        style={styles.input1}
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />

      <Text style={styles.label1}>Apellido(s)</Text>
      <TextInput
        style={styles.input1}
        value={apellido}
        onChangeText={(text) => setApellido(text)}
      />

      <Text style={styles.label1}>Email</Text>
      <TextInput
        style={styles.input1}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Text style={styles.label1}>Teléfono</Text>
      <TextInput
        style={styles.input1}
        value={telefono}
        onChangeText={(text) => setTelefono(text)}
      />

      <Text style={styles.label1}>Rol</Text>
      <Dropdown
        style={styles.dropdown}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Selecciona un Rol"
        value={rol}
        onChange={(item) => {
          setRol(item.value);
        }}
        renderLeftIcon={() => (
          <Icon style={styles.icon} color="black" name="person" size={20} />
        )}
        renderItem={renderItem}
      />

      <Text style={styles.label2}>Contraseña</Text>
      <TextInput
        secureTextEntry
        style={styles.input2}
        value={contrasena}
        onChangeText={(text) => setContrasena(text)}
      />

      <Text style={styles.label2}>Confirmar Contraseña</Text>
      <TextInput
        secureTextEntry
        style={styles.input2}
        value={confirmarContrasena}
        onChangeText={(text) => setConfirmarContrasena(text)}
      />

      <TouchableOpacity style={styles.boton} onPress={validarRegistro}>
        <Text style={styles.textBoton}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.cuentaContainer}
      >
        <Text style={styles.enlace1}>Ya tienes cuenta? ¡Ingresa!</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={BienvenidoAlerta}
        style={styles.iconoContainer}
      >
        <Icon name="help" size={20} color="#000000" />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RegisterScreen;
