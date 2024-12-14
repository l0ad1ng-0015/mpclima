<script>
	let showAdditionalSection = false;

	function toggleSection() {
		showAdditionalSection = !showAdditionalSection;
	}

	// Data for the table
	let services = [
		{ name: 'Годишно обслужване на колонен климатик', price: '100 лв.' },
		{ name: 'Годишно обслужване на касетъчен климатик', price: '100 лв.' },
		{ name: 'Годишно обслужване на канален климатик', price: '100 лв.' },
		{
			name: 'Годишно обслужване на климатик Fujitsu Nocria или Daikin Ururu Sarara',
			price: '100 лв.'
		},
		{ name: 'Годишно обслужване на двоен мултисплит', price: '120 лв.' },
		{ name: 'Годишно обслужване на троен мултисплит', price: '180 лв.' },
		{ name: 'Годишно обслужване на четворен мултисплит', price: '240 лв.' },
		{ name: 'Годишно обслужване на петорен мултисплит', price: '300 лв.' }
		//   { name: '', price: ''},
	];
	// Additional prices
</script>

<div class="prophylaxis-container">
	<h1 class="prophylaxis-header">Профилактика на климатици</h1>
	<div class="prophylaxis-content">
		<p>
			Редовната профилактика на климатика е от съществено значение за оптималната му работа и
			дълготрайност. Нашият екип предлага професионални услуги по поддръжка и почистване, които
			включват:
		</p>
	</div>
</div>
<div class="profilaktika-container-wrapper">
	<div class="profilaktika-container">
		<p>Профилактика на климатици:</p>
		<h1>9-24 000 BTU</h1>
		<hr />
		<li class="first-li">Разглобяване на вътрешно тяло</li>
		<li>Основно почистване на всички пластмасови елементи</li>
		<li>Почистване на филтърна секция</li>
		<li>Преглед на външно климатично тяло</li>
		<li>Работен тест-проверка на работата</li>
		<li>Замерване на температурата на вътрешното тяло</li>
		<li class="last-li">
			Почистване на перката във вътрешното тяло се прави <strong>АКО</strong> е замърсено
		</li>
		<h2>Цена: 60-100лв</h2>
	</div>
</div>

<div class="table-container">
	<h3 style="margin: 40px 5px 25px">Нестандартни услуги</h3>
	<div class="table">
		<div>Услуга</div>
		<div class="price">Цена</div>
		{#each services as service}
			<div>{service.name}</div>
			<div>{service.price}</div>
		{/each}
	</div>
	<p id="p-warning" style="color: red; margin-top: 20px;  ">
		<strong
			>ВАЖНО: Цените включени по-горе се отнасят само за конкретната дейност. <br /> За да видите и другите
			цени кликнете</strong
		> <a href="/activities/нестандартни-услуги">TУК</a>
	</p>
</div>

<div class="prophylaxis-container">
	<div class="prophylaxis-content">
		<p>
			Не чакайте климатикът ви да започне да създава проблеми. Планирайте профилактика още днес и се
			насладете на свеж и комфортен въздух във вашия дом или офис. Свържете се с нас за повече
			информация и запазване на час.
		</p>
		<a href="/контакти" class="prophylaxis-button">Свържете се с нас</a>
	</div>
</div>

<style>
	/* .main-title {
		text-align: center;
		padding: 20px 10px;
		margin: 40px 0;
		font-size: 40px;
		font-weight: bold;
		background-color: #0000007e; 
		color: #fff; 
	} */

	.prophylaxis-container {
		max-width: 800px;
		margin: 0 auto;
		margin-bottom: 60px;
		padding: 2rem;
		background-color: #0000007e;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.prophylaxis-header {
		text-align: center;
		font-size: 3rem;
		color: white;
		margin-bottom: 1rem;
	}

	@media screen and (max-width: 800px) {
		.prophylaxis-container {
			max-width: 500px;
		}
		.prophylaxis-header {
			font-size: 2.4rem;
		}
		.prophylaxis-content p {
			font-size: 1.2rem;
			line-height: 1.24;
		}
	}

	.prophylaxis-content {
		font-size: 1.1rem;
		line-height: 1.6;
		color: #34495e;
	}

	/* .prophylaxis-list {
     list-style-type: disc;
     margin-left: 1.5rem;
   }
 
   .prophylaxis-list-item {
     margin-bottom: 0.5rem;
   } */

	.prophylaxis-button {
		display: block;
		width: fit-content;
		margin: 2rem auto 0;
		padding: 0.75rem 1.5rem;
		background-color: #0070bb;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		text-align: center;
		text-decoration: none;
		font-size: 1rem;
	}

	.prophylaxis-button:hover {
		background-color: #005695;
	}

	.profilaktika-container-wrapper {
		display: flex;
		flex-wrap: wrap;
		max-width: 880px;
		/* width: 100%; */
		margin: 0 auto;
		margin-bottom: 40px;
		justify-content: center;
		align-items: flex-start;
		gap: 1rem;
		padding: 20px 20px;
		background-color: rgba(0, 0, 0, 0.297);
		text-align: left;
	}

	.profilaktika-container {
		padding: 20px 20px;
		flex-wrap: wrap;
		width: calc(53% - 40px);
		box-sizing: border-box;
		align-items: flex-start;
		justify-content: flex-start;
		background-color: rgba(0, 0, 0, 0.7);
		border-radius: 15px;
	}

	/* Additional prices */
	.table-container {
		max-width: 1280px;
		margin: 0 auto;
		margin-bottom: 60px;
	}

	.table-container a {
		color: rgba(216, 1, 1, 0.885);
		text-decoration: none;
	}
	.table-container a:hover {
		color: #ff0000;
		transition: 0.3s;
	}

	.table {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1px;
		margin: 0 auto;
		line-height: 1.5;
		max-width: 1000px;
	}

	.table > div:nth-child(2n) {
		background-color: rgba(0, 0, 0, 0.6);
	}

	.table > div:nth-child(2n + 1) {
		background-color: rgba(0, 0, 0, 0.356);
	}

	.table > div:first-child {
		background-color: #0070bb;
		color: #ffffff;
		font-weight: bold;
	}

	.table > div:first-child + div {
		background-color: #0070bb;
		color: #ffffff;
	}

	.table div {
		padding: 10px;
		padding-left: 15px;
		padding-right: 15px;
		border: 1px solid #ccc;
	}

	@media screen and (max-width: 880px) {
		.table {
			margin: 0 15px;
		}
	}

	@media screen and (max-width: 510px) {
		.table div {
			padding-left: 7px;
			padding-right: 7px;
		}
	}

	/* Additional prices */

	/* @media screen and (max-width: 2000px) {
		.montaj-container {
				width: calc(1000% - 10px); 
		}
		} */

	@media screen and (max-width: 1681px) {
		.profilaktika-container {
			width: calc(50% - 40px);
		}
	}
	@media screen and (max-width: 1380px) {
		.profilaktika-container {
			width: calc(70% - 40px);
		}
	}

	@media screen and (max-width: 765px) {
		.profilaktika-container {
			width: calc(100% - 18px);
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

	h3 {
		/* margin-top: 40px; */
		font-size: 35px;
		font-weight: bold;
		color: #ddd;
	}

	@media screen and (max-width: 530px) {
		h3 {
			font-size: 30px;
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
