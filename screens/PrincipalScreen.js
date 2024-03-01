import React, { useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { styles } from "../styles/PrincipalStyle";
import { useNavigation } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import DispositivosScreen from "../screens/DispositivosScreen";
import ConfiguracionScreen from "../screens/ConfiguracionScreen";
import { AUTH_URI } from "../config/uris.cfg";

const Tab = createMaterialBottomTabNavigator();

const PrincipalScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    console.log("EFECTO REALIZADO");
  }, []);

  const checkCookie = () => {
    fetch(AUTH_URI, {
      method: "GET",
    }).then(async (res) => {
      const response = await res.json();
      console.log(response);
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require("../assets/yout1.png")} style={styles.image1} />
      <Text style={styles.text1}>Movimientos</Text>

      <View style={styles.contenedores}>
        <Text style={styles.text2}>Entradas</Text>
        <Text style={styles.info}>Ultima a las 16:01 h</Text>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textBoton}>Ver</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contenedores}>
        <Text style={styles.text2}>Salidas</Text>
        <Text style={styles.info}>Ultima a las 16:55 h</Text>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textBoton}>Ver</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contenedores}>
        <Text style={styles.text2}>Usuarios</Text>
        <Text style={styles.info}>Activos 64</Text>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textBoton}>Ver</Text>
        </TouchableOpacity>
      </View>

      <Button title="VER COOKIES" onPress={() => checkCookie()} />
    </ScrollView>
  );
};

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Principal"
      activeColor="#3F72AF"
      barStyle={{
        backgroundColor: "#D9D9D9",
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={PrincipalScreen}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({}) => <Icon name="home" size={20} color="#000000" />,
        }}
      />
      <Tab.Screen
        name="Dispositivos"
        component={DispositivosScreen}
        options={{
          tabBarLabel: "Dispositivos",
          tabBarIcon: ({}) => <Icon name="shield" size={20} color="#000000" />,
        }}
      />
      <Tab.Screen
        name="Configuracion"
        component={ConfiguracionScreen}
        options={{
          tabBarLabel: "Configuración",
          tabBarIcon: ({}) => (
            <Icon name="settings" size={20} color="#000000" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
