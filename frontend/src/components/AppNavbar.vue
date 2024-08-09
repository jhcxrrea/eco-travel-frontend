<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="logo">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="../assets/logo.png" alt="EcoTravel Logo" class="mr-3" />
        EcoTravel
      </a>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Início</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/search">Buscar</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/destinations">Destinos</router-link>
        </li>
        <li class="nav-item dropdown" v-if="isAuthenticated">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Perfil
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" to="/profile">Ver Perfil</router-link></li>
            <li><a class="dropdown-item" href="#" @click="logout">Sair</a></li>
          </ul>
        </li>
        <li class="nav-item" v-if="!isAuthenticated">
          <router-link class="nav-link" to="/login">Entrar</router-link>
        </li>
        <li class="nav-item" v-if="!isAuthenticated">
          <router-link class="nav-link" to="/register">Cadastrar</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      isAuthenticated: false // Substitua isso pela lógica de verificação de autenticação
    };
  },
  methods: {
    logout() {
      // Lógica de logout aqui
      this.isAuthenticated = false;
    }
  }
}
</script>

<style scoped>


.navbar {
  background-color: #f8f9fa;
  margin-bottom: 0;
  display: flex;
  justify-content: space-between
}

.navbar-brand {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #367733;
  font-size: 20px;
  display: flex;
  align-items: center;
}

.navbar-brand:hover {
  color: #367733;
  filter: opacity(0.8);
  transition: 200ms ease-in-out;
}
.navbar-brand:focus {
  color: #367733;
}

.navbar-brand img {
  width: 30px;
  height: auto;
  margin-right: 15px;
}

.nav-link {
  color: #367733;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #2a612c;
}

.navbar-nav {
  flex-direction: row;
}

.navbar-nav .nav-item {
  margin-left: 15px;
}

@media (max-width: 767px) {
  .navbar-nav {
    flex-direction: column;
  }

  .nav-item {
    margin-left: 0;
    margin-bottom: 10px;
  }

  .navbar-brand {
    margin-bottom: 10px;
  }
}
</style>
