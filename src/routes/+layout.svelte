<script type="ts">
	import './styles.css';
	import './transitions.css';
	import Navigation from '$lib/components/layout/Navigation.svelte';
	import Footer from '../lib/components/layout/Footer/Footer.svelte';

	// Променливи за заглавие и описание
	export const title = 'MP Clima | Sofia';
	export const description =
		'Фирма MP Clima е компания в областта на климатичните инсталации, предоставяща висококачествени услуги и решения за вашия дом или бизнес в София. От продажбата до монтажа и поддръжката, ние гарантираме комфорт и надеждност за нашите клиенти.';
</script>

<!--kak da se adjustne za vs ustroistva-->
<!-- <head>
	<title>MP Clima | Sofia</title>
	<link rel="shortcut icon" href="" type="image/x-icon" />
</head> -->

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<script>
		(function (w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s),
				dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
			f.parentNode.insertBefore(j, f);
		})(window, document, 'script', 'dataLayer', 'GTM-WZT9NVM8');
	</script>
	<!-- End Google Tag Manager -->

	<meta name="author" content="MP Clima" />
	<link rel="shortcut icon" href="/static/logo_square.jpg" type="image/x-icon" />

	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta
		name="keywords"
		content="монтаж на климатици, демонтаж на климатици, профилактика на климатици, нестандартни услуги за климатици, монтаж София, демонтаж София, профилактика София, тръбен път за климатик, вкопаване на тръбен път, пробиване за климатик, тест с азот, антивибрационни тампони, кондензни вани, допълнителни услуги за климатици, качване на климатик, медни тръби, PVC тръби, комуникационни кабели, захранващи кабели, ремонт на климатици, сервиз за климатици, montaj na klimatitsi, demontaj na klimatitsi, profilaktika na klimatitsi, nestandartni uslugi za klimatitsi, montaj Sofiya, demontaj Sofiya, profilaktika Sofiya, traben pat za klimatik, vkopavane na traben pat, probivane za klimatik, test s azot, antivibracionni tamponi, kondenzni vani, dopalnitelni uslugi za klimatitsi, kachvane na klimatik, medni trabi, PVC trabi, komunikacionni kabeli, zahranvashti kabeli, remont na klimatitsi, servis za klimatitsi, nestandardne usluge za klimatici, specijalizirani servisi klimatici, custom klima montaž, projektiranje klimatizacija, нестандартен монтаж климатик, klasični i nestandardni sistemi, klima sa specijalni zahtevi, нестандартни климатици, klima sisteme po porudzbini, klimatizacija za specijalizirani prostor, projektiranje i instalacija klimatskih sistema, bespoke klimatski uređaji, нестандартни климатични решения, custom klima dizajn, klima usluga po meri, nestandardne usluge za klimatici, specijalizirani servisi klimatici, custom klima montaž, projektiranje klimatizacija, нестандартен монтаж климатик, klasični i nestandardni sistemi, klima sa specijalni zahtevi, нестандартни климатици, klima sisteme po porudzbini, klimatizacija za specijalizirani prostor, projektiranje i instalacija klimatskih sistema, bespoke klimatski uređaji, нестандартни климатични решения, custom klima dizajn, klima usluga po meri, serviz na klimatici, remont na klimatici, diagnostika klimatik, popravka klimatik, servisna usluga, klimatski sistemi servis, klimatici servis, servis na klima uređaj, профилактика klimatici, popravka klima sistem, klima servis bg, klimatski uređaji servis, odrzhavane na klimatici, замяна на климатик, proverenje klimatik, климатични системи ремонт, servis i profilaktika klimatik, ремонт климатик, klimatski uređaj popravka, климатични услуги, servis klima uređaja"
	/>

	<meta name="twitter:card" content="/static/logo_square.jpg" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="/static/logo_square.jpg" />
	<meta name="twitter:image:alt" content="MP Clima | Sofia" />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="/static/logo_square.jpg" />
	<meta property="og:image:alt" content="MP Clima | Sofia" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="/" />
</svelte:head>

<div class="top-btn">
	<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" {...$$props}
		><path
			fill="currentColor"
			d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8z"
		/></svg
	>
</div>

<div class="layoutWrapper">
	<Navigation />

	<div class="contentWrapper">
		<div class="content"><slot /></div>
	</div>
	<Footer />
</div>

<style>
	:global(body) {
		zoom: 70%;
	}

	@media screen and (max-width: 880px) {
		:global(body) {
			zoom: 100%;
		}
	}
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

	.top-btn {
		display: none;
		position: fixed;
		bottom: 20px;
		right: 20px;
		z-index: 99;
		border: none;
		outline: none;
		background-color: #0070bb;
		color: white;
		cursor: pointer;
		padding: 15px;
		border-radius: 10px;
	}

	@media screen and (max-width: 880px) {
		.top-btn {
			display: none;
		}
	}
</style>
