<script>
	// import { getElementsFromOption } from "photoswipe/dist/types/util/util";

	let showAdditionalSection = false;

	function toggleSection() {
		showAdditionalSection = !showAdditionalSection;
	}



	// Data for the table
	let services = [
	  { name: 'Монтаж на външно тяло на мултисплит при наличие на тръбен път', price: '140 лв.' },
	  { name: 'Монтаж на вътрешно тяло 7 - 14 000 BTU на мултисплит при наличие на тръбен път', price: '60 лв.' },
	  { name: 'Монтаж на вътрешно тяло 15 - 24 000 BTU на мултисплит при наличие на тръбен път', price: '90 лв.'},
	  { name: 'Монтаж на климатик на 2 етапа', price: '70 лв.'},
	  { name: 'Монтаж на кондензна помпа', price: '60 лв.'},
	  { name: 'Монтаж на външно тяло с монтажен профил на л.м.', price: '10 лв.'},
	  { name: 'Монтаж със строително скеле (осигурено от нас - височина 2 м)', price: '60 лв.'},
	  { name: 'Начисляване на такса при "нестандартен монтаж" /след предварително съгласуване с клиента преди започване на монтажа/', price: '50 - 100 лв.'},
	  { name: 'Експресен монтаж в рамките на 24 часа', price: 'По договаряне'},
	//   { name: '', price: ''},
	//   { name: '', price: ''},
	//   { name: '', price: ''},
	//   { name: '', price: ''},
	//   { name: '', price: ''},
	//   { name: '', price: ''},
	];
	// Additional prices
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
		<li>Комуникационен кабел до 5 л. м.</li>
		<li>Щепсел и захранващ кабел до 4 л.м.</li>
		{#if showAdditionalSection}
			<li>Поставяне на PVC канал до 1 л. м.</li>
			<li>Стойки за монтиране на външно тяло</li>
			<li>Свързване на двете климатични тела</li>
			<li>Вакуумиране</li>
			<li>Пуск на машината</li>
			<li>Кратък инструктаж на клиента за експлоатация</li>
			<li>Почистване</li>   
			<li><button class="btn show-less-btn"  on:click={toggleSection}>Покажи по-малко</button></li>
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
		<li>Комуникационен кабел до 5 л. м.</li>
		<li>Щепсел и захранващ кабел до 4 л.м.</li>
		{#if showAdditionalSection}
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
		<li>Комуникационен кабел до 5 л. м.</li>
		<li>Щепсел и захранващ кабел до 4 л.м.</li>
		{#if showAdditionalSection}
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
		<li>Комуникационен кабел до 5 л. м.</li>
		<li>Щепсел и захранващ кабел до 4 л.м.</li>
		{#if showAdditionalSection}
			<li>Поставяне на PVC канал до 1 л. м.</li>
			<li>Стойки за монтиране на външно тяло</li>
			<li>Свързване на двете климатични тела</li>
			<li>Вакуумиране</li>
			<li>Пуск на машината</li>
			<li>Кратък инструктаж на клиента за експлоатация</li>
			<li>Почистване</li>   
			<li class="button"><button class="btn show-less-btn" on:click={toggleSection}>Покажи по-малко</button></li>
			{:else}
			<li class="button"><button class="btn show-more-btn" on:click={toggleSection}>Покажи повече</button></li>
		{/if}
		<h2>Цена: По договаряне</h2>
	</div>
</div>

  <!-- Additional prices -->
  
<div class="table-container">
		<h3 style="margin-top: 40px; margin-bottom: 25px">Нестандартни услуги</h3>
		<div class="table">
			<div>Услуга</div>
			<div class="price">Цена</div>
			{#each services as service}
			<div>{service.name}</div>
			<div>{service.price}</div>
			{/each}
		</div>
		<p id="p-warning" style="color: red; margin-top: 20px;  "><strong>ВАЖНО: Цените включени по-горе се отнасят само за конкретната дейност. <br> За да видите и другите цени кликнете</strong> <a href="/activities/нестандартни-услуги">TУК</a> </p>
</div>
  
<!-- Additional prices -->



<div class="montaj-info-container">
	<div class="montaj-info-content">
		<div class="montaj-info">
			<!-- <h3 style="margin-bottom: 20px;">Уточнения</h3> -->
			<p><b>Уточнения:</b> Цените за монтаж на мултисплит система са без включен тръбен път. Дължината на тръбното трасе между външното тяло и вътрешните тела се заплаща допълнително за всеки линеен метър.</p>
			<p>Клиентски материали и аксесоари не се монтират, но при настояване от клиента, услугите се заплащат еквивалентно на стойността на нашите материали и услуги. Свързването на WiFi модулите към домашната мрежа е ангажимент на клиента.</p>
			<p><strong>ВАЖНО:</strong> При нужда от монтаж с вишка цената за наемане на автовишката се заплаща изцяло от клиента и е по действащия ценоразпис на фирмата, извършваща услугата.</p>
			<p>Монтажът на климатична сплит система, като всяка монтажна дейност, е свързан с пробиване и запрашаване. Това не е проблем в помещения, в които тече ремонт, но в завършени жилища може да доведе до известен дискомфорт за собствениците. Нашият съвет е да подготвите стаята за монтажната дейност: да покриете пода и мебелите с найлон за строителни дейности, да премахнете всичко, което би попречило да се монтира климатикът на избраното от Вас място - етажерки, високи шкафове, рафтове. Важно е да има осигурен достъп до стената, на която ще се монтира вътрешното тяло, за да може да се осъществи монтажът. Ние винаги почистваме пода с прахосмукачка след монтаж, но финият прах е предизвикателство за всеки уред и трудно би се почистил от мебелите.</p>
			<p style="margin-bottom: 20px;">С оглед на безопасността на монтажните ни екипи те не използват калцуни. Изкуственият материал, от който са направени, може да доведе до сериозни инциденти свързани с подхлъзване и падане при монтажна дейност в жилището и извън него. Ако настилката в коридора и стаята, в която ще се монтира климатикът, е ламинат, паркет или друг вид дърво, ще Ви помолим да я обезопасите с найлон, за да не пострада по някакъв начин повърхността ѝ. Ние вярваме, че тази малка помощ от Ваша страна ще доведе до един перфектен за Вас и същевременно безопасен за нашите служители монтаж.</p>
		</div>
	</div>
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
	border-radius: 10px;
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
		
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

	


	.montaj-container {
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

		@media screen and (min-width: 1381px) {
    .montaj-container {
        width: calc(25% - 40px); /* Adjusted width to leave space for gap */
    }
}
		@media screen and (max-width: 1380px) {
		.montaj-container {
			width: calc(50% - 40px); 
		}
		}

		@media screen and (max-width: 765px) {
		.montaj-container {
			width: calc(100% - 40px); 
		}
		}

.montaj-container li button {
    margin-bottom: 0;
}
			
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


	
 	/* Additional prices */
	.table-container {
		max-width: 1280px;
		margin: 0 auto;
		margin-top: 70px; 
	}

	.table-container a {
		color: rgba(216, 1, 1, 0.885); 
		text-decoration: none;
	}
	.table-container a:hover{
		color: #ff0000;
		transition: 0.3s;
	}

	.table {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1px;
	margin: 0 auto;
	line-height: 1.5; 
	}

	.table > div:nth-child(2n) {
	background-color: rgba(0, 0, 0, 0.6);
	}

	.table > div:nth-child(2n+1) {
	background-color: rgba(0, 0, 0, 0.356);
	}

	.table > div:first-child {
	background-color: #0070BB;
	color: #ffffff;
	font-weight: bold;
	}

	.table > div:first-child + div {
	background-color: #0070BB;
	color: #ffffff;
	}

	.table div {
	padding: 10px;
	padding-left: 15px;
	padding-right: 15px;
	border: 1px solid #ccc;
	}

	@media screen and (max-width: 510px) {
		.table div {
			padding-left: 7px;
			padding-right: 7px;
		}
	} 

 	/* Additional prices */


	 .montaj-info-container {
		display: flex;
		justify-content: center; /* Horizontally center the content */
		align-items: center; /* Vertically center the content */
		max-width: 70%;
		text-align: center;
		margin: 90px auto; /* Auto margins to center horizontally */
		padding: 10px;
		background-color: rgba(0, 0, 0, 0.463);
		border: 1px;
		border-radius: 8px;
	}

	@media screen and (max-width: 880px) {
		.montaj-info-container{
			max-width: 90%;
		}
		.table {
			margin-left: 40px;
			margin-right: 40px;
		}
	}

	@media screen and (max-width: 600px) {
		.montaj-info-container {
			max-width: 100%;
		}
	}

    .montaj-info-content {
        max-width: 100%;
        padding: 30px;
    }
    
    /* .montaj-info-container content h3 {
		font-size: 35px;
		font-weight: bold;
		color: #ddd;
	} */
    

    .montaj-info p {
        max-width: var(--widthmin);
		margin: 20px auto 40px auto;
		line-height: 28px;
		box-sizing: border-box;
    }

	@media screen and (max-width: 1111px) {
		.montaj-info p {
			font-size: 20px;
		}
		.montaj-info-content {
			padding: 15px;
		}
	}

	@media screen and (max-width: 600px) {
		.montaj-info p {
			font-size: 19px;
			line-height: 25px;
		}
		.montaj-info-content {
			padding: 10px;
		}
	}

	@media screen and (max-width: 510px) {
		.montaj-info p {
			font-size: 18px;
		}
	}



	/*
	PREVIUS ONE
	
	.montaj-info {
		display: flexbox;
		background-color: rgba(0, 0, 0, 0.455);
		border-radius: 15px;
		padding-left: 50px;
		padding-right: 50px;
		padding-bottom: 20px;
	}

	.montaj-info p {
		width: calc(90% - 40px); ;
		margin: 20px auto 40px auto;
		line-height: 28px;
		box-sizing: border-box;
	} */
	

	h1 {
		font-size: 40px;
		font-weight: bold;
		color: #ddd;
		margin-top: 10px;
	}

	h2 {
		display: flex;
		justify-content: left;
		margin-top: 10px;
		font-size: 30px;
		font-weight: bold;
		color: #ddd;
	}

	h3 {
		/* margin-top: 40px; */
		font-size: 35px;
		font-weight: bold;
		color: #ddd;
	}
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
		font-weight: bold;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.297);

		& b {
			font-weight: 500;
		}
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


<!--
	MONTAJ-PRICE first (old one)
	<div class="montaj-price">
	<h3>
		<b>Нестандартни услуги</b>
	</h3>

	<div class="montaj-price-box">
        <p>
			<span>Услуга</span>
			<span>Цена</span>
			Услуга
			<p2>Цена</p2>
		</p>

		<p>
			
			<b>Качване на климатик, материали и инструменти без асансьор (на етаж)</b>
			<b class="p2">15лв<b>
			</p>

		<p>
			Монтаж с висока стълба над 3 метра 
			<b class="p2">След предвалителен оглед</b>
		</p>
		
		<p>
			Монтаж със скеле
			<b class="p2">След предвалителен оглед</b>
		</p>
	</div>

	<div class="montaj-price-box-warn">
		<b>Тези цени се отнасят само за монтаж на климатици, ако<br> искате да видите допълнителните ни цени кликнете <a href="/activities/допълнителни-цени">тук</a> </b>
	</div>
</div>

.montaj-price {
	padding: 40px 20px;
	width: 100%;
		max-width: 1400px;
	
	margin: 10px auto;
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
	.montaj-price-box-warn b {
		padding-top: 10px;
		color: red;
		font-size: 20px;
	}
	.montaj-price-box-warn a  {
		font-size: larger;
		color: #cb0e0ec1;
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

.montaj-info p:nth-of-type(odd) {
		background: var(--light);
	}
	} -->
	 