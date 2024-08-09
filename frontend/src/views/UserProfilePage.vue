<template>
  <div>
    <header class="text-center my-5">
      <h1>Seu Perfil</h1>
      <p class="lead">Gerencie suas informações e preferências.</p>
    </header>
    
    <section class="profile-details my-5">
      <div class="row">
        <div class="col-md-4">
          <img src="profile-picture.jpg" alt="Foto de Perfil" class="img-fluid rounded-circle mb-3" />
        </div>
        <div class="col-md-8">
          <h3>Informações do Usuário</h3>
          <p>Nome: Usuário Exemplo</p>
          <p>Email: usuario@exemplo.com</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'UserProfilePage'
}
</script>

<style scoped>
.profile-details img {
  max-width: 150px;
  border: 2px solid #ddd;
}
</style>
