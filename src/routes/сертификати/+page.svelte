<script>
	export let title = 'Сертификати | MP Clima';
	export let description =
		'Разгледайте нашите сертификати и лицензи, удостоверяващи качеството и професионализма на MP Clima. Гаранция за надеждност и високи стандарти при монтаж и обслужване на климатични системи';

	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	export let galleryID = 'gallery-01';

	let images = [
		{
			largeURL: '/images/certicates/images/certificate1.jpg',
			thumbnailURL: '/images/certicates/thumbs/certificate1.jpg',
			galleryClass: 'card',
			width: 679,
			height: 960
		},
		{
			largeURL: '/images/certicates/images/certificate2.jpg',
			thumbnailURL: '/images/certicates/thumbs/certificate2.jpg',
			galleryClass: 'card',
			width: 1319,
			height: 960
		},
		{
			largeURL: '/images/certicates/images/certificate3.jpg',
			thumbnailURL: '/images/certicates/thumbs/certificate3.jpg',
			galleryClass: 'card',
			width: 679,
			height: 960
		},
		{
			largeURL: '/images/certicates/images/certificate5.jpg',
			thumbnailURL: '/images/certicates/thumbs/certificate5.jpg',
			galleryClass: 'card',
			width: 679,
			height: 960
		},
		{
			largeURL: '/images/certicates/images/certificate4.jpg',
			thumbnailURL: '/images/certicates/thumbs/certificate4.jpg',
			galleryClass: 'card',
			width: 679,
			height: 960
		}
	];
	let column1Images = images.slice(0, 2); // Certificates 1 and 2
	let column2Images = images.slice(2, 5);

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
	<meta
		name="keywords"
		content="климатици, montaji, sertifikati, licenzi, MP Clima, kvalitet, надеждност, profesionalizam, klimachni sistemi, монтажи na klimatici, обслужване, гаранция za kvalitet, klima sistemi, profesionalni uslugi, montaj na klima, energoefektivnost, poddržka, надеждна климатизация, гарантирано качество."
	/>
	<!-- Twitter Card тагове -->
	<meta name="twitter:card" content="/static/logo_square.jpg" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="/static/logo_square.jpg" />
	<meta name="twitter:image:alt" content="Сертификати" />

	<!-- Open Graph тагове (за Facebook и други) -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="/static/logo_square.jpg" />
	<meta property="og:image:alt" content="Сертификати" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="/галерия" />
</svelte:head>

<div class="main-title">
	<h1 class="main-title-header">Сертификати и лицензи</h1>
</div>

<div class="container">
	<div class="column">
		<div class="column-h"><h2>Сертификати</h2></div>
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
		<div class="column-h"><h2>Удостоверения</h2></div>
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
		padding: 0 20px 0 10px;
		margin: auto 0;
	}

	.column h2 {
		font-size: 1.7rem;
		min-width: 200px; /* Фиксирана ширина за хединга */
		margin: 0;
		color: white;
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
		width: 150px; /* Set the desired width */
		height: 200px; /* Set the desired height */
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
				minmax(120px, 1fr)
			); /* Подредба на няколко снимки в ред при по-големи екрани */
		}
	}

	@media screen and (min-width: 380px) {
		.column {
			width: 70%;
		}
	}
</style>
