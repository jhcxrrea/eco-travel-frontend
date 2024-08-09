<template>
  <div class="card activity-card mb-4 shadow-sm">
    <div class="card-body">
      <h5 class="card-title">{{ activity.title }}</h5>
      <p class="card-text">{{ activity.description }}</p>
      <p class="card-text"><small class="text-muted">{{ activity.dateTime }}</small></p>
      <p class="card-text"><strong>Duration:</strong> {{ activity.duration }} minutes</p>
      <router-link class="btn btn-primary" :to="{ name: 'ActivityDetails', params: { id: activity.id } }">
        <i class="bi bi-calendar-event"></i> More Info
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activity: {
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

.btn-primary {
  background-color: #8A9A5B;
  border: none;
}

.btn-primary:hover {
  background-color: #6C7A59;
}
</style>
