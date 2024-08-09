<template>
  <transition name="fade">
    <div class="spinner-overlay" v-if="isLoading">
      <div class="spinner-container">
        <img src="https://svgshare.com/i/19BF.svg" alt="Spinner" class="spinner-image"/>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    isLoading: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.spinner-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white; /* Cor de fundo com opacidade */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  filter: brightness(90%);
  transition: opacity 0.5s ease; /* Transição suave */
}

.spinner-container {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse 1.5s infinite;
}

.spinner-image {
  width: 100px; /* Ajuste o tamanho conforme necessário */
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Animação de transição suave para o fade */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
