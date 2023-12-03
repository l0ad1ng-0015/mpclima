<!--TASKOVE
-Zoom unzoom button
-lightbox almost on full screen-->


<script>
    let images = [
      "/gallery/gallery1.jpg",
      "/gallery/gallery2.jpg",
      "/gallery/gallery3.jpg",
      "/gallery/gallery4.jpg",
    ];
  
    let selectedImage = null;
  
    function openImage(index) {
      selectedImage = index;
    }
  
    function closeImage() {
      selectedImage = null;
    }
  </script>
  
  <style>
    .gallery {
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
  </style>
  
  <div class="gallery">
    {#each images as image, index (image)}
      <div class="thumbnail" on:click={() => openImage(index)}>
        <img src={image} alt={`Image ${index + 1}`} />
      </div>
    {/each}
  
    {#if selectedImage !== null}
      <div class="lightbox" on:click={() => closeImage()}>
        <span class="close-button" on:click={() => closeImage()}>&times;</span>
        <img src={images[selectedImage]} alt={`Image ${selectedImage + 1}`} />
      </div>
    {/if}

 
  </div>
  