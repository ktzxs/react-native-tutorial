# Tópicos importantes

1 - Qual a linguagem de programação utilizada na disciplina? JavaScript;
2 - O que é o Node.js? É o ambiente que roda o JS no terminal;
3 - O que é um framework e qual a diferença para uma biblioteca? Freamework é um conjunto de recursos programados para resolver problemas "Ele fala como estruturar seu código ou opina como resolver um problema". Biblioteca, não opina como resolver o problema, é um conjunto de funções. 
4 - O que é npm? Node package Manager - Comando que gerencia o node, adicionar pacotes, remover e rodar scripts;
5 - O que é React? Biblioteca;
6 - O que é o React Native? Biblioteca usada para desenvolver mobile;
7 - Oque é o expo? É o framework usado desenvolver mobile;
- Qual a diferença entre as libs react, react-native, react-dom e expo?
8- Como estilizar um componente no react native? importa o stylesheet e usa a funcao create para aplicar as caracteristicas;
9- O estilo no React Native é igual ao CSS? Tenho todas as propriedades? Não é igual, e pode sim usar todas as propriedades;
10-Em quais pacotes encontro um componente de Imagem? Qual melhor para usarmos atualmente? react native e expo-image. O melhor é expo-image.
11-O que são propriedades de componente? são caracteristicas para modificar naquele componente, no momento que chamamos ele;
12-O que são Hooks? São funcoes especias do react, useState e useEffect fazem parte do core, mas pode ser encontrados em outras bibliotecas, todos os hook comecam com a palavra use, e só podem ser usados no topLevel;
13-Para que serve e como funciona o useState?cria um estado e funcoes que alteram o estado, sempre que alteram o estado o react recarrega o valor na tela, Para atualizar o componente.
14- Para que serve e como funciona o useEffect? funciona como um gatilho quando o componente roda pela primeira vez e quando o estado foi alterado no componente e dispara uma funcao programada.
15-O que é Prop Drilling? Prop Drilling é o processo de passar propriedades de um componente pai para componentes filhos profundamente aninhados, mesmo que os componentes intermediários não usem esses dados diretamente.

--avaliacao 2 ------

1) Quais os padrões de navegação do Expo Router vimos em aula?
Os padrões foram Tabs e Stack.

2) Quais as características de cada um deles?
Tabs: mostra abas na parte de baixo da tela e facilita trocar entre páginas principais do app.
Stack: funciona como uma pilha, abrindo uma tela em cima da outra, com opção de voltar para a anterior.

3) Posso utilizar apenas um deles ou ambos ao mesmo tempo no projeto?
Sim. Dá para usar só um deles ou os dois juntos no mesmo projeto, dependendo da necessidade.

-----------------------------------

Zustand (estados globais)

4) Qual a diferença de usar estados com Zustand e com useState?
O useState serve para controlar estados dentro de um componente.
O Zustand é melhor quando vários componentes precisam compartilhar as mesmas informações, porque ele cria um estado global.

-----------------------------------

AsyncStorage (Armazenamento Local)

5) O que é AsyncStorage?
É um armazenamento local do app. Ele guarda informações no celular, como login, tema ou configurações, mesmo depois de fechar o aplicativo.

Sistema de Login JWT

6) As informações do Payload do JWT para quem possui o token são secretas?
Não. O payload pode ser lido por quem tiver o token.

7) Quem possui um token JWT (cliente) consegue saber a assinatura ou alterar os dados do token?
Consegue ver o token e o payload, mas não consegue alterar os dados sem invalidar a assinatura. A assinatura serve justamente para garantir que ele não foi modificado.

-----------------------------------

FlatList vs ScrollView

8) Diferença entre FlatList e ScrollView?
ScrollView: carrega todos os itens de uma vez, melhor para listas pequenas.
FlatList: carrega os itens aos poucos, melhor para listas grandes porque é mais leve e rápido.
Extra:
- Revisao de variaveis e objetos
    -desestruturação de objetos

## Comandos Uteis

// como instalar o react-native?
npx create-expo-app@latest --template

## Expo 