<!--TASKOVE
  -Zoom unzoom button
  -lightbox almost on full screen
  -da sa na redove po 4-->
  
  <div class="full-img" id="fullImgBox">
      <img src="/gallery/gallery1.jpg" id="fullImg">
      <span onclick="closeFullImg()">X</span>
  </div>

  <div class="img-gallery"></div>
<script>
    let images = [
      "/gallery/gallery1.jpg",
      "/gallery/gallery2.jpg",
      "/gallery/gallery3.jpg",
      "/gallery/gallery4.jpg", 
      "/gallery/gallery5.jpg",
      "/gallery/gallery6.jpg",
      "/gallery/gallery7.jpg",
      "/gallery/gallery8.jpg",
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

    * {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
    }
    .img-gallery{
      width: 80%;
      margin: 100px auto 50px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-gap: 30px;
    }
    
    .img-gallery img{
      width: 100%;
      cursor: pointer;
    }
    .fullImgBox{
      width: 100%;
      height: 100vh;
      
    }
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
      width: 90%;
      max-width: 500px;
      max-height: 90%;
      object-fit: contain;
    }

    .full-Img span{
      position: absolute;
      top: 5%;
      right: 5%;
      font-size: 30px;
      color: #fff;
      cursor: pointer;
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
  