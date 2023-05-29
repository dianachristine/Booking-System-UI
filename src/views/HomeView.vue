<script setup lang="ts">
</script>

<template>
  <!-- Background image -->
  <div
      class="text-center bg-image"
      style="
      background-image: url('src/assets/pink_background.png');
      background-size: cover;
      height: 100vh;
      margin-top: 58px;
      "
  >
      <div class="mask" style="
      background-color: rgba(0, 0, 0, 0.4);
      height: 100%;
      width: 100%;
      " >
        <div class="d-flex justify-content-center align-items-center h-100">
            <div class="text-white">
              <RouterLink to="/broneering/teenused" class="btn btn-outline-light btn-lg" role="button" >Broneeri aeg</RouterLink>            
            </div>
        </div>
      </div> 
  </div>
  <!-- Background image -->
</template>
