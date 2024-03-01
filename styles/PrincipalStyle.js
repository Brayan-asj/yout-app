import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#F9F7F7",
  },
  image1: {
    width: 100,
    height: 64,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 20,
  },
  text1: {
    fontSize: 28,
    textAlign: "center",
    alignContent: "center",
    marginBottom: 15,
    marginTop: 10,
  },
  contenedores: {
    borderWidth: 2,
    borderColor: "#000000",
    position: "relative",
    paddingTop: 10,
    paddingBottom: 30,
    marginBottom: 20,
  },
  text2: {
    fontSize: 26,
    marginRight: 200,
    marginLeft: 10,
  },
  info: {
    fontSize: 16,
    color: "#3F72AF",
    marginRight: 190,
    marginTop: 30,
    marginLeft: 10,
    marginBottom: 10,
  },
  boton: {
    marginLeft: 250,
    width: 80,
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#112D4E",
    marginTop: -70,
  },
  textBoton: {
    color: "#fff",
    fontSize: 26,
  },
});
