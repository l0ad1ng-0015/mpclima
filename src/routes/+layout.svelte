<script type="ts">
	import './styles.css';
	import './transitions.css';
	import Navigation from '$lib/components/layout/Navigation.svelte';
	import Footer from '../lib/components/layout/Footer/Footer.svelte';

	// Променливи за заглавие и описание
	export let title = 'MP Clima | Sofia';
	export let description = 'Професионален монтаж и сервиз на климатици. Качествени услуги в София.';
</script>

<!--kak da se adjustne za vs ustroistva-->
<!-- <head>
	<title>MP Clima | Sofia</title>
	<link rel="shortcut icon" href="" type="image/x-icon" />
</head> -->

<svelte:head>
	<meta name="author" content="MP Clima" />
	<link rel="shortcut icon" href="/static/logo_square.jpg" type="image/x-icon" />

	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta
		name="keywords"
		content="монтаж на климатици, демонтаж на климатици, профилактика на климатици, нестандартни услуги за климатици, монтаж София, демонтаж София, профилактика София, тръбен път за климатик, вкопаване на тръбен път, пробиване за климатик, тест с азот, антивибрационни тампони, кондензни вани, допълнителни услуги за климатици, качване на климатик, медни тръби, PVC тръби, комуникационни кабели, захранващи кабели, ремонт на климатици, сервиз за климатици, montaj na klimatitsi, demontaj na klimatitsi, profilaktika na klimatitsi, nestandartni uslugi za klimatitsi, montaj Sofiya, demontaj Sofiya, profilaktika Sofiya, traben pat za klimatik, vkopavane na traben pat, probivane za klimatik, test s azot, antivibracionni tamponi, kondenzni vani, dopalnitelni uslugi za klimatitsi, kachvane na klimatik, medni trabi, PVC trabi, komunikacionni kabeli, zahranvashti kabeli, remont na klimatitsi, servis za klimatitsi, nestandardne usluge za klimatici, specijalizirani servisi klimatici, custom klima montaž, projektiranje klimatizacija, нестандартен монтаж климатик, klasični i nestandardni sistemi, klima sa specijalni zahtevi, нестандартни климатици, klima sisteme po porudzbini, klimatizacija za specijalizirani prostor, projektiranje i instalacija klimatskih sistema, bespoke klimatski uređaji, нестандартни климатични решения, custom klima dizajn, klima usluga po meri, nestandardne usluge za klimatici, specijalizirani servisi klimatici, custom klima montaž, projektiranje klimatizacija, нестандартен монтаж климатик, klasični i nestandardni sistemi, klima sa specijalni zahtevi, нестандартни климатици, klima sisteme po porudzbini, klimatizacija za specijalizirani prostor, projektiranje i instalacija klimatskih sistema, bespoke klimatski uređaji, нестандартни климатични решения, custom klima dizajn, klima usluga po meri, serviz na klimatici, remont na klimatici, diagnostika klimatik, popravka klimatik, servisna usluga, klimatski sistemi servis, klimatici servis, servis na klima uređaj, профилактика klimatici, popravka klima sistem, klima servis bg, klimatski uređaji servis, odrzhavane na klimatici, замяна на климатик, proverenje klimatik, климатични системи ремонт, servis i profilaktika klimatik, ремонт климатик, klimatski uređaj popravka, климатични услуги, servis klima uređaja"
	/>

	<!-- Twitter Card тагове -->
	<meta name="twitter:card" content="/static/logo_square.jpg" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="/static/logo_square.jpg" />
	<meta name="twitter:image:alt" content="MP Clima | Sofia" />

	<!-- Open Graph тагове (за Facebook и други) -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="/static/logo_square.jpg" />
	<meta property="og:image:alt" content="MP Clima | Sofia" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="/" />
</svelte:head>

<div class="layoutWrapper">
	<Navigation />

	<div class="contentWrapper">
		<div class="content"><slot /></div>
	</div>
	<Footer />
</div>

<style>
	.contentWrapper {
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		/* padding-bottom: 500px; */
	}
	.content {
		/* border: solid 1px green; */
		margin: 0 auto;
		width: 90%;
		justify-content: center;
		padding: 20px;
		text-align: center;
	}

	.submenu > a::after {
		content: '';
		background: url('/static/images/arrow_down.png') no-repeat;
		width: 10px; /* Adjust width and height based on your image size */
		height: 10px;
		display: inline-block;
		margin-left: 5px;
	}

	.layoutWrapper {
		display: grid;
		/* keep nav on top, footer on bottom even on pages with less content */
		grid-template-rows: auto 1fr auto;
		min-height: 100vh;
		/* end keep nav */
	}
</style>
