<script>
	export let title = 'Галерия | MP Clima';
	export let description =
		'Разгледайте нашата галерия с реални проекти монтажи на климатици. Тук ще откриете примери за качественото обслужване и монтажи, които извършваме, както и различни типове климатични системи, които предлагаме за вашия дом или офис.';

	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	export let galleryID = 'gallery-01';

	let images = [
		//ВЪТРЕШНИ МОНТАЖИ --->
		{
			largeURL: '/images/gallery-00/in/images/gallery1.jpg',
			thumbnailURL: '/images/gallery-00/in/thumbs/gallery1.jpg',
			galleryClass: 'card',
			width: 960,
			height: 1280
		},
		{
			largeURL: '/images/gallery-00/in/images/gallery2.jpg',
			thumbnailURL: '/images/gallery-00/in/thumbs/gallery2.jpg',
			galleryClass: 'card',
			width: 960,
			height: 1280
		},
		{
			largeURL: '/images/gallery-00/in/images/gallery3.jpg',
			thumbnailURL: '/images/gallery-00/in/thumbs/gallery3.jpg',
			galleryClass: 'card',
			width: 960,
			height: 1280
		},
		{
			largeURL: '/images/gallery-00/in/images/gallery4.jpg',
			thumbnailURL: '/images/gallery-00/in/thumbs/gallery4.jpg',
			galleryClass: 'card',
			width: 622,
			height: 1280
		},
		{
			largeURL: '/images/gallery-00/in/images/gallery5.jpg',
			thumbnailURL: '/images/gallery-00/in/thumbs/gallery5.jpg',
			galleryClass: 'card',
			width: 960,
			height: 1280
		},
		{
			largeURL: '/images/gallery-00/in/images/gallery6.jpg',
			thumbnailURL: '/images/gallery-00/in/thumbs/gallery6.jpg',
			galleryClass: 'card',
			width: 720,
			height: 1280
		},

		//ВЪНШНИ МОНТАЖИ --->
		{
			largeURL: '/images/gallery-00/out/images/gallery1.jpg',
			thumbnailURL: '/images/gallery-00/out/thumbs/gallery1.jpg',
			galleryClass: 'card',
			width: 1350,
			height: 1800
		},
		{
			largeURL: '/images/gallery-00/out/images/gallery2.jpg',
			thumbnailURL: '/images/gallery-00/out/thumbs/gallery2.jpg',
			// thumbnailURL: '/images/gallery-00/out/images/gallery2.jpg',
			galleryClass: 'card',
			width: 720,
			height: 1280
		},
		{
			largeURL: '/images/gallery-00/out/images/gallery3.jpg',
			thumbnailURL: '/images/gallery-00/out/thumbs/gallery3.jpg',
			galleryClass: 'card',
			width: 960,
			height: 1280
		},
		{
			largeURL: '/images/gallery-00/out/images/gallery4.jpg',
			thumbnailURL: '/images/gallery-00/out/thumbs/gallery4.jpg',
			galleryClass: 'card',
			width: 960,
			height: 1280
		},
		{
			largeURL: '/images/gallery-00/out/images/gallery5.jpg',
			thumbnailURL: '/images/gallery-00/out/thumbs/gallery5.jpg',
			galleryClass: 'card',
			width: 960,
			height: 1280
		},
		{
			largeURL: '/images/gallery-00/out/images/gallery6.jpg',
			thumbnailURL: '/images/gallery-00/out/thumbs/gallery6.jpg',
			galleryClass: 'card',
			width: 720,
			height: 1280
		},
		{
			largeURL: '/images/gallery-00/out/images/gallery7.jpg',
			thumbnailURL: '/images/gallery-00/out/thumbs/gallery7.jpg',
			galleryClass: 'card',
			width: 622,
			height: 1280
		},
		{
			largeURL: '/images/gallery-00/out/images/gallery8.jpg',
			thumbnailURL: '/images/gallery-00/out/thumbs/gallery8.jpg',
			galleryClass: 'card',
			width: 622,
			height: 1280
		},
		{
			largeURL: '/images/gallery-00/out/images/gallery9.jpg',
			thumbnailURL: '/images/gallery-00/out/thumbs/gallery9.jpg',
			galleryClass: 'card',
			width: 720,
			height: 1280
		},
		{
			largeURL: '/images/gallery-00/out/images/gallery10.jpg',
			thumbnailURL: '/images/gallery-00/out/thumbs/gallery10.jpg',
			galleryClass: 'card',
			width: 720,
			height: 1280
		}
	];

	let column1Images = images.slice(0, 6); // Gallery 1 and 2
	let column2Images = images.slice(6, 16);

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
	<meta name="twitter:card" content="/static/logo_square.jpg" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="/static/logo_square.jpg" />
	<meta name="twitter:image:alt" content="Продажба" />

	<!-- Open Graph тагове (за Facebook и други) -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="/static/logo_square.jpg" />
	<meta property="og:image:alt" content="Продажба" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="/галерия" />
</svelte:head>

<div class="main-title">
	<h1 class="main-title-header">Галерия</h1>
</div>

<div class="container">
	<div class="column">
		<div class="column-h"><h2>Монтаж на вътрешни тела</h2></div>
		<div class="pswp-gallery image-mosaic" id={galleryID}>
			{#each column1Images as image}
				<a
					href={image.largeURL}
					class={image.galleryClass}
					data-pswp-width={image.width}
					data-pswp-height={image.height}
					target="_blank"
					rel="noreferrer"
				>
					<div class="image-container">
						<img
							src={image.thumbnailURL}
							alt=""
							style="width: 150px; height: 200px; object-fit: cover;"
						/>
						<div class="svg-overlay">
							<svg
								width="34"
								height="34"
								viewBox="0 0 34 34"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M18 30q-.425 0-.712-.288T17 29v-10H7q-.425 0-.712-.288T6 18t.288-.712T7 17h10V7q0-.425.288-.712T18 6t.713.288T19 7v10h10q.425 0 .713.288T30 18t-.288.713T29 19H19v10q0 .425-.288.713T18 30z"
									fill="currentColor"
								/>
							</svg>
						</div>
					</div>
					{#if false}
						<img src={image.largeURL} alt="" on:load={(event) => handleImageLoad(image, event)} />
					{/if}
				</a>
			{/each}
		</div>
	</div>
	<div class="column">
		<div class="column-h"><h2>Монтаж на външни тела</h2></div>
		<div class="pswp-gallery image-mosaic" id={galleryID}>
			{#each column2Images as image}
				<a
					href={image.largeURL}
					class={image.galleryClass}
					data-pswp-width={image.width}
					data-pswp-height={image.height}
					target="_blank"
					rel="noreferrer"
				>
					<div class="image-container">
						<img
							src={image.thumbnailURL}
							alt=""
							style="width: 150px; height: 200px; object-fit: cover;"
						/>
						<div class="svg-overlay">
							<svg
								width="34"
								height="34"
								viewBox="0 0 34 34"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M18 30q-.425 0-.712-.288T17 29v-10H7q-.425 0-.712-.288T6 18t.288-.712T7 17h10V7q0-.425.288-.712T18 6t.713.288T19 7v10h10q.425 0 .713.288T30 18t-.288.713T29 19H19v10q0 .425-.288.713T18 30z"
									fill="currentColor"
								/>
							</svg>
						</div>
					</div>
					{#if false}
						<img src={image.largeURL} alt="" on:load={(event) => handleImageLoad(image, event)} />
					{/if}
				</a>
			{/each}
		</div>
	</div>
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

	.container {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem; /* Разстояние между колоните */
		justify-content: center;
	}

	.column {
		display: flex;
		align-items: flex-start;
		gap: 1rem; /* Разстояние между хединг и снимките */
		flex: 1 1 100%; /* Заема цял ред по подразбиране */
		max-width: 1200px; /* Максимална ширина за по-големи екрани */
		background-color: rgba(0, 0, 0, 0.594);
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
		border-radius: 8px;
		padding: 1rem;
	}

	.column-h {
		padding: 0 40px 0 30px;
		margin: auto 0;
	}

	.column h2 {
		font-size: 1.7rem;
		min-width: 200px; /* Фиксирана ширина за хединга */
		margin: 0;
		color: white;
		font-weight: 400;
	}

	@media screen and (max-width: 1400px) {
		.column {
			flex-direction: column; /* Подреждане едно под друго */
			align-items: center;
			text-align: center; /* Центриране на текста */
		}

		.column-h {
			padding: 0;
			margin: 0 20px;
		}

		.column h2 {
			font-size: 2rem;
			margin-bottom: 1rem; /* Разстояние под заглавието */
		}
	}

	.image-mosaic {
		display: grid;
		grid-template-columns: 1fr; /* Всички изображения ще са на една колона вътре в колоната */
		gap: 1rem;
		width: 100%;
	}

	.card img {
		border-radius: 10px;
		width: 100%;
		height: auto;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	.card img:hover {
		filter: brightness(0.5);
		transition: 0.1s;
		src: url(https://api.iconify.design/material-symbols:add-2-rounded.svg);
		/* mask-image: url(https://api.iconify.design/material-symbols:add-2-rounded.svg); */
		image-resolution: from-image;
	}

	.fixed-size {
		width: 20px; /* Set the desired width */
		height: 250px; /* Set the desired height */
		object-fit: cover; /* Ensure the image covers the area without distortion */
	}

	.image-container {
		position: relative;
		display: inline-block;
	}

	.svg-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
		color: white;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.image-container:hover .svg-overlay {
		opacity: 1;
	}

	@media screen and (min-width: 900px) {
		.image-mosaic {
			grid-template-columns: repeat(
				auto-fit,
				minmax(150px, 1fr)
			); /* Подредба на няколко снимки в ред при по-големи екрани */
		}
	}
	@media screen and (max-width: 585px) {
		.column h2 {
			font-size: 1.77rem;
		}
	}

	@media screen and (min-width: 380px) {
		.column {
			width: 70%;
		}
	}
</style>
