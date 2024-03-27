
<script>
    let showAdditionalSection = false;
  
    function toggleSection() {
      showAdditionalSection = !showAdditionalSection;
    }
  </script>
  
  	<div class="main-title">
		Профилактика на климатици
	</div>

	<div class="profilaktika-container-wrapper">
  
    	<div class="profilaktika-container">
			<p>Профилактика на климатици:</p> 
			<h1>9-24 000 BTU</h1>
			<hr>
			<li class="first-li">Разглобяване на вътрешно тяло</li>
			<li>Основно почистване на всички пластмасови елементи</li>
			<li>Почистване на филтърна секция</li>
			<li>Преглед на външно климатично тяло</li>
			<li>Работен тест-проверка на работата</li>
			<li>Замерване на температурата на вътрешното тяло</li>
			<li class="last-li">Почистване на перката във вътрешното тяло се прави <strong>АКО</strong> е замърсено</li>
			<h2>Цена: 60-100лв</h2>
  		</div>

  	</div>
  
  
  
  
  <style>
 
 	.main-title {
		text-align: center;
		padding: 20px 10px;
		margin: 40px 0;
		font-size: 40px;
		font-weight: bold;
		background-color: #0000007e; 
		color: #fff; 
	}
	.profilaktika-container-wrapper {
		display: flex;
		flex-wrap: wrap; 
		justify-content: center;
		align-items: flex-start;
		gap: 1rem;
		padding: 40px 20px;
		padding-top: 20px;
		background-color: rgba(0, 0, 0, 0.297);
		text-align: left;

		/* margin-right: 400px; */
		/* margin-right: 400px; */
		
		/* & .montaj-title{
			justify-content: center;
		} */
		

	}
	
	.profilaktika-container {
        padding: 20px 20px;
		flex-wrap: wrap;
        width: calc(25% - 40px); 
        box-sizing: border-box;
        align-items: flex-start;
        justify-content: flex-start;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 15px;
        margin-bottom: 20px; 

    }


		/* @media screen and (max-width: 2000px) {
		.montaj-container {
				width: calc(1000% - 10px); 
		}
		} */

		@media screen and (min-width: 1681px) {
    	.profilaktika-container {
        width: calc(25% - 40px); /* Adjusted width to leave space for gap */
    }
}
		@media screen and (max-width: 1380px) {
		.profilaktika-container {
			width: calc(50% - 40px); 
		}
		}

		@media screen and (max-width: 765px) {
		.profilaktika-container {
			width: calc(100% - 40px); 
		}
		}

	h1 {
		font-size: 40px;
		font-weight: bold;
		color: #ddd;
		margin-top: 10px;
		
	}

	h2 {
		font-size: 30px;
		font-weight: bold;
		color: #ddd;
	}

	p {
		font-size: 22px;
		color: #ddd;
	}

	hr {
		width: 50%;
		height: 2px;
		background: white;
		border: none;
		margin: 0;
	}

	li {
		font-size: 18px;
		color: #ddd;
		margin-bottom: 25px;
		list-style: none;
		/* display: block; */
	}

	.first-li {
		margin-top: 20px;
	}
  
	.last-li {
		list-style: disc;
		text-align: left;
	}
    
   /* .first-li {
      margin-top: 18px;
    } */
  </style>