<script>
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';

	let images = [
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

	let internalImages = images.slice(0, 6);
	let externalImages = images.slice(9);

	let activeGallery = 'internal';
	let galleryID = 'my-gallery';

	function handleImageLoad(image, event) {
		console.log('Image loaded:', image.largeURL);
		const { naturalWidth, naturalHeight } = event.target;
		console.log('Natural dimensions:', naturalWidth, naturalHeight);
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

<div class="gallery" id={galleryID} style="  min-height: 1000px;">
	{#if activeGallery === 'internal'}
		<div class="gallery-column">
			{#each internalImages.slice(0, 3) as image (image.largeURL)}
				<a
					href={image.largeURL}
					data-pswp-width={image.width}
					data-pswp-height={image.height}
					class={image.galleryClass}
				>
					<img
						src={image.thumbnailURL || '/placeholder.svg'}
						alt=""
						on:load={(event) => handleImageLoad(image, event)}
					/>
				</a>
			{/each}
		</div>

		<div class="gallery-column">
			{#each internalImages.slice(3) as image (image.largeURL)}
				<a
					href={image.largeURL}
					data-pswp-width={image.width}
					data-pswp-height={image.height}
					class={image.galleryClass}
				>
					<img
						src={image.thumbnailURL || '/placeholder.svg'}
						alt=""
						on:load={(event) => handleImageLoad(image, event)}
					/>
				</a>
			{/each}
		</div>
	{:else}
		<div class="gallery-column">
			{#each externalImages.slice(0, 5) as image (image.largeURL)}
				<a
					href={image.largeURL}
					data-pswp-width={image.width}
					data-pswp-height={image.height}
					class={image.galleryClass}
				>
					<img
						src={image.thumbnailURL || '/placeholder.svg'}
						alt=""
						on:load={(event) => handleImageLoad(image, event)}
					/>
				</a>
			{/each}
		</div>
		<div class="gallery-column">
			{#each externalImages.slice(10) as image (image.largeURL)}
				<a
					href={image.largeURL}
					data-pswp-width={image.width}
					data-pswp-height={image.height}
					class={image.galleryClass}
				>
					<img
						src={image.thumbnailURL || '/placeholder.svg'}
						alt=""
						on:load={(event) => handleImageLoad(image, event)}
					/>
				</a>
			{/each}
		</div>
	{/if}
</div>

<style>
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
