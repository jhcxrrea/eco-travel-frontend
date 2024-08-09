<template>
  <div class="container-max-width">
    <!-- Banner -->
    <BannerSection />

    <!-- Destaques -->
    <section class="highlight-section text-center my-5">
      <h2>Destinos em Destaque</h2>
      <p class="lead">Confira nossos principais destinos para uma experiência inesquecível.</p>
      <div class="row">
        <div class="col-md-4">
          <DestinationCard :destination="featuredDestinations[0]" />
        </div>
        <div class="col-md-4">
          <DestinationCard :destination="featuredDestinations[1]" />
        </div>
        <div class="col-md-4">
          <DestinationCard :destination="featuredDestinations[2]" />
        </div>
      </div>
    </section>

    <!-- Explorar Mais Destinos -->
    <section class="destinations-section my-5">
      <h2 class="text-center mb-4">Explore Mais Destinos</h2>
      <div class="row">
        <div class="col-md-4" v-for="destination in destinations" :key="destination.id">
          <DestinationCard :destination="destination" />
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section text-center">
      <h2>Pronto para Explorar?</h2>
      <p class="lead">Junte-se a nós hoje e comece sua aventura!</p>
      <router-link to="/register" class="btn btn-primary">Inscreva-se Agora</router-link>
    </section>
  </div>
</template>

<script>
import BannerSection from '../components/BannerSection.vue';
import DestinationCard from '../components/DestinationCard.vue';

export default {
  name: 'HomePage',
  components: {
    BannerSection,
    DestinationCard
  },
  data() {
    return {
      destinations: [
        { id: '1', name: 'Destino 1', description: 'Descrição 1', images: ['image1.jpg'] },
        { id: '2', name: 'Destino 2', description: 'Descrição 2', images: ['image2.jpg'] },
        { id: '3', name: 'Destino 3', description: 'Descrição 3', images: ['image3.jpg'] },
        { id: '4', name: 'Destino 4', description: 'Descrição 4', images: ['image4.jpg'] },
        { id: '5', name: 'Destino 5', description: 'Descrição 5', images: ['image5.jpg'] },
        { id: '6', name: 'Destino 6', description: 'Descrição 6', images: ['image6.jpg'] }
      ],
      featuredDestinations: [
        { id: '1', name: 'Destino em Destaque 1', description: 'Descrição em Destaque 1', images: ['image1.jpg'] },
        { id: '2', name: 'Destino em Destaque 2', description: 'Descrição em Destaque 2', images: ['image2.jpg'] },
        { id: '3', name: 'Destino em Destaque 3', description: 'Descrição em Destaque 3', images: ['image3.jpg'] }
      ]
    };
  }
}
</script>

<style scoped>
.container-max-width {
  max-width: 1060px;
  margin: 0 auto; /* Centraliza o contêiner dentro da página */
}

/* Estilo para a seção de destaque */
.highlight-section {
  background-color: #F8F9FA;
  padding: 40px 0;
}

/* Estilo para a seção de chamada para ação */
.cta-section {
  background-color: #8A9A5B; /* Verde Musgo */
  color: #FFFFFF;
  padding: 40px 0;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.btn-primary {
  background-color: #6C7A59; /* Tom mais escuro de verde */
  border-color: #6C7A59;
}

.btn-primary:hover {
  background-color: #5A6B4F; /* Tom ainda mais escuro para hover */
  border-color: #5A6B4F;
}
</style>
