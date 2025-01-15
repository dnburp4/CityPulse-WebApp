<template>
    <div class="star-rating">
      <div
        v-for="i in maxStars"
        :key="i"
        @click="setRating(i)"
        @mouseover="hoverRating(i)"
        @mouseleave="resetHover"
        :class="['star', i <= (isHovered ? hoverValue : rating) ? 'filled' : '']"
        :aria-label="`Bewerte ${i} Sterne`"
        role="button"
        tabindex="0"
        @keydown.space.prevent="setRating(i)"
        @keydown.enter.prevent="setRating(i)"
      >
        ★
      </div>
    </div>
  </template>
  
  <script>
  import { ref, watch } from 'vue';
  
  export default {
    props: {
      modelValue: {
        type: Number,
        default: 0,
      },
      maxStars: {
        type: Number,
        default: 5,
      },
    },
    setup(props, { emit }) {
      const rating = ref(props.modelValue);
      const isHovered = ref(false);
      const hoverValue = ref(0);
  
      const setRating = (newRating) => {
        rating.value = newRating;
        emit('update:modelValue', newRating); // Ermöglicht v-model-Synchronisation
      };
  
      const hoverRating = (value) => {
        isHovered.value = true;
        hoverValue.value = value;
      };
  
      const resetHover = () => {
        isHovered.value = false;
        hoverValue.value = 0;
      };
  
      // Beobachtet externe Änderungen an modelValue
      watch(() => props.modelValue, (newValue) => {
        rating.value = newValue;
      });
  
      return {
        rating,
        isHovered,
        hoverValue,
        hoverRating,
        resetHover,
        setRating,
      };
    },
  };
  </script>
  
  <style scoped>
  .star-rating {
    display: inline-block;
  }
  
  .star {
    display: inline-block;
    font-size: 24px;
    cursor: pointer;
    margin: 2px;
    color: rgb(222, 222, 222);
    transition: color 0.2s ease;
  }
  
  .filled {
    color: gold;
  }
  
  .star:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
  </style>
  