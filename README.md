<div align='center' id='topo'/>

# Projeto ClientFlow
## Sistema de CRM (Customer Relationship Management)

Clique e acesse a demo do ClientFlow no Youtube!

[![Assista à demo do ClientFlow!](https://ik.imagekit.io/willa/Design%20sem%20nome%20(4).png?updatedAt=1746211173500)](https://youtu.be/HInqPNLu2u8)


</div>

O **ClientFlow** é um sistema de gerenciamento de clientes desenvolvido com foco em usabilidade e eficiência. A aplicação possui uma interface moderna construída com **React**, **Tailwind CSS** e **TypeScript** no front-end, integrada a uma API robusta desenvolvida em **Java** com **Spring Boot** no back-end.

> **Confira a aplicação em funcionamento pode ser acessada por meio do seguinte link:** [Site ClientFlow](https://client-flow-react-seven.vercel.app/)

> **Já o back-end deste projeto pode ser encontrado no seguinte link:** [ClientFlow](https://github.com/Projeto-ClientFlow/ClientFlow)

******

<div align='center'/>

  ![React](https://a11ybadges.com/badge?logo=react)
  ![Tailwind](https://a11ybadges.com/badge?logo=tailwindcss)
  ![Vite](https://a11ybadges.com/badge?logo=vite)
  ![TypeScript](https://a11ybadges.com/badge?logo=typescript)
  ![JavaScript](https://a11ybadges.com/badge?logo=javascript)
  ![HTML](https://a11ybadges.com/badge?logo=html5)
  ![CSS](https://a11ybadges.com/badge?logo=css3)
  ![Vercel](https://a11ybadges.com/badge?logo=vercel)

</div>

******

## 📖 Tabela de Conteúdo
- [💡 Conhecimentos Mobilizados](#conhecimentosMobilizados)
- [🏗️ Estrutura do Projeto](#estruturaDoProjeto)
- [📂 Código Desenvolvido](#codigoDesenvolvido)
- [🛠️ Tecnologias Utilizadas](#tecnologiasUtilizadas)
- [🤝 Desenvolvedoras do Projeto](#devas)

---

<div id='conhecimentosMobilizados'/> 

## 💡 Conhecimentos Mobilizados

- **Axios**: Consumo de APIs REST de forma eficiente, com tratamento de respostas assíncronas.
- **React**: Criação de componentes reutilizáveis e responsivos para a construção da interface.
- **Tailwind CSS**: Estilização da aplicação com classes utilitárias, garantindo agilidade e responsividade.
- **TypeScript**: Aplicação da tipagem estática para maior segurança, legibilidade e escalabilidade do código.
- **Vite**: Ferramenta de build para aplicações React, proporcionando um ambiente de desenvolvimento ágil.
- **Componentização**: Separação de responsabilidades com componentes reutilizáveis e de fácil manutenção.
- **Vercel**: Plataforma utilizada para o deploy da aplicação, permitindo acesso rápido e gratuito à versão em produção.
- **React Router DOM**: Gerenciamento de rotas de maneira declarativa, permitindo navegação fluida entre páginas da aplicação.

---

<div id='estruturaDoProjeto'/> 

## 🏗️ Estrutura do Projeto

```
clientflow/
├── public/
│   ├── assets/
│   │   └── fonts/
│   │   └── react.svg
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── barrapesquisa/
│   │   │   └── BarraPesquisa.tsx
│   │   ├── categories/
│   │   │   ├── atualizarcategorias/
│   │   │   │   └── AtualizarCategorias.tsx
│   │   │   ├── cadastrarcategorias/
│   │   │   │   └── CadastrarCategorias.tsx
│   │   │   ├── cardcategorias/
│   │   │   │   └── CardCategorias.tsx
│   │   │   ├── deletarcategorias/
│   │   │   │   └── DeletarCategorias.tsx
│   │   │   └── listacategorias/
│   │   │       └── ListaCategorias.tsx
│   │   ├── footer/
│   │   │   └── Footer.tsx
│   │   ├── menu/
│   │   │   └── Menu.tsx
│   │   └── navbar/
│   │       └── Navbar.tsx
│   ├── models/
│   │   ├── Card.ts
│   │   ├── Categories.ts
│   │   ├── Produto.ts
│   │   └── Tema.ts
│   ├── pages/
│   │   ├── home/
│   │   │   └── Home.tsx
│   │   ├── produto/
│   │   │   ├── cardproduto/
│   │   │   │   └── CardProduto.tsx
│   │   │   ├── AtualizarProduto.tsx
│   │   │   ├── CadastrarProduto.tsx
│   │   │   ├── DeletarProduto.tsx
│   │   │   └── ListarProduto.tsx
│   │   ├── sobre_nos/
│   │   │   └── SobreNos.tsx
│   │   └── tema/
│   │       ├── AtualizarTema.tsx
│   │       ├── CadastrarTema.tsx
│   │       ├── DeletarTema.tsx
│   │       └── ListarTema.tsx
│   ├── services/
│   │   └── Services.ts
│   ├── App.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── package.json
├── postcss.config.js
└── vite.config.js
```

<div id='codigoDesenvolvido'/>

## 📂 Código Desenvolvido

- **`App.tsx`**: Componente raiz que define a estrutura e roteamento da aplicação.
- **`Home.tsx`**: Página principal da aplicação, onde os componentes são organizados e renderizados.
- **`index.css`**: Arquivo de estilização global com configurações base do Tailwind CSS. 
- **`tailwind.config.js`**: Arquivo de configuração do Tailwind CSS.
- **`vite.config.js`**: Configuração do Vite como bundler da aplicação.
- **`Navbar.tsx`** e **`Footer.tsx`**: Componentes fixos de navegação e rodapé, reutilizados em todas as páginas.
- **`Menu.tsx`** e **`BarraPesquisa.tsx`**: Componentes de navegação e busca, que otimizam a usabilidade do sistema.
- **`CardCategorias.tsx`**, **`CadastrarCategorias.tsx`**, **`AtualizarCategorias.tsx`**, **`DeletarCategorias.tsx`**, **`ListaCategorias.tsx`**: Conjunto de componentes responsáveis pelas operações de CRUD de categorias.
- **`CardProduto.tsx`**, **`CadastrarProduto.tsx`**, **`AtualizarProduto.tsx`**, **`DeletarProduto.tsx`**, **`ListarProduto.tsx`**: Componentes do CRUD de produtos com foco em reatividade e responsividade.
- **`CadastrarTema.tsx`**, **`AtualizarTema.tsx`**, **`DeletarTema.tsx`**, **`ListarTema.tsx`**: Telas dedicadas à gestão de temas, seguindo o mesmo padrão modular e reutilizável.
- **`SobreNos.tsx`**: Página institucional com informações sobre o projeto e equipe.
- **`Services.ts`**: Centralização das chamadas HTTP com Axios, facilitando a manutenção e reutilização.
- **`Card.ts`**, **`Categories.ts`**, **`Produto.ts`**, **`Tema.ts`**: Modelos tipados com TypeScript que representam as entidades da aplicação.
- **`vite.config.js`**: Configuração do Vite como bundler para otimização do desenvolvimento.
- **`tailwind.config.js`**: Arquivo de configuração do Tailwind CSS para personalização de estilos e temas.

---

<div id='tecnologiasUtilizadas'/> 

## 🛠️ Tecnologias Utilizadas

- **Linguagem**: JavaScript (ES6+) e TypeScript
- **Framework**: React
- **Roteamento**: React Router DOM
- **Estilização**: Tailwind CSS
- **Ferramenta de Build**: Vite
- **Gerenciador de Pacotes**: npx
- **Consumo de API**: Axios
- **Hospedagem**: Vercel
  
---

<div id='devas'/> 
  
## 🤝 Desenvolvedoras do Projeto

Este projeto foi possível graças às contribuições das seguintes desenvolvedoras:

<div align="center">
  <table>
    <td align="center">
        <a href="https://www.linkedin.com/in/elianempontes/" title="Linkedin da Eliane Medeiros">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQGppzwuto4Skw/profile-displayphoto-shrink_400_400/B4DZOzMU5sHUAg-/0/1733878173890?e=1747267200&v=beta&t=dYk2XBvZ6Be-J99J4sp9kljf2TF3ZZ5YZ8lEu72U7oA" width="100px;" alt="Foto da Eliane Medeiros"/><br>
          <sub>
            <b>Eliane Medeiros</b>
          </sub>
        </a>
      </td>
      <td align="center">
        <a href="https://www.linkedin.com/in/larissa-mata-a32a5a104/" title="Linkedin da Larissa Mata">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQH8ZGW05SThzA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698075416577?e=1747267200&v=beta&t=MZQra9MZhtWWZqrZx6Re7loE6-KZIhHj9kj5Rbxe_Ds" width="100px;" alt="Foto da Larissa Mata"/><br>
          <sub>
            <b>Larissa Mata</b>
          </sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/MariPimentelCarmo" title="GitHub da Mariana Carmo">
          <img src="https://avatars.githubusercontent.com/u/99743029?v=4" width="100px;" alt="Foto da Mariana Carmo"/><br>
          <sub>
            <b>Mariana Carmo</b>
          </sub>
        </a>
      </td>
    <td align="center">
        <a href="https://github.com/willaevangelista" title="GitHub da Willa Evangelista">
          <img src="https://avatars.githubusercontent.com/u/84138876?v=4" width="100px;" alt="Foto da Willa Evangelista"/><br>
          <sub>
            <b>Willa Evangelista</b>
          </sub>
        </a>
      </td>
  </table>
</div>

<div align='right'>
  
  [Voltar ao topo ⬆️](#topo)

</div>
