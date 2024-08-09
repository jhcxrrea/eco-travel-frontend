# EcoTravel - Frontend

EcoTravel é uma plataforma de turismo que visa oferecer informações e opções sobre destinos ecológicos. O frontend do projeto é construído usando Vue.js e Bootstrap, proporcionando uma interface moderna e responsiva para usuários explorarem destinos e atividades.


## Dependências

O projeto utiliza as seguintes dependências principais:

- **Vue.js**: Framework JavaScript para construir interfaces de usuário.
- **Bootstrap**: Framework CSS para criar um design responsivo e estilizado.
- **Bootstrap Vue**: Biblioteca que integra Bootstrap com Vue.js.
- **Vue Router**: Biblioteca para gerenciamento de rotas no Vue.js.
- **Vuex**: Biblioteca para gerenciamento de estado no Vue.js.

Instale as dependências executando:

```bash
npm install
```


## Componentes Principais

### Banner.vue

- **Descrição**: Componente para exibir o banner principal na página inicial.
- **Responsabilidades**: Exibir uma imagem de destaque e uma chamada para ação.
- **Uso**: Importar e incluir `<Banner />` na página inicial (`HomePage.vue`).

### DestinationCard.vue

- **Descrição**: Componente para exibir um cartão com informações sobre um destino.
- **Responsabilidades**: Mostrar o nome, imagem e uma breve descrição do destino.
- **Uso**: Importar e incluir `<DestinationCard />` em `HomePage.vue` ou outras páginas que listam destinos.

### Navbar.vue

- **Descrição**: Componente de navegação no topo do site.
- **Responsabilidades**: Oferece links para as principais seções do site e inclui funcionalidades de login e logout.
- **Uso**: Importar e incluir `<Navbar />` em `App.vue` para que a barra de navegação apareça em todas as páginas.

### HomePage.vue

- **Descrição**: Página inicial do site.
- **Responsabilidades**: Exibir o banner, uma lista de destinos destacados e chamadas para ação.
- **Uso**: Página principal do aplicativo, acessada na raiz do site.

### LoginPage.vue

- **Descrição**: Página de login do usuário.
- **Responsabilidades**: Permitir que o usuário faça login na plataforma.
- **Uso**: Página acessível através da rota `/login`.

### RegisterPage.vue

- **Descrição**: Página de registro do usuário.
- **Responsabilidades**: Permitir que novos usuários se registrem na plataforma.
- **Uso**: Página acessível através da rota `/register`.

### ProfilePage.vue

- **Descrição**: Página de perfil do usuário.
- **Responsabilidades**: Exibir e permitir a edição das informações do perfil do usuário.
- **Uso**: Página acessível através da rota `/profile`, visível apenas quando o usuário estiver autenticado.

## Desenvolvimento

Para iniciar o ambiente de desenvolvimento, execute:

```bash
npm run serve
```

## Deploy

Para criar uma versão de produção da aplicação, execute:

```bash
npm run build
```

## Contribuição

Para contribuir com o projeto, siga estas etapas:

1. **Faça um Fork**: Crie uma cópia do repositório em sua conta do GitHub.
   - Vá para a página do repositório original e clique no botão "Fork" no canto superior direito.

2. **Clone o Repositório**: Clone o repositório forkado para sua máquina local.
```bash
    git clone https://github.com/jhcxrrea/eco-travel-frontend.git
```

## Licença

O projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.


