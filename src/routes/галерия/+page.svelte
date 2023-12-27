<script>
   let categories = [
    { title: 'Монтаж на вътрешни тела', slug: 'internal' },
    { title: 'Монтаж на външни тела', slug: 'external' },
  ]; 

  let images = [
    { src: "/gallery/gallery1.jpg", category: 'internal' },
    { src: "/gallery/gallery2.jpg", category: 'external' },
    { src: "/gallery/gallery3.jpg", category: 'external' },
    { src: "/gallery/gallery4.jpg", category: 'external' },
    { src: "/gallery/gallery5.jpg", category: 'external' },
    { src: "/gallery/gallery6.jpg", category: 'external' },
    { src: "/gallery/gallery7.jpg", category: 'external' },
    { src: "/gallery/gallery8.jpg", category: 'external' },
  ];

  let selectedImage = null;
  let selectedCategory = null;

  function openImage(index) {
    selectedImage = index;
  }

  function closeImage() {
    selectedImage = null;
  }

  function filterImages(category) {
    selectedCategory = category;
  }

  function clearFilter() {
    selectedCategory = null;
  }
</script>

<style>
  .gallery-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .thumbnail {
    width: 150px;
    height: 150px;
    margin: 10px;
    overflow: hidden;
    cursor: pointer;
  }

  .thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }

  .thumbnail:hover img {
    transform: scale(1.1);
  }

  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .lightbox img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
  }

  .close-button {
    position: absolute;
    top: 1px;
    right: 20px;
    cursor: pointer;
    color: #fff;
    font-size: 30px;
  }

  .category-buttons {
    margin-top: 10px;
  }
</style>

<div class="category-buttons">
  {#if selectedCategory === null}
    <button on:click={() => filterImages('all')}>Виж всички</button>
  {/if}
  {#each categories as { title, slug }}
    <button on:click={() => filterImages(slug)}>{title}</button>
  {/each}
</div>

<div class="gallery-container">
  {#each images as { src, category }, index (src)}
    {#if selectedCategory === 'all' || selectedCategory === category}
      <div class="thumbnail" on:click={() => openImage(index)}>
        <img src={src} alt={`Image ${index + 1}`} />
      </div>
    {/if}
  {/each}
</div>

{#if selectedImage !== null && selectedCategory !== 'all'}
  <div class="lightbox" on:click={() => closeImage()}>
    <span class="close-button" on:click={() => closeImage()}>&times;</span>
    <img src={images[selectedImage].src} alt={`Image ${selectedImage + 1}`} />
  </div>
{/if}
