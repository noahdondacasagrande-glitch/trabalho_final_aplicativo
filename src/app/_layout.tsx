import { Stack } from "expo-router";

export default function RootLayout() {
  return(
    <Stack>
      <Stack.Screen 
      name="Home" 
      options={{ title: "Home" }} 
      />
      <Stack.Screen
      name="Area_cliente"
      options={{ title: "Área do Cliente" }}
      />
      <Stack.Screen
      name="Cadastro"
      options={{ title: "Cadastro" }}
      />
      <Stack.Screen
      name="Detalhes"
      options={{ title: "Detalhes" }}
      />
      <Stack.Screen
      name="Login"
      options={{ title: "Login" }}
      />
      <Stack.Screen
      name="Orcamento"
      options={{ title: "Orçamento" }}
      />
      <Stack.Screen
      name="Produto"
      options={{ title: "Produto" }}
      />      
      <Stack.Screen
      name="Sobre"
      options={{ title: "Sobre" }}
      />
      <Stack.Screen
      name="Solucoes"
      options={{ title: "Soluções" }}
      />

    </Stack>
  ) 
}
