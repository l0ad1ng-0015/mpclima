
<script>
    let showAdditionalSection = false;
  
    function toggleSection() {
      showAdditionalSection = !showAdditionalSection;
    }
  </script>
  
  	<div class="main-title">
		Демонтажна дейност
	</div>

	<div class="demontaj-container-wrapper">
  
    	<div class="demontaj-container">
			<p>Профилактика на климатици:</p> 
			<h1>9-24 000 BTU</h1>
			<hr>
			<li class="first-li">Разглобяване на вътрешно тяло</li>
			<li>Основно почистване на всички пластмасови елементи</li>
			<li>Почистване на филтърна секция</li>
			<li>Преглед на външно климатично тяло</li>
			<li>Работен тест-проверка на работата</li>
			<li>Замерване на температурата на вътрешното тяло</li>
			<li>Почистване на перката във вътрешното тяло се прави е замърсено</li>
			<h2>Цена: 60лв</h2>
  		</div>
  	</div>
  
      <div class="demontaj-price">
        <h3>
            <b>Демонтаж на препятствия </b>
        </h3>
    
        <div class="demontaj-price-box">
            <p>
                <!-- <span>Услуга</span>
                <span>Цена</span> -->
                Услуга
                <p2>Цена</p2>
            </p>
    
            <p>
                Демонтаж на парапети и всякакви препятствие в терасата
                <p2>80лв</p2>
    
            <p>
                Демонтаж на стъклопакет | прозорец (единицен с размери 60-120см) 
                <p2>70лв</p2>
            </p>
            
            <p>
                Демонтаж на стъклопакет, двоен - цени само с предварителен огле и по преценка на монтажника
                <p2>от 70лв на горе</p2>
            </p>
    
            
            
        </div>
    
        <div class="demontaj-price-box-warn">
            <b>Тези цени се отнасят само за монтаж на климатици, ако<br> искате да видите допълнителните ни цени кликнете <a href="/activities/допълнителни-цени">тук</a> </b>
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
	.demontaj-container-wrapper {
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
	
	.demontaj-container {
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
    	.demontaj-container {
        width: calc(25% - 40px); /* Adjusted width to leave space for gap */
    }
}
		@media screen and (max-width: 1380px) {
		.demontaj-container {
			width: calc(50% - 40px); 
		}
		}

		@media screen and (max-width: 765px) {
		.demontaj-container {
			width: calc(100% - 40px); 
		}
		}

    .demontaj-price {
		padding: 40px 20px;
    	width: 100%;
   	 	max-width: 1400px;
		/* max-width: (--width); */
		margin: 40px auto;
	}

	.demontaj-price p {
		background: rgba(0, 0, 0, 0.246);
		display: flex;
		align-items: center;
    	justify-content: space-between;
		padding: 10px;
   	 	margin: 0;
		gap: 10px;
   	 	border-left: 1px solid var(--light);
    	border-right: 1px solid var(--light);
	}

		.demontaj-price-box {
			margin: 20px; 
		}
		.demontaj-price-box-warn b {
			padding-top: 10px;
			color: red;
			font-size: 20px;
		}
		.demontaj-price-box-warn a  {
			font-size: larger;
			color: #cb0e0ec1;
		}
		.demontaj-price p:first-child {
 			display: flex;
  			color: #fff;
  			background: #0070BB;
  			border-top-left-radius: 8px;
  			border-top-right-radius: 8px;
		}

		.demontaj-price p:nth-of-type(odd):not(:first-child) {
			background: rgba(0, 0, 0, 0.6);
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 10px;
			margin: 0;
			gap: 10px;
			border-left: 1px solid var(--light);
			border-right: 1px solid var(--light);
		}

		.demontaj-price p:nth-of-type(even) {
			background: rgba(0, 0, 0, 0.356);
			display: flex;
			justify-content: space-between;
			padding: 10px;
			margin: 0;
			border-left: 1px solid var(--light);
			border-right: 1px solid var(--light);
		}

    b {
        font-size: 35px;
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
  

    
   /* .first-li {
      margin-top: 18px;
    } */
  </style>