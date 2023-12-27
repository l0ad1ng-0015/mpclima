<script>
  import { onMount } from 'svelte';

  onMount(() => {
    // This function will be executed after the component is mounted
    // You can add your logic here if needed
  });
</script>

<h1>Нашите партньори:</h1>

<div class="partners">
  <div class="partners-item">
    <img src="/partners/bulclimaLogo-removebg-preview.png" alt="Img 1">
    <div class="background"></div>
  </div>
  <div class="partners-item">
    <img src="/partners/techmartLogo.png" alt="Img 2">
    <div class="background"></div>
  </div>
  <div class="partners-item">
    <img src="/partners/metroLogo.png" alt="Img 3">
    <div class="background"></div>
  </div>
</div>

<style>
  h1 {
    font-size: 50px;
  }

  .partners-item {
    display: flex;
    position: relative;
  }

  .background {
    position: absolute;
    top: 50;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5; /* Adjust the opacity as needed */
    z-index: 1; /* Adjust the z-index to make sure it's behind the image */
  }

  .partners-item img {
    max-width: 100%;
    height: 100px;
    z-index: 2; /* Make sure the image is above the background */
  }

  .partners-item + .partners-item {
    margin-left: 70px; /* Adjust the margin between items */
  }
</style>
