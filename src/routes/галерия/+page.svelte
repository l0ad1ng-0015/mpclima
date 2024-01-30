<script>
  import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	export let galleryID = "gallery-01";

	let images = [
		{
      largeURL: '/images/gallery-01/images/gallery1.jpg',
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
	Галерия
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


 
<!-- <div class="image-mosaic">
  <div
    class="card card-tall card-wide"
    style="background-image: url('https://picsum.photos/id/564/1200/800')"
  ></div>
  <div
    class="card card-tall"
    style="background-image: url('https://picsum.photos/id/566/800/530')"
  ></div>
  <div
    class="card"
    style="background-image: url('https://picsum.photos/id/575/800/530')"
  ></div>
  <div
    class="card"
    style="background-image: url('https://picsum.photos/id/626/800/530')"
  ></div>
  <div
    class="card"
    style="background-image: url('https://picsum.photos/id/667/800/530')"
  ></div>
  <div
    class="card"
    style="background-image: url('https://picsum.photos/id/678/800/530')"
  ></div>
  <div
    class="card card-wide"
    style="background-image: url('https://picsum.photos/id/695/800/530')"
  ></div>
  <div
    class="card"
    style="background-image: url('https://picsum.photos/id/683/800/530')"
  ></div>
  <div
    class="card"
    style="background-image: url('https://picsum.photos/id/693/800/530')"
  ></div>
  <div
    class="card"
    style="background-image: url('https://picsum.photos/id/715/800/530')"
  ></div>
  <div
    class="card"
    style="background-image: url('https://picsum.photos/id/610/800/530')"
  ></div>
  <div
    class="card"
    style="background-image: url('https://picsum.photos/id/599/800/530')"
  ></div>
</div>  -->

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
</style>