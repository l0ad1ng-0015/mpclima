<script>
  import { onMount } from 'svelte';

  onMount(() => {
  });

</script>

<!-- <h1>Нашите партньори:</h1> -->

<div class="main-title">
  Нашите партньори
</div>

<div class="partners">
  <div class="partners-item1">
    <img src="/partners/bulclimaLogo.png" alt="Img 1">
    <div class="background"></div>
  </div>
  <div class="partners-item">
    <img src="/partners/techmartLogo.png" alt="Img 2">
    <div class="background"></div>
  </div>
  <div class="partners-item3">
    <img src="/partners/generalLogo.png" alt="Img 3">
    <div class="background"></div>
  </div>
  <div class="partners-item4">
    <img src="/partners/magnum7Logo.png" alt="Img 4">
    <div class="background"></div>
  </div>
  <div class="partners-item">
    <img src="/partners/metroLogo.png" alt="Img 5">
    <div class="background"></div>
  </div>
  <div class="partners-item">
    <img src="/partners/mitsubishi_electricLogo.png" alt="Img 6">
    <div class="background"></div>
  </div>
  <div class="partners-item">
    <img src="/partners/mitsubishi_heavyLogo.png" alt="Img 7">
    <div class="background"></div>
  </div>
  <div class="partners-item">
    <img src="/partners/GREE-logo.png" alt="Img 8">
    <div class="background"></div>
  </div>
  <div class="partners-item">
    <img src="/partners/daikinLogo.png" alt="Img 9">
    <div class="background"></div>
  </div>
  <div class="partners-item10">
    <img src="/partners/auxLogo.png" alt="Img 10">
    <div class="background"></div>
  </div>
  <div class="partners-item11">
    <img src="/partners/toshibaLogo.png" alt="Img 11">
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
    width: 50%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.297);
    opacity: 0.5;
    z-index: 1;
  } */


  .partners {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 3rem;
    background: rgba(0, 0, 0, 0.577);
    border-radius: 20px;
  }

  .partners-item {
    /* background: rgba(0, 0, 0, 0.297); */
    margin: 20px;
    text-align: center;
    position: relative;
    transition: transform 0.3s ease;
  }
  /* .partners-item6 {
    background: rgba(255, 255, 255, 0.564);
  } */


  .partners-item:hover {
    transform: scale(1.1); /* Scale up the partner item on hover */
  }
  

  .partners-item img {
    max-width: 100%;
    width: 350px;
    height: auto;
    z-index: 2;
    align-items: center;
    justify-content: center;
  }
  
  .partners-item1, .partners-item3, .partners-item4, .partners-item10, .partners-item11 {
    margin: 20px;
    text-align: center;
    position: relative;
    transition: transform 0.3s ease;
  }

  .partners-item1 img {
      margin-top: 17px;
      max-width: 100%;
      width: 390px;
      height: auto;
      z-index: 2;
      align-items: center;
    }
      .partners-item1:hover {
      transform: scale(1.1);
      }


  .partners-item3 img {
      margin-top: 27px;
      max-width: 100%;
      width: 420px;
      height: auto;
      z-index: 2;
      align-items: center;
  }
      .partners-item3:hover {
        transform: scale(1.1);
      }


  .partners-item4 img {
      margin-top: 10px;
      max-width: 100%;
      width: 300px;
      height: auto;
      z-index: 2;
      align-items: center;
    }
      .partners-item4:hover {
          transform: scale(1.1);
      }

  .partners-item10 img {
    max-width: 100%;
    width: 300px;
    height: auto;
    z-index: 2;
    align-items: center;
  }
      .partners-item10:hover {
        transform: scale(1.1);
      }


      .partners-item11 img {
        max-width: 100%;
        width: 450px;
        height: auto;
        z-index: 2;
        align-items: center;
      }
           .partners-item11:hover {
              transform: scale(1.1);
            }
            
            
        
            
            
      .partners-item + .partners-item {
          margin-left: 70px; /* Adjust the margin between items */
      }
</style>
