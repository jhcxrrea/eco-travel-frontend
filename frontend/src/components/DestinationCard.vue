<template>
  <div class="card destination-card mb-4 shadow-sm">
    <img :src="destination.images[0]" class="card-img-top" alt="Destination Image">
    <div class="card-body">
      <h5 class="card-title">{{ destination.name }}</h5>
      <p class="card-text">{{ destination.description }}</p>
      <router-link class="btn btn-success" :to="{ name: 'DestinationDetails', params: { id: destination.id } }">
        <i class="bi bi-geo-alt"></i> Ver Mais
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    destination: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 0.75rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}

.btn-success {
  background-color: #8A9A5B;
  border: none;
}

.btn-success:hover {
  background-color: #6C7A59;
}

</style>
