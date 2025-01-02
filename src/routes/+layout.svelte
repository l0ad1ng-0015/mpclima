<script type="ts">
	import './styles.css';
	import './transitions.css';
	import Navigation from '$lib/components/layout/Navigation.svelte';
	import Footer from '../lib/components/layout/Footer/Footer.svelte';
	import { onMount } from 'svelte';
	import { detectIOS } from '$lib/detectIOS'; // Добавяме функцията за засичане на iOS

	// Променливи за заглавие и описание
	export let title = 'MP Clima | Sofia';
	export let description = 'Професионален монтаж и сервиз на климатици. Качествени услуги в София.';

	onMount(() => {
		detectIOS(); // Засичаме iOS при зареждане на страницата
	});
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<!-- Добавяме фиксиран фон -->
<div class="background" />

<div class="layoutWrapper">
	<Navigation />
	<div class="contentWrapper">
		<div class="content"><slot /></div>
	</div>
	<Footer />
</div>

<style>
	.background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.58)),
			url(/static/backgrounds/background_orig.jpg);
		background-position: center top;
		background-size: cover;
		background-repeat: no-repeat;
		z-index: -1; /* За фон на задния план */
	}

	.ios .background {
		background-attachment: scroll; /* Хак за iOS */
	}

	.contentWrapper {
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.content {
		margin: 0 auto;
		width: 90%;
		justify-content: center;
		padding: 20px;
		text-align: center;
	}

	.layoutWrapper {
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 100vh;
	}
</style>
