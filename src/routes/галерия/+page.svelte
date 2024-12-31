<script>
	export let title = 'Галерия | MP Clima';
	export let description =
		'Разгледайте нашата галерия с реални проекти монтажи на климатици. Тук ще откриете примери за качественото обслужване и монтажи, които извършваме, както и различни типове климатични системи, които предлагаме за вашия дом или офис.';

	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	export let galleryID = 'gallery-01';

	let images = [
		{
			largeURL: '/images/gallery-01/images/gallery1.jpg',
			thumbnailURL: '/images/gallery-01/thumbs/gallery1.jpg',
			galleryClass: 'card',
			width: 540,
			height: 960
		},
		{
			largeURL: '/images/gallery-01/images/gallery2.jpg',
			thumbnailURL: '/images/gallery-01/thumbs/gallery2.jpg',
			// thumbnailURL: '/images/gallery-01/images/gallery2.jpg',
			galleryClass: 'card',
			width: 720,
			height: 960
		},
		{
			largeURL: '/images/gallery-01/images/gallery3.jpg',
			thumbnailURL: '/images/gallery-01/thumbs/gallery3.jpg',
			galleryClass: 'card',
			width: 1350,
			height: 1800
		},
		{
			largeURL: '/images/gallery-01/images/gallery4.jpg',
			thumbnailURL: '/images/gallery-01/thumbs/gallery4.jpg',
			galleryClass: 'card',
			width: 641,
			height: 855
		},
		{
			largeURL: '/images/gallery-01/images/gallery5.jpg',
			thumbnailURL: '/images/gallery-01/thumbs/gallery5.jpg',
			galleryClass: 'card',
			width: 720,
			height: 960
		},
		{
			largeURL: '/images/gallery-01/images/gallery6.jpg',
			thumbnailURL: '/images/gallery-01/thumbs/gallery6.jpg',
			galleryClass: 'card',
			width: 720,
			height: 960
		},
		{
			largeURL: '/images/gallery-01/images/gallery7.jpg',
			thumbnailURL: '/images/gallery-01/thumbs/gallery7.jpg',
			galleryClass: 'card',
			width: 720,
			height: 960
		},
		{
			largeURL: '/images/gallery-01/images/gallery8.jpg',
			thumbnailURL: '/images/gallery-01/thumbs/gallery8.jpg',
			galleryClass: 'card',
			width: 222,
			height: 244
		}
	];

	function handleImageLoad(image, event) {
		console.log('Image..');
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

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Twitter Card тагове -->
	<meta name="twitter:card" content="static/logo_square.jpg" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://mpclima.bg/static/logo_square.jpg" />
	<meta name="twitter:image:alt" content="Продажба" />

	<!-- Open Graph тагове (за Facebook и други) -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="https://mpclima.bg/static/logo_square.jpg" />
	<meta property="og:image:alt" content="Продажба" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mpclima.bg/продажба" />
</svelte:head>

<div class="main-title">
	<h1 class="main-title-header">Галерия</h1>
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
		max-width: 800px;
		margin: 0 auto;
		margin-bottom: 60px;
		padding: 1rem;
		background-color: #0000007e;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.main-title-header {
		text-align: center;
		font-size: 2.5rem;
		color: white;
		margin-top: 10px !important;
		margin-bottom: 10px;
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
		/* background: #353535; */
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
		border-radius: 10px;
	}

	.card:hover {
		transform: scale(1.1); /* Scale up the partner item on hover */
		transition: 0.3s;
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
