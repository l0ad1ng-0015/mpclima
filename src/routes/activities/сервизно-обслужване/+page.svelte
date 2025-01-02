<script type="ts">
	export let title = 'Сервизно обслужване | MP Clima';
	export let description =
		'Професионално сервизно обслужване на климатици в София. Извършваме диагностика, ремонт и профилактика, за да осигурим безупречната работа на вашето климатично оборудване. Качествени услуги на достъпни цени.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="serviz na klimatici, remont na klimatici, diagnostika klimatik, popravka klimatik, servisna usluga, klimatski sistemi servis, klimatici servis, servis na klima uređaj, профилактика klimatici, popravka klima sistem, klima servis bg, klimatski uređaji servis, odrzhavane na klimatici, замяна на климатик, proverenje klimatik, климатични системи ремонт, servis i profilaktika klimatik, ремонт климатик, klimatski uređaj popravka, климатични услуги, servis klima uređaja."
	/>

	<!-- Twitter Card тагове -->
	<meta name="twitter:card" content="static\logo_square.jpg" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="/static/logo_square.jpg" />
	<meta name="twitter:image:alt" content="Сервизно обслужване" />

	<!-- Open Graph тагове (за Facebook и други) -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="/static/logo_square.jpg" />
	<meta property="og:image:alt" content="Сервизно обслужване" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="/монтаж" />
</svelte:head>

<div class="main-title">Сервизна дейност</div>

<div class="text-content">
	<p>Сервизна дейност се извършва след предварителен оглед и отрстраняване на плоблема.</p>
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

	.text-content {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 20px;
		background-color: rgba(0, 0, 0, 0.337);
	}

	.text-content p {
		margin-bottom: 20px;
		text-align: center;
		line-height: 1.5;
		font-size: 25px;
	}

	.text-content a {
		font-size: 25px;
		text-decoration: none;
		color: #007bff;
		transition: color 0.3s ease;
	}

	.text-content a:hover {
		color: #0056b3;
	}
</style>
