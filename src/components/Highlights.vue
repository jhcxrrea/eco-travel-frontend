<template>
  <section class="highlights">
    <div class="container">
      <h2 class="text-center">Destaques</h2>
      <div class="row">
        <!-- Exemplo de destaque -->
        <div class="col-md-4">
          <div class="highlight-card">
            <img src="@/assets/highlight1.jpg" class="card-img-top" alt="Destaque 1">
            <div class="card-body">
              <h5 class="card-title">Destaque 1</h5>
              <p class="card-text">Descrição do destaque 1.</p>
              <a href="#" class="btn btn-primary">Saiba Mais</a>
            </div>
          </div>
        </div>
        <!-- Repita o cartão para mais destaques -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Highlights'
}
</script>

<style scoped>
.highlights {
  padding: 4rem 1rem;
}

.highlight-card {
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
