<script>
	export let title = 'Нестандартни услуги | MP Clima';
	export let description =
		'Професионален монтаж на климатици в София от опитни специалисти. Осигуряваме качествена и надеждна услуга с внимание към детайлите. Предлагаме бърза инсталация, безопасна работа и достъпни цени за вашия комфорт.';

	let services = [
		{ name: 'Допълнителен тръбен път за климатик 7 - 14 000 BTU на л.м.', price: '45 лв.' },
		{ name: 'Допълнителен тръбен път за климатик 15 - 24 000 BTU на л.м.', price: '55 лв.' },
		{ name: 'Допълнителен тръбен път за климатик 30 - 55 000 BTU на л.м.', price: '70 лв.' },
		{ name: 'Вкопаване на тръбен път в тухлена зидария на л.м.', price: '40 лв.' },
		{
			name: 'Вкопаване на тръбен път в бетон на л.м. (с изключение на панелни блокове, след оглед)',
			price: '80 лв.'
		},
		{
			name: 'Качване на климатик, материали и инструменти без асансьор 7 - 14 000 BTU (на етаж)',
			price: '10 лв.'
		},
		{
			name: 'Качване на климатик, материали и инструменти без асансьор 15 - 24 000 BTU (на етаж)',
			price: '15 лв.'
		},
		{ name: 'Пробиване на втори технологичен отвор за тръбен път', price: '20 лв.' },
		{ name: 'Тест с азот на тръбен път', price: '60 лв.' },
		{ name: 'Заваряване на медна тръба', price: '20 лв.' },
		{ name: 'Антивибрационни тампони (к-кт).', price: '40 лв.' },
		{ name: 'PVC кондензна вана с включен монтаж', price: '80 лв.' },
		{ name: 'PVC кондензна вана, нагревател и термостат с включен монтаж', price: '150 лв.' },
		{ name: 'Метална кондензна вана с включен монтаж, малка / голяма', price: '95 / 115 лв.' },
		{
			name: 'Метална кондензна вана, нагревател и термостат с включен монтаж, малка / голяма',
			price: '165 / 185 лв.'
		},
		{ name: 'Допълнително гофрирана тръба 1 л.м.', price: '8 лв.' },
		{ name: 'Допълнително PVC тръба Ф32 1 л.м.', price: '20 лв.' },
		{ name: 'Допълнителен PVC канал 15х15 мм. на л.м.', price: '10 лв.' },
		{ name: 'Допълнителен PVC канал 60х60 мм. на л.м.', price: '20 лв.' },
		{ name: 'Допълнителен кабел за комуникация 1 л.м. 4 х 2.5 мм', price: '8 лв.' },
		{ name: 'Допълнителен захранващ кабел 1 л.м. 3 х 1.5 мм', price: '7 лв.' },
		{ name: 'Допълнителен захранващ кабел 1 л.м. 3 х 2.5 мм', price: '8 лв.' }
	];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="nestandardne usluge za klimatici, specijalizirani servisi klimatici, custom klima montaž, projektiranje klimatizacija, нестандартен монтаж климатик, klasični i nestandardni sistemi, klima sa specijalni zahtevi, нестандартни климатици, klima sisteme po porudzbini, klimatizacija za specijalizirani prostor, projektiranje i instalacija klimatskih sistema, bespoke klimatski uređaji, нестандартни климатични решения, custom klima dizajn, klima usluga po meri"
	/>

	<!-- Twitter Card тагове -->
	<meta name="twitter:card" content="static\logo_square.jpg" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://mpclima.bg/static/logo_square.jpg" />
	<meta name="twitter:image:alt" content=" Нестандартни услуги" />

	<!-- Open Graph тагове (за Facebook и други) -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="https://mpclima.bg/static/logo_square.jpg" />
	<meta property="og:image:alt" content="Нестандартни услуги" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mpclima.bg/activities/нестандартни-услуги" />
</svelte:head>

<div class="main-title">Нестандартни услуги</div>

<p />
<div class="table-container">
	<div class="table">
		<div>Услуга</div>
		<div class="price">Цена</div>
		{#each services as service}
			<div>{service.name}</div>
			<div>{service.price}</div>
		{/each}
	</div>
</div>

<style>
	.main-title {
		text-align: center;
		padding: 20px 10px;
		margin: 40px 180px;
		font-size: 40px;
		font-weight: bold;
		background-color: #0000007e;
		color: #fff;
	}

	@media screen and (max-width: 1800px) {
		.main-title {
			margin: 40px 100px;
		}
	}

	@media screen and (max-width: 1670px) {
		.main-title {
			margin: 40px 0;
		}
	}

	.table-container {
		max-width: 1280px;
		margin: 0 auto;
		margin-top: 70px;
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

	h3 {
		/* margin-top: 40px; */
		font-size: 35px;
		font-weight: bold;
		color: #ddd;
	}
</style>
