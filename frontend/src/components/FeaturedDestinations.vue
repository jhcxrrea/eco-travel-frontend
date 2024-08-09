<template>
  <section class="featured-destinations">
    <div class="container">
      <h2 class="text-center">Destinos em Destaque</h2>
      <div class="row">
        <!-- Exemplo de cartão de destino -->
        <div class="col-md-4">
          <div class="destination-card">
            <img src="@/assets/destination1.jpg" class="card-img-top" alt="Destino 1">
            <div class="card-body">
              <h5 class="card-title">Destino 1</h5>
              <p class="card-text">Descrição do destino 1.</p>
              <a href="#" class="btn btn-success">Saiba Mais</a>
            </div>
          </div>
        </div>
        <!-- Repita o cartão para mais destinos -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturedDestinations'
}
</script>

<style scoped>
.featured-destinations {
  padding: 4rem 1rem;
}

.destination-card {
  border: 1px solid #D3D3D3;
  border-radius: 0.5rem;
  overflow: hidden;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card-body {
  text-align: center;
}

.btn-primary {
  background-color: #8A9A5B;
  border: none;
}
</style>
