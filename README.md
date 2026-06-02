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

Os padrões de navegação vistos foram Tabs e Stack.

2) Quais as características de cada um deles?

Tabs: exibe abas de navegação, geralmente na parte inferior da tela, permitindo alternar rapidamente entre as principais páginas do aplicativo.

Stack: funciona como uma pilha de telas. Quando o usuário navega para uma nova página, ela é colocada sobre a anterior, permitindo voltar para a tela anterior.

3) Posso utilizar apenas um deles ou ambos ao mesmo tempo no projeto?

Sim. É possível utilizar apenas Tabs, apenas Stack ou combinar os dois no mesmo projeto, de acordo com a necessidade da aplicação.

Zustand (Estados Globais)

4) Qual a diferença de usar estados com Zustand e com useState?

O useState é utilizado para controlar estados locais de um componente, ou seja, informações que serão usadas apenas naquele componente.

O Zustand é utilizado para criar estados globais, permitindo que vários componentes compartilhem e acessem os mesmos dados sem a necessidade de passar informações por props.

AsyncStorage (Armazenamento Local)

5) Qual a diferença do AsyncStorage para o Zustand ou useState?

O useState armazena dados apenas enquanto o componente está ativo.

O Zustand mantém dados compartilhados entre componentes enquanto o aplicativo está em execução.

O AsyncStorage salva os dados no armazenamento local do dispositivo, permitindo que eles continuem disponíveis mesmo após fechar ou reiniciar o aplicativo.

6) Qual formato de valor o AsyncStorage aceita?

O AsyncStorage aceita apenas valores do tipo string. Para armazenar objetos ou arrays, é necessário convertê-los para string utilizando JSON.stringify() e, ao recuperar os dados, utilizar JSON.parse().

Sistema de Login JWT

7) As informações do Payload do JWT para quem possui o token são secretas?

Não. As informações do Payload podem ser visualizadas por qualquer pessoa que possua o token, pois elas são apenas codificadas em Base64 e não criptografadas.

8) Quem possui um token JWT (cliente) consegue saber a assinatura ou alterar os dados do token?

O cliente consegue visualizar o Header, o Payload e a assinatura do token. Porém, não consegue alterar os dados e gerar uma assinatura válida sem possuir a chave secreta do servidor. Caso os dados sejam modificados, a assinatura se torna inválida e o token é rejeitado pelo sistema.

FlatList vs ScrollView

9) Qual a diferença entre uma View, ScrollView e FlatList?

View: é um contêiner básico utilizado para organizar e agrupar componentes na tela. Não possui rolagem.

ScrollView: permite rolagem do conteúdo, mas renderiza todos os itens de uma só vez, sendo mais indicada para pequenas quantidades de dados.

FlatList: também permite rolagem, porém renderiza apenas os itens visíveis na tela, tornando-se mais eficiente e recomendada para listas grandes.

Extra:
- Revisao de variaveis e objetos
    -desestruturação de objetos

## Comandos Uteis

// como instalar o react-native?
npx create-expo-app@latest --template

## Expo 