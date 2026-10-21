import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";


export default function Home() {
  return (
    <View style={styles["corpo-home"]}>
      <View style={styles["header-home"]}>
       <Link href="/Home" asChild>
            <Pressable style={styles["header-home"]}>
              <Image
                source={require("../../assets/images/logo.png")}
                style={{ width: 120, height: 50, resizeMode: "contain" }}
              />
              <Text>SHARK3D</Text>
            </Pressable>
        </Link>
        <View style={styles["botao-login"]}>
          <Link href="/Login" asChild>
            <Text>Login</Text>
          </Link>
        </View>
      </View>
      <View style={styles["main-home"]}>
        <Text style={styles["titulo-home"]}>Sobre nós</Text>
        <Text style={styles.paragrafo1}>Nossa empresa tem o objetivo de ativar a criatividade das pessoas com impressões 3D, deixando cada peça com um toque de seu criador. A nossa empresa tenta entregar os pedidos o mais rápido possível, já que temos intenção de vender para engenheiros, profissionais que utilizam impressão 3D em seus trabalhos e negócios e adolescentes que estão desenvolvendo interesse pela área, buscamos oferecer produtos com preços acessíveis para tornar a impressão 3D mais prática e acessível para nossos clientes.</Text>
        <Text style={styles.paragrafo2}>Nosso público alvo são adolescentes, adultos e pessoas que tenham interesse em engenharia e que tenham interesse em máquinas 3D</Text>
        <Text style={styles.paragrafo3}>Pq esse é o nosso público alvo?</Text>
        <Text style={styles.paragrafo4}>Esse é nosso público alvo por conta da nossa empresa ser voltada para maquinas 3D e alguns download de peças 3D, muitos adolescentes criaram interesses por impressões em 3D ao longo desses anos, e a nossa empresa vende download de impressões 3D, já os adultos têm interesse nas impressoras 3D por ser algo que é útil nos seus negócio, e a nossa empresa vende peças prontas de impressão 3D, a Shark3D é voltada para impressões de robôs para engenharia e a Shark3D faz peças de robô individuais e grupos de peças diferentes umas das outras.</Text>
        <Text style={styles.paragrafo5}>E nessa realidade de incerteza e pouca credibilidade que surge o Shar3D, uma empresa que busca excelência e construir um relacionamento a longo prazo baseado na confiança mútua.Dispondo de uma ampla gama de recursos e opções, a Shar3D permite o requerimento de diferentes cotações de fornecedores antes de fechar um negócio, além de centralizar o canal de negociação para obter condições comerciais exclusivas, transformando a incerteza do mercado em previsibilidade financeira.Possuindo um site com uma interface intuitiva, permitindo o upload de projetos ou compra de produtos prontos.</Text>
        <Text style={styles.paragrafo6}>	O problema presente na produção de elementos 3D, são os obstáculos para encontrar uma distribuidora, produtora, de peças e instrumentos centralizada e confiável, que permita aos clientes ter a certeza que seus pedidos serão realizados com maestria e precisão .</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  "corpo-home": {
    flex: 1,    
    },
  "header-home": {
    flex: 1,
    backgroundColor: "#000",
    },
  "botao-login": {
    backgroundColor: "#fff",
    padding: 10,
  },
  "main-home": {
    flex: 1,
    backgroundColor: "#ccc",
  },
  "titulo-home": {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  "paragrafo1": {
    fontSize: 16,
    textAlign: "justify",
    padding: 10,
  },
  "paragrafo2": {
    fontSize: 16,
    textAlign: "justify",
  },
  "paragrafo3": {
    fontSize: 16,
  },
  "paragrafo4": {
    fontSize: 16,
  },
  "paragrafo5": {
    fontSize: 16,
  },  
  "paragrafo6": {
    fontSize: 16,
  },
});