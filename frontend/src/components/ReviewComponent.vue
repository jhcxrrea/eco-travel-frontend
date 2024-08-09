<template>
    <div class="review-card card mb-4 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">Reviews</h5>
        <div v-for="review in reviews" :key="review.id" class="review mb-3">
          <div class="review-header">
            <strong>{{ review.userName }}</strong>
            <small class="text-muted">{{ review.date }}</small>
          </div>
          <p class="review-text">{{ review.text }}</p>
          <div class="review-rating">
            <i class="bi bi-star-fill text-warning"></i> {{ review.rating }}/5
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      reviews: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .review-card {
    border-radius: 0.75rem;
    transition: box-shadow 0.3s ease;
  }
  
  .review-card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .review-header {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  
  .review-text {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .review-rating {
    font-size: 1.1rem;
    color: #FFD700;
  }
  </style>
  