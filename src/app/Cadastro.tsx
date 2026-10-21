import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Cadastro() {
  return (
    <View style={styles["corpo-cadastro"]}>
      <View style={styles["header-cadastro"]}>
       <Link href="/Home" asChild>
          <Pressable style={styles["header-cadastro"]}>
            <Image
              source={require("../../assets/images/logo.png")}
              style={{ width: 120, height: 50, resizeMode: "contain" }}
            />
            <Text>SHARK3D</Text>
          </Pressable>
        </Link>
      </View>
      <View style={styles["main-titulo"]}>
        <Text>Vamos criar sua conta</Text>
        <Text>Os campos abaixo são essenciais para</Text>
        <Text>criarmos sua conta SHARK3D</Text>
      </View>
      <View style={styles["main-cadastro"]}>
        <View style={styles["informe-cpf"]}>
          <Text>Informe seu CPF ou CNPJ</Text>
          <TextInput placeholder="Digite seu CPF ou CNPJ" />
        </View>
        <View style={styles["informe-telefone"]}>
          <Text>Informe seu telefone</Text>
          <TextInput placeholder="(+55) 00000-0000" />
        </View>
        <View style={styles["nome-sobrenome"]}>
          <View style={styles["informe-nome"]}>
            <Text>nome</Text>
            <TextInput placeholder="nome" />
          </View>
          <View style={styles["informe-sobrenome"]}>
            <Text>sobrenome</Text>
            <TextInput placeholder="sobrenome" />
          </View>
        </View>
        <View style={styles["informe-email"]}>
          <Text>Informe seu e-mail</Text>
          <TextInput placeholder="Digite seu e-mail" />
        </View>
        <View style={styles["informe-senha"]}>
          <Text>Informe sua senha</Text>
          <TextInput placeholder="Digite sua senha" secureTextEntry />
        </View>
        <View style={styles["continuar-voltar"]}>
          <Link href="/Login">
            <Text>Voltar</Text>
          </Link>

          <Link href="/Area_cliente">
            <Text>Continuar</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  "corpo-cadastro": {
    flex: 1,
  },
  "header-cadastro": {
    flex: 1,
    backgroundColor: "#000",
  },
  "main-cadastro": {
    flex: 1,
    backgroundColor: "#ccc",
  },
  "main-titulo": {
    flex: 1,
    backgroundColor: "#fff",  
  },
  "informe-cpf": {
    backgroundColor: "#fff",
  },
  "informe-telefone": {
    backgroundColor: "#fff",
  },
  "nome-sobrenome": {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  "informe-nome": {
    flex: 1,
    backgroundColor: "#fff",
  },
  "informe-sobrenome": {   
    flex: 1,
    backgroundColor: "#fff",
  },
  "informe-email": {
    backgroundColor: "#fff",
  },
  "informe-senha": {
    backgroundColor: "#fff",
  },
  "continuar-voltar": {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
});