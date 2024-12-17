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
<head>
	<title>MP Clima | Sofia</title>
	<!-- <link rel="shortcut icon" href="static/images/logo.png" type="image/png" /> -->
	<link rel="shortcut icon" href="static\logo_square.png" type="image/x-icon" />
</head>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content="монтаж на климатици, сервиз на климатици, климатизация София" />
	<meta name="author" content="MP Clima" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="shortcut icon" href="/static/logo_square.png" type="image/x-icon" />
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
