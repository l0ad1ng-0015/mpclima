<script>
	// import { getElementsFromOption } from "photoswipe/dist/types/util/util";

	let showAdditionalSection = false;

	function toggleSection() {
		showAdditionalSection = !showAdditionalSection;
	}
</script>


<div class="main-title">
	Монтаж на климатици
</div>
<div class="container-title">
		<h4>
			<b>Стандартни монтажни дейности</b>
		</h4>
	</div>
<div class="montaj-container-wrapper">
	<!-- <div class="montaj-title">Стандартен монтаж</div> -->
    
	<div class="montaj-container">
		<p>Монтаж на климатици:</p>
		<h1>9-12 000 BTU</h1>
		<hr>
		<li class="first-li">Качване на климатик и материали с асансьор</li>
		<li>Фиксиране на стойка на вътрешно тяло</li>
		<li>Технологичен отвор в стената 1 бр.</li>
		<li>Медни тръби с термо изолация до 3 л. м.</li>
		<li>Отводняваща гофрирана тръба до 3 л. м.</li>
		{#if showAdditionalSection}
			<li>Комуникационен кабел до 5 л. м.</li>
			<li>Щепсел и захранващ кабел до 4 л.м.</li>
			<li>Поставяне на PVC канал до 1 л. м.</li>
			<li>Стойки за монтиране на външно тяло</li>
			<li>Свързване на двете климатични тела</li>
			<li>Вакуумиране</li>
			<li>Пуск на машината</li>
			<li>Кратък инструктаж на клиента за експлоатация</li>
			<li>Почистване</li>   
			<li><button class="btn show-less-btn" on:click={toggleSection}>Покажи по-малко</button></li>
			{:else}
			<li><button class="btn show-more-btn" on:click={toggleSection}>Покажи повече</button></li>
		{/if}
		<h2>Цена: 270лв</h2>
	</div>

	<div class="montaj-container">
		<p>Монтаж на климатици:</p>
		<h1>12-18 000 BTU</h1>
		<hr>
		<li class="first-li">Качване на климатик и материали с асансьор</li>
		<li>Фиксиране на стойка на вътрешно тяло</li>
		<li>Технологичен отвор в стената 1 бр.</li>
		<li>Медни тръби с термо изолация до 3 л. м.</li>
		<li>Отводняваща гофрирана тръба до 3 л. м.</li>
		{#if showAdditionalSection}
			<li>Комуникационен кабел до 5 л. м.</li>
			<li>Щепсел и захранващ кабел до 4 л.м.</li>
			<li>Поставяне на PVC канал до 1 л. м.</li>
			<li>Стойки за монтиране на външно тяло</li>
			<li>Свързване на двете климатични тела</li>
			<li>Вакуумиране</li>
			<li>Пуск на машината</li>
			<li>Кратък инструктаж на клиента за експлоатация</li>
			<li>Почистване</li>   
			<li><button class="btn show-less-btn" on:click={toggleSection}>Покажи по-малко</button></li>
			{:else}
			<li><button class="btn show-more-btn" on:click={toggleSection}>Покажи повече</button></li>
		{/if}
		<h2>Цена: 290лв</h2>
	</div>

	<div class="montaj-container">
		<p>Монтаж на климатици:</p>
		<h1>18-24 000 BTU</h1>
		<hr>
		<li class="first-li">Качване на климатик и материали с асансьор</li>
		<li>Фиксиране на стойка на вътрешно тяло</li>
		<li>Технологичен отвор в стената 1 бр.</li>
		<li>Медни тръби с термо изолация до 3 л. м.</li>
		<li>Отводняваща гофрирана тръба до 3 л. м.</li>
		{#if showAdditionalSection}
			<li>Комуникационен кабел до 5 л. м.</li>
			<li>Щепсел и захранващ кабел до 4 л.м.</li>
			<li>Поставяне на PVC канал до 1 л. м.</li>
			<li>Стойки за монтиране на външно тяло</li>
			<li>Свързване на двете климатични тела</li>
			<li>Вакуумиране</li>
			<li>Пуск на машината</li>
			<li>Кратък инструктаж на клиента за експлоатация</li>
			<li>Почистване</li>   
			<li><button class="btn show-less-btn" on:click={toggleSection}>Покажи по-малко</button></li>
			{:else}
			<li><button class="btn show-more-btn" on:click={toggleSection}>Покажи повече</button></li>
		{/if}
		<h2>Цена: 310лв</h2>
	</div>

	<div class="montaj-container">
		<p>Монтаж на климатици:</p>
		<h1>24 000 + BTU</h1>
		<hr>
		<li class="first-li">Качване на климатик и материали с асансьор</li>
		<li>Фиксиране на стойка на вътрешно тяло</li>
		<li>Технологичен отвор в стената 1 бр.</li>
		<li>Медни тръби с термо изолация до 3 л. м.</li>
		<li>Отводняваща гофрирана тръба до 3 л. м.</li>
		{#if showAdditionalSection}
			<li>Комуникационен кабел до 5 л. м.</li>
			<li>Щепсел и захранващ кабел до 4 л.м.</li>
			<li>Поставяне на PVC канал до 1 л. м.</li>
			<li>Стойки за монтиране на външно тяло</li>
			<li>Свързване на двете климатични тела</li>
			<li>Вакуумиране</li>
			<li>Пуск на машината</li>
			<li>Кратък инструктаж на клиента за експлоатация</li>
			<li>Почистване</li>   
			<li><button class="btn show-less-btn" on:click={toggleSection}>Покажи по-малко</button></li>
			{:else}
			<li><button class="btn show-more-btn" on:click={toggleSection}>Покажи повече</button></li>
		{/if}
		<h2>Цена: По договаряне</h2>
	</div>
</div>

<div class="montaj-price">
	<h3>
		<b>Нестандартни услуги</b>
	</h3>

	<div class="montaj-price-box">
        <p>
			<!-- <span>Услуга</span>
			<span>Цена</span> -->
			Услуга
			<p2>Цена</p2>
		</p> 

		<p>
			Монтаж с висока стълба над 3 метра 
			<p2>80лв</p2>
		</p>
		
		<p>
			Монтаж със скеле
			<p2>След предвалителен оглед</p2>
		</p>

		

		<p>
			Монтаж и качване на инструмент над партер без асансьор (цена за всеки следващ етаж)
			<p2>15лв</p2>
		</p>
	</div>
</div>

<div class="montaj-info">
	<h3>Уточнения</h3>
	<p>	
		<strong>СТАНДАРТЕН МОНТАЖ:</strong>
		Стандартен монтаж (за сплит-ситема от настенен тип), при което се съблюдават следните условия: външният блок се монтира на достъпни места (под прозорец, на балкон или балконна стена) и не са необходими услугите на алпинисти, специални вишки и високи скелета. Дължината на тръбния път не превишава 3 метра и няма вкопаване на тръбния път в стените (не препоръчваме вкопаване) без декоративни ПВЦ канали.
	</p>
</div>





<style>
	 /* body {
    margin: 0;
    padding: 0;
    border-top: 50px solid #ddd; /* Adjust the color and size as needed */

	.main-title {
    text-align: center;
    padding: 20px 10px;
	margin: 40px 0;
    font-size: 40px;
    font-weight: bold;
    background-color: #0000007e; 
    color: #fff; 
    }

	/* .montaj-title {
		text-align: center;
		font-size: 30px;
		font-weight: bold;
		color: white; 
		margin-bottom: 10px;
	} */
	.montaj-container-wrapper {
		display: flex;
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
		
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

	h4 {
		font-family: 'Poppins', sans-serif !important;
    	/* background: #eff3f8; */
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 40px;
		padding-top: 15px;
		padding-bottom: 10px;
		font-size: 35px;
		font-weight: 300;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.297);

		& b {
			font-weight: 300;
		}
	}

	.montaj-container {
		padding: 20px 20px;
		width: calc(30% - 200px);
		box-sizing: border-box;
		background-color: rgba(0, 0, 0, 0.7);
		border-radius: 15px;
		margin: 0 30px;
		text-align: left;
		flex-direction: row;
		/* display: flex; */
		/* flex-wrap: wrap; */
		/* margin-right: 100pc; */
	}

	@media screen and (max-width: 1380px) {
  .montaj-container {
    width: calc(50% - 40px); /* Adjust width for smaller screens */
  }
}

/* Add a media query for even smaller screens */
@media screen and (max-width: 765px) {
  .montaj-container {
    width: calc(100% - 40px); /* Adjust width for even smaller screens */
  }
}

	/* .container-title b {
  font-family: 'Poppins', sans-serif !important;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  padding-top: 15px;
  padding-bottom: 10px;
  font-size: 35px;
  font-weight: 300; 
  color: #fff;
  background-color: rgba(0, 0, 0, 0.297);
} */

			
			.btn {
				
				cursor: pointer;
				align-items: center;
				padding: 8px 16px;
				margin: 2px 2px;
				border: none;
				border-radius: 4px;
				font-size: 17px;
			}
				.show-more-btn {
					color: #0070BB; 
					align-items: center;
					justify-content: center;
					background-color: transparent;
				}

				.show-more-btn:hover {
					color: #005695; 
				}

				.show-less-btn {
					color: #ffffff; 
					background-color: #0070BB; 
				}

				.show-less-btn:hover {
					background-color: #005695; 
				}

				.show-more-btn:focus, .show-less-btn:focus {
					outline: none;
				}


	.montaj-price {
		padding: 40px 20px;
    	width: 100%;
   	 	max-width: 1400px;
		/* max-width: (--width); */
		margin: 40px auto;
	}

	.montaj-price p {
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

		.montaj-price-box {
			margin: 20px; 
		}

		.montaj-price p:first-child {
 			display: flex;
  			color: #fff;
  			background: #0070BB;
  			border-top-left-radius: 8px;
  			border-top-right-radius: 8px;
		}

		.montaj-price p:nth-of-type(odd):not(:first-child) {
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

		.montaj-price p:nth-of-type(even) {
			background: rgba(0, 0, 0, 0.356);
			display: flex;
			justify-content: space-between;
			padding: 10px;
			margin: 0;
			border-left: 1px solid var(--light);
			border-right: 1px solid var(--light);
		}

	/* .montaj-info p:nth-of-type(odd) {
		background: var(--light);
	} */
	
	.montaj-info {
		display: flexbox;
		background-color: rgba(0, 0, 0, 0.455);
		border-radius: 15px;
		padding-left: 50px;
		padding-right: 50px;
		padding-bottom: 20px;
	}

	.montaj-info p {
		max-width: var(--widthmin);
		margin: 20px auto 40px auto;
		line-height: 28px;
		box-sizing: border-box;
	}

	h1 {
		font-size: 40px;
		font-weight: bold;
		color: #ddd;
		margin-top: 10px;
	}

	h2 {
		display: flex;
		justify-content: left;
		margin-top: 40px;
		font-size: 30px;
		font-weight: bold;
		color: #ddd;
	}

	h3 {
		margin-top: 40px;
		font-size: 35px;
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
		margin-bottom: 20px;
		list-style: none;
	}

	.first-li {
		margin-top: 20px;
	}
</style>
