<script>
	import Pictures from '$lib/components/Pictures.svelte';
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';

	let activeGallery = 'internal';
	let galleryID = 'my-gallery';

	function switchGallery(gallery) {
		activeGallery = gallery;
	}

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#' + galleryID,
			children: 'a',
			pswpModule: () => import('photoswipe')
		});
		lightbox.init();

		return () => {
			lightbox.destroy();
		};
	});
</script>

<div class="gallery-container">
	<div class="gallery-switcher">
		<button class:active={activeGallery === 'internal'} on:click={() => switchGallery('internal')}>
			Вътрешни монтажи
		</button>
		<button class:active={activeGallery === 'external'} on:click={() => switchGallery('external')}>
			Външни монтажи
		</button>
	</div>
	<Pictures />
</div>

<style>
	.gallery-container {
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
	}

	.gallery-switcher {
		display: flex;
		justify-content: center;
		margin-bottom: 20px;
	}

	/* .gallery-switcher button {
		padding: 10px 20px;
		margin: 0 10px;
		background-color: #f0f0f0;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.3s;
	} */

	.gallery-switcher button.active {
		background-color: #007bff;
		color: white;
	}

	.gallery {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}

	.gallery-column {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 20px;
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
		background-color: red;
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
