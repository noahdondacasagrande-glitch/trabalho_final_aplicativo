import { Link } from "expo-router";
import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
  return (
    <View style={styles["corpo-login"]}>
      <View style={styles["header-login"]}>
            <Link href="/Home" asChild>
              <Pressable style={styles["header-login"]}>
                <Image
                  source={require("../../assets/images/logo.png")}
                  style={{ width: 120, height: 50, resizeMode: "contain" }}
                />
                <Text>SHARK3D</Text>
              </Pressable>
            </Link>
      </View>
      <View style={styles["como-entrar"]}>
        <View style={styles["caixa-google"]}>
          <Text>Entrar com Google</Text>
          {/* <Image source={require("../assets/images/google.png")} /> */}
        </View>
        <View style={styles["caixa-email"]}>
          <Text>Entrar com Email</Text>
          {/* <Image source={require("../assets/images/email.png")} /> */}
        </View>
      </View>
      <View style={styles.separador}>
        <View style={styles.linha1}></View>
        <Text>ou</Text>
        <View style={styles.linha2}></View>
      </View>
      <View style={styles["formulario-login"]}>
        <View style={styles["caixa-email"]}>
          <Text>CPF, CNPJ ou e-mail</Text>
          <TextInput placeholder="CPF, CNPJ ou e-mail" />
        </View>
        <View style={styles["caixa-senha"]}>
          <Text>Informe sua senha</Text>
          <TextInput placeholder="Digite sua senha" secureTextEntry />
          {/* <Image source={require("../assets/images/olho.png")} /> */}
        </View>
        <View style={styles["esqueci-senha"]}>
          <Text>Esqueci minha senha</Text>
        </View>
        <View style={styles["botao-entrar"]}>
          <Button title="Entrar" onPress={() => {}} />
        </View>
        <Link href="/Cadastro" asChild>
          <Text>Não tem uma conta? Cadastre-se</Text>
        </Link>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  "corpo-login": {
    flex: 1,
  },
  "header-login": {
    flex: 1,
    backgroundColor: "#000",
  },
  "como-entrar": {
    flex: 1,
    backgroundColor: "#fff",
  },
  "caixa-google": {
    flexDirection: "row",
    alignItems: "center",
  },
  "caixa-email": {
    flexDirection: "row",
    alignItems: "center",
  },
  "formulario-login": {
    flex: 1,
    backgroundColor: "#fff",
  },
  "caixa-senha": {
    flexDirection: "row",
    alignItems: "center",
  },
  "esqueci-senha": {
    alignItems: "flex-end",
  },
  "botao-entrar": {
    marginTop: 10,
  },
  separador: {
    justifyContent: "center",
  },
  linha1: {
    flex: 1,
    height: 1,
    width: "180px",
  },
  linha2: {
    flex: 1,
    height: 1,
    width: "180px",
  },
});