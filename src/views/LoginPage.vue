<template>
  <div class="container d-flex align-items-center justify-content-center">
    <div class="login-wrapper text-center">
      <header class="mb-4">
        <h1 class="display-4">Login</h1>
        <p class="lead">Entre para acessar sua conta.</p>
      </header>
      
      <form class="form-login" @submit.prevent="login">
        <div class="form-group mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" id="email" class="form-control" v-model="email" required />
        </div>
        <div class="form-group mb-3">
          <label for="password" class="form-label">Senha</label>
          <input type="password" id="password" class="form-control" v-model="password" required />
        </div>
        <button type="submit" class="btn btn-primary btn-lg w-100">Entrar</button>
      </form>
      
      <div class="text-center mt-4">
        <router-link to="/register" class="btn btn-link">Criar uma conta</router-link>
        <router-link to="/recover" class="btn btn-link">Esqueci minha senha</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Implementar lógica de login aqui
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  background-color: #FFFFFF;
  height: 100vh;
  margin: 0;
}

.container {
  max-width: 500px;
  height: 34rem;
}

.login-wrapper {
  width: 100%;
}

.form-login {
  padding: 20px;
  border-radius: 8px;
  background-color: #FFFFFF;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transição suave */
}

.form-login:hover {
  transform: translateY(-5px); /* Efeito de elevação ao passar o mouse */
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

.form-label {
  font-weight: 700;
}

input.form-control {
  transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Transição suave para foco */
}

input.form-control:focus {
  border-color: #8A9A5B; /* Verde Musgo para o foco */
  box-shadow: 0 0 5px rgba(138, 154, 91, 0.5); /* Sombra com cor verde */
}

.btn-primary {
  transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Transição suave para hover */
}

.btn-primary:hover {
  background-color: #6C7A59; /* Tom mais escuro de verde para hover */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra ao passar o mouse */
}

.btn-link {
  color: #8A9A5B; /* Verde Musgo */
  text-decoration: none;
  transition: color 0.3s ease, text-decoration 0.3s ease; /* Transição suave */
}

.btn-link:hover {
  color: #6C7A59; /* Tom mais escuro de verde para hover */
  text-decoration: underline; /* Sublinhado no hover */
}

.btn-link:focus {
  color: #6C7A59; /* Tom mais escuro de verde para foco */
  outline: none; /* Remove o outline padrão do foco */
  text-decoration: underline; /* Sublinhado no foco */
}

/* Responsividade */
@media (max-width: 576px) {
  .container {
    max-width: 100%;
    padding: 20px;
  }

  .login-wrapper {
    padding: 15px;
  }
}
</style>
