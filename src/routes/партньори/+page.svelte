<script>
  import { onMount } from 'svelte';

  onMount(() => {
    // This function will be executed after the component is mounted
    // You can add your logic here if needed
  });
</script>

<!-- <h1>Нашите партньори:</h1> -->

<div class="main-title">
  Нашите партньори
</div>

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
  <div class="partners-item">
    <img src="/partners/magnum7Logo.png" alt="Img 3">
    <div class="background"></div>
  </div>
  <div class="partners-item">
    <img src="/partners/generalLogo.png" alt="Img 3">
    <div class="background"></div>
  </div>
</div>

<style>
  .main-title {
    text-align: center;
    padding: 20px 10px;
    margin: 40px 0;
    font-size: 40px;
    font-weight: bold;
    background-color: #0000007e;
    color: #fff;
  }

  h1 {
    font-size: 50px;
  }

  /* .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(red, green, blue, alpha);
    opacity: 0.5;
    z-index: 1;
  } */


  .partners {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .partners-item {
    
    margin: 20px;
    text-align: center;
    position: relative;
    transition: transform 0.3s ease;
  }

  .partners-item:hover {
    transform: scale(1.1); /* Scale up the partner item on hover */
  }

  .partners-item img {
    max-width: 100%;
    height: auto;
    z-index: 2;
  }

  .partners-item + .partners-item {
    margin-left: 70px; /* Adjust the margin between items */
  }
</style>
