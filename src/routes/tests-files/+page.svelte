<!-- <script>
    import { onMount, afterUpdate } from 'svelte';
    import { onCleanup } from 'svelte';
  
    let currentIndex = 0;
  
    const partners = [
      "/partners/bulclimaLogo-removebg-preview.png",
      "/partners/techmartLogo.png",
      "/partners/metroLogo.png",
      // Add more partner images as needed
    ];
  
    let interval;
  
    onMount(() => {
      startCarousel();
    });
  
    afterUpdate(() => {
      startCarousel();
    });
  
    onCleanup(() => {
      clearInterval(interval);
    });
  
    function startCarousel() {
      clearInterval(interval);
      interval = setInterval(() => {
        nextPartner();
      }, 5000); // Change the interval according to your preference
    }
  
    function nextPartner() {
      currentIndex = (currentIndex + 1) % partners.length;
    }
  
    function prevPartner() {
      currentIndex = (currentIndex - 1 + partners.length) % partners.length;
    }
  
    function goToPartner(index) {
      currentIndex = index;
    }
  </script>
  
  <style>
    /* ... your existing styles ... */
  
    .carousel-container {
      position: relative;
    }
  
    .arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      font-size: 24px;
      color: #fff;
    }
  
    .arrow-left {
      left: 10px;
    }
  
    .arrow-right {
      right: 10px;
    }
  
    .dots {
      text-align: center;
      margin-top: 10px;
    }
  
    .dot {
      display: inline-block;
      width: 10px;
      height: 10px;
      margin: 0 5px;
      background-color: #fff;
      border-radius: 50%;
      cursor: pointer;
    }
  
    .dot.active {
      background-color: #000;
    }
  </style>
  
  <div class="main-title">
    Нашите партньори
  </div>
  
  <div class="carousel-container">
    <div class="partners">
      {#each partners as partner, index (partner)}
        <div class="partners-item" class:selected={currentIndex === index}>
          <img src={partner} alt={`Img ${index + 1}`}>
          <div class="background"></div>
        </div>
      {/each}
    </div>
  
    <div class="arrow arrow-left" on:click={prevPartner}>&lt;</div>
    <div class="arrow arrow-right" on:click={nextPartner}>&gt;</div>
  
    <div class="dots">
      {#each partners as _, index (index)}
        <div
        class="dot {active: currentIndex === index}"
          on:click={() => goToPartner(index)}
        ></div>
      {/each}
    </div>
  </div>
   -->