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


<!-- 
   <script>
    import { onMount } from 'svelte';
    import PhotoSwipeLightbox from 'photoswipe/lightbox';
    import 'photoswipe/style.css';
    export let galleryID = "gallery-01";
  
    let images = [
      {
        largeURL: '/partners/bulclimaLogo-removebg-preview.png',
        thumbnailURL: '/images/gallery-01/thumbs/gallery1.jpg',
        galleryClass: 'card',
        width: 540,
        height: 960,
      },
      {
        largeURL: '/images/gallery-01/images/gallery2.jpg',
        thumbnailURL: '/images/gallery-01/thumbs/gallery2.jpg',
        // thumbnailURL: '/images/gallery-01/images/gallery2.jpg',
        galleryClass: 'card',
        width: 720,
        height: 960,
      },
      {
        largeURL: '/images/gallery-01/images/gallery3.jpg',
        thumbnailURL: '/images/gallery-01/thumbs/gallery3.jpg',
        galleryClass: 'card',
        width: 1350,
        height: 1800,
      },
      {
        largeURL: '/images/gallery-01/images/gallery4.jpg',
        thumbnailURL: '/images/gallery-01/thumbs/gallery4.jpg',
        galleryClass: 'card',
        width: 641,
        height: 855,
      },
      {
        largeURL: '/images/gallery-01/images/gallery5.jpg',
        thumbnailURL: '/images/gallery-01/thumbs/gallery5.jpg',
        galleryClass: 'card',
        width: 720,
        height: 960,
      },
      {
        largeURL: '/images/gallery-01/images/gallery6.jpg',
        thumbnailURL: '/images/gallery-01/thumbs/gallery6.jpg',
        galleryClass: 'card',
        width: 720,
        height: 960,
      },
      {
        largeURL: '/images/gallery-01/images/gallery7.jpg',
        thumbnailURL: '/images/gallery-01/thumbs/gallery7.jpg',
        galleryClass: 'card',
        width: 720,
        height: 960,
      },
      {
        largeURL: '/images/gallery-01/images/gallery8.jpg',
        thumbnailURL: '/images/gallery-01/thumbs/gallery8.jpg',
        galleryClass: 'card',
        width: 222,
        height: 244,
      }
     ];
  
  
    function handleImageLoad(image, event) {
      console.log("Image..")
      const { naturalWidth, naturalHeight } = event.target;
      console.log(image, naturalWidth, naturalHeight);
    }
  
  
    onMount(() => {
      let lightbox = new PhotoSwipeLightbox({
        gallery: '#' + galleryID,
        children: 'a',
        pswpModule: () => import('photoswipe')
      });
      lightbox.init();
    });
  </script>
  
  <div class="main-title">
    Партньори
  </div>
    
  <div class="pswp-gallery image-mosaic" id={galleryID}>
    {#each images as image}
      <a
        href={image.largeURL}
        class={image.galleryClass}
        data-pswp-width={image.width}
        data-pswp-height={image.height}
        target="_blank"
        rel="noreferrer"
      >
         <img src={image.thumbnailURL} alt="" /> 
        {#if false}
          <img src={image.largeURL} alt="" on:load={(event) => handleImageLoad(image, event)} />
        {/if}      
      </a>
    {/each}
  </div>


 <style>
  .main-title {
    text-align: center;
    padding: 20px 10px;
    margin: 40px 0;
    margin-bottom: 50px;
    font-size: 40px;
    font-weight: bold;
    background-color: #0000007e; 
    color: #fff;     
  }
  
  .image-mosaic {
    display: grid;
    align-items: center;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-auto-rows: 240px;
  }
  
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #353535;
    font-size: 3rem;
    color: #fff;
    box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    transition: tranform 0.5s ease;
    /* transition: all 500ms; */
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;
  }
  
  .card:hover {
      transform: scale(1.1); /* Scale up the partner item on hover */
    }
  
  @media screen and (min-width: 600px) {
    .card-tall {
      grid-row: span 2 / auto;
    }
  
    .card-wide {
      grid-column: span 2 / auto;
    }
  }
  
  </style> -->


  <div class="nav">
    <script>
      import { onMount } from 'svelte';
      
      let isNavVisible = false;
      let currentPath = window.location.pathname;
      
      function toggleNav() {
        isNavVisible = !isNavVisible;
      }
      
      // Function to check if a link is the active link
      function isActiveLink(link) {
        return currentPath === link;
      }
      
      // Update currentPath on component mount to handle initial state
      onMount(() => {
        currentPath = window.location.pathname;
      });
    </script>
    
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}><path fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h18M3 12h18M3 18h18"/></svg>
    </div>
    
  
    <img src="/images/logo.png" class="logo" />
    <ul>
      <li><a href="/" class:active={isActiveLink('/')}>Начало</a></li>
      <li class="submenu">
        <a href="#" class:active={isActiveLink('/основаване-фирма')}>За нас</a>
        <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 0h16v16H0z" fill="none"/>
          <path d="M12.354 5.646a.5.5 0 01.353.854l-4.5 4.5a.5.5 0 01-.708 0l-4.5-4.5a.5.5 0 01.708-.708L8 10.293l4.646-4.647a.5.5 0 01.708 0z"/>
        </svg>
        <ul class="sub-nav">
          <li><a href="/основаване-фирма" class:active={isActiveLink('/основаване-фирма')}>Основаване Фирма</a></li>
          <li><a href="/партньори" class:active={isActiveLink('/партньори')}>Партньори</a></li>
          <li><a href="/галерия" class:active={isActiveLink('/галерия')}>Галерия</a></li>
          <li><a href="/tests-files" class:active={isActiveLink('/tests-files')}>File for tests</a></li>
        </ul>
      </li>
      <li class="submenu">
        <a href="/дейности" class:active={isActiveLink('/дейности')}>Услуги</a>
      </li>
      <li class="submenu">
        <a href="/свържете-се" class:active={isActiveLink('/свържете-се')}>Контакти</a>
      </li>
    </ul>
  </div>
  
  <style>
    .nav {
      height: 11rem;
      width: 93%;
      margin: auto;
      padding: 30px 0 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .logo {
      cursor: pointer;
      padding: 10px 0 0 30px;
      width: 350px;
      position: relative;
    }
    .nav ul li {
      list-style: none;
      display: inline-table;
      margin: 1dvh;
      position: relative;
    }
    .nav ul li a {
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
    }
    .nav ul li::after {
      content: '';
      height: 3px;
      width: 0;
      background: #0070bb;
      position: absolute;
      left: 0;
      bottom: -5px;
      transition: 0.5s;
    }
  
    .nav ul li:hover::after, .nav ul li a:hover::after {
      width: 100%;
    }
  
    .icon {
      width: 24px;
      height: 24px;
      fill: #fff;
      display: none;
    }
  
    .arrow {
      fill: #fff;
      margin-left: 5px;
    }
  
    /* Media query to show the icon only on screens with a maximum width of 768px */
    /* @media screen and (min-width: 600px) {
      .logo {
        cursor: pointer;
        padding: 10px 0 0 30px;
        width: 210px span 2 / auto; 
      }
    } */
  </style>
  