<script>
	export let title = 'Демонтаж | MP Clima';
	export let description =
		'Професионално и безопасно демонтиране на стари или повредени климатици. Осигуряваме ефикасно премахване на уреди с минимален риск за о	';

	// Data for the table
	let services = [
		{ name: 'Демонтаж на парапети и всякакви препятствие в терасата', price: '80лв' },
		{ name: 'Демонтаж на стъклопакет | прозорец (единицен с размери 60-120см)', price: '70лв' },
		{
			name: 'Демонтаж на стъклопакет, двоен - цени само с предварителен огле и по преценка на монтажника',
			price: 'от 70лв нагоре'
		}
		// { name: '', price: ''},
		// { name: '', price: ''},
	];
	// Additional prices
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="демонтаж на климатици, инсталация на климатици, климатизация София  demontaža na klimatici, demontiranje klimatikov, svianje na klima sistem, premestvane na klimatik, rasklapanje klimatic, zamena na klima aparat, zamena klimatizacija, демонтаж на климатик, demontazha na klima uređaja, otstranjuvanje na klimatik, разглобяване на климатик"
	/>

	<!-- Twitter Card тагове -->
	<meta name="twitter:card" content="/static/logo_square.jpg" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="/static/logo_square.jpg" />
	<meta name="twitter:image:alt" content="Демонтаж на климатици" />

	<!-- Open Graph тагове (за Facebook и други) -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="/static/logo_square.jpg" />
	<meta property="og:image:alt" content="Демонтаж на климатици" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="/activities/демонтаж" />
</svelte:head>

<div class="main-title">
	<h1 class="main-title-header">Демонтажна дейност</h1>
</div>

<div class="demontaj-container-wrapper">
	<div class="demontaj-container">
		<p>Профилактика на климатици:</p>
		<h1>9-24 000 BTU</h1>
		<hr />
		<li class="first-li">Разглобяване на вътрешно тяло</li>
		<li>Основно почистване на всички пластмасови елементи</li>
		<li>Почистване на филтърна секция</li>
		<li>Преглед на външно климатично тяло</li>
		<li>Работен тест-проверка на работата</li>
		<li>Замерване на температурата на вътрешното тяло</li>
		<li>Почистване на перката във вътрешното тяло се прави е замърсено</li>
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

<!--<div class="demontaj-price">
        <h3>
            <b>Демонтаж на препятствия </b>
        </h3> 
		<div class="demontaj-price-box">
            <p>
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
		</div> -->

<style>
	.main-title {
		max-width: 800px;
		margin: 0 auto;
		margin-bottom: 60px;
		padding: 1rem;
		background-color: #0000007e;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.main-title-header {
		text-align: center;
		font-size: 2.5rem;
		color: white;
		margin-bottom: 10px;
	}

	.demontaj-container-wrapper {
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

	.demontaj-container {
		padding: 20px 20px;
		flex-wrap: wrap;
		width: calc(53% - 40px);
		box-sizing: border-box;
		align-items: flex-start;
		justify-content: flex-start;
		background-color: rgba(0, 0, 0, 0.7);
		border-radius: 15px;
	}

	/* @media screen and (max-width: 2000px) {
		.montaj-container {
				width: calc(1000% - 10px); 
		}
		} */

	/* @media screen and (min-width: 1681px) {
		.demontaj-container {
			width: calc(25% - 40px); 
		}
	} */

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

	/* .demontaj-price p {
		background: rgba(0, 0, 0, 0.246);
		display: flex;
		align-items: center;
    	justify-content: space-between;
		padding: 10px;
   	 	margin: 0;
		gap: 10px;
   	 	border-left: 1px solid var(--light);
    	border-right: 1px solid var(--light);
	} */

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
		max-width: 1000px;
		grid-template-columns: repeat(2, 1fr);
		gap: 1px;
		margin: 0 auto;
		line-height: 1.5;
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

	@media screen and (max-width: 510px) {
		.table div {
			padding-left: 7px;
			padding-right: 7px;
		}
	}

	/* Additional prices */

	/* .demontaj-price-box {
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
		} */

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

	/* .first-li {
      margin-top: 18px;
    } */
</style>
