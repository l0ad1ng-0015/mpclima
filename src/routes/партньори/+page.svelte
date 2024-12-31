<script>
	export let title = 'Партньори | MP Clima';
	export let description =
		'Представяме нашите доверени партньори. Тук ще откриете логотата на водещи фирми, с които работим, за да осигурим качествени и надеждни климатични решения за нашите клиенти.';
	import { onMount } from 'svelte';

	onMount(() => {});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Twitter Card тагове -->
	<meta name="twitter:card" content="static\logo_square.jpg" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://mpclima.bg/static/logo_square.jpg" />
	<meta name="twitter:image:alt" content="Партньори" />

	<!-- Open Graph тагове (за Facebook и други) -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="https://mpclima.bg/static/logo_square.jpg" />
	<meta property="og:image:alt" content="Партньори" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mpclima.bg/партньори" />
</svelte:head>

<!-- <h1>Нашите партньори:</h1> -->

<div class="main-title">
	<h1 class="main-title-header">Нашите партньори</h1>
</div>

<div class="partners">
	<div class="partners-item1">
		<a href="https://bulclima.com/" target="_blank">
			<img src="/partners/bulclimaLogo.png" alt="Img 1" />
		</a>
		<div class="background" />
	</div>
	<div class="partners-item">
		<a href="https://techmart.bg/" target="_blank">
			<img src="/partners/techmartLogo.png" alt="Img 2" />
		</a>
		<div class="background" />
	</div>
	<div class="partners-item3">
		<a href="https://general-bulgaria.com/" target="_blank">
			<img src="/partners/generalLogo.png" alt="Img 3" />
		</a>
		<div class="background" />
	</div>
	<div class="partners-item4">
		<a href="https://www.magnum7.bg/" target="_blank">
			<img src="/partners/magnum7Logo.png" alt="Img 4" />
		</a>
		<div class="background" />
	</div>
	<div class="partners-item">
		<a href="https://metro.bg/" target="_blank">
			<img src="/partners/metroLogo.png" alt="Img 5" />
		</a>
		<div class="background" />
	</div>
	<div class="partners-item6">
		<a href="https://bg.mitsubishielectric.com/fa/" target="_blank">
			<img src="/partners/mitsubishi_electricLogo.png" alt="Img 6" />
		</a>
		<div class="background" />
	</div>
	<div class="partners-item7">
		<a
			href="https://condex.bg/?gad_source=1&gclid=Cj0KCQjw2PSvBhDjARIsAKc2cgMVfkbUmfkdUOa6OifpiLhSkcu-LL3LgQ0AgyI5G35GVxu967UJvu4aAirlEALw_wcB/"
			target="_blank"
		>
			<img src="/partners/mitsubishi_heavyLogo.png" alt="Img 7" />
		</a>
		<div class="background" />
	</div>
	<div class="partners-item8">
		<a href="https://gree-bulgaria.com/" target="_blank">
			<img src="/partners/GREE-logo.png" alt="Img 8" />
		</a>
		<div class="background" />
	</div>
	<div class="partners-item9">
		<a href="https://www.daikin.bg/bg_bg/customers.html/" target="_blank">
			<img src="/partners/daikinLogo.png" alt="Img 9" />
		</a>
		<div class="background" />
	</div>
	<div class="partners-item10">
		<a href="https://www.auxbg.com//" target="_blank">
			<img src="/partners/auxLogo.png" alt="Img 10" />
		</a>
		<div class="background" />
	</div>
	<div class="partners-item11">
		<a href="https://www.toshiba.bg/pages/bg/" target="_blank">
			<img src="/partners/toshibaLogo.png" alt="Img 11" />
		</a>
		<div class="background" />
	</div>
	<div class="partners-item12">
		<a href="https://tempex.bg/bg/" target="_blank">
			<img src="/partners/mideaLogo.png" alt="Img 12" />
		</a>
		<div class="background" />
	</div>
	<div class="partners-item13">
		<a href="https://tempex.bg/bg/" target="_blank">
			<img src="/partners/tempexLogo.png" alt="Img 12" />
		</a>
		<div class="background" />
	</div>
</div>

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
		margin-top: 10px !important;
		margin-bottom: 10px;
	}

	@media screen and (max-width: 473px) {
		.main-title-header {
			line-height: 47px;
		}
	}

	/* h1 {
		font-size: 50px;
	} */

	/* .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.297);
    opacity: 0.5;
    z-index: 1;
  } */

	.partners {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		gap: 3rem;
		background: rgba(0, 0, 0, 0.577);
		border-radius: 20px;
	}

	.partners-item {
		/* background: rgba(0, 0, 0, 0.297); */
		margin: 20px;
		text-align: center;
		position: relative;
		transition: transform 0.3s ease;
	}
	/* .partners-item6 {
    background: rgba(255, 255, 255, 0.564);
  } */

	.partners-item:hover {
		transform: scale(1.1); /* Scale up the partner item on hover */
	}

	.partners-item img {
		max-width: 100%;
		width: 350px;
		height: auto;
		z-index: 2;
		align-items: center;
		justify-content: center;
	}

	.partners-item1,
	.partners-item3,
	.partners-item4,
	.partners-item6,
	.partners-item7,
	.partners-item8,
	.partners-item9,
	.partners-item10,
	.partners-item11,
	.partners-item12,
	.partners-item13 {
		margin: 20px;
		text-align: center;
		position: relative;
		transition: transform 0.3s ease;
	}

	.partners-item1 img {
		margin-top: 17px;
		max-width: 100%;
		width: 390px;
		height: auto;
		z-index: 2;
		align-items: center;
	}
	.partners-item1:hover {
		transform: scale(1.1);
	}

	.partners-item3 img {
		margin-top: 27px;
		max-width: 100%;
		width: 420px;
		height: auto;
		z-index: 2;
		align-items: center;
	}
	.partners-item3:hover {
		transform: scale(1.1);
	}

	.partners-item4 img {
		/* margin-top: 10px; */
		max-width: 100%;
		width: 300px;
		height: auto;
		z-index: 2;
		align-items: center;
	}
	.partners-item4:hover {
		transform: scale(1.1);
	}

	.partners-item6 img {
		margin-top: 17px;
		max-width: 100%;
		width: 330px;
		height: auto;
		z-index: 2;
		align-items: center;
	}
	.partners-item6:hover {
		transform: scale(1.1);
	}

	.partners-item7 img {
		margin-top: 17px;
		max-width: 100%;
		width: 390px;
		height: auto;
		z-index: 2;
		align-items: center;
	}
	.partners-item7:hover {
		transform: scale(1.1);
	}

	.partners-item8 img {
		margin-top: 17px;
		max-width: 100%;
		width: 390px;
		height: auto;
		z-index: 2;
		align-items: center;
	}
	.partners-item8:hover {
		transform: scale(1.1);
	}

	.partners-item9 img {
		margin-top: 17px;
		max-width: 100%;
		width: 390px;
		height: auto;
		z-index: 2;
		align-items: center;
	}
	.partners-item9:hover {
		transform: scale(1.1);
	}
	.partners-item10 img {
		margin-top: 21px;
		max-width: 100%;
		width: 300px;
		height: auto;
		z-index: 2;
		align-items: center;
	}
	.partners-item10:hover {
		transform: scale(1.1);
	}

	.partners-item11 img {
		margin-top: 35px;
		max-width: 100%;
		width: 380px;
		height: auto;
		z-index: 2;
		align-items: center;
	}
	.partners-item11:hover {
		transform: scale(1.1);
	}

	.partners-item12 img {
		max-width: 100%;
		width: 330px;
		height: auto;
		z-index: 2;
		align-items: center;
	}
	.partners-item11:hover {
		transform: scale(1.1);
	}

	.partners-item13 img {
		margin: 47px 0;
		max-width: 100%;
		width: 330px;
		height: auto;
		z-index: 2;
		align-items: center;
	}
	.partners-item13:hover {
		transform: scale(1.1);
	}

	@media screen and (max-width: 930px) {
		.partners-item11 img {
			margin-top: 0;
		}

		.partners-item13 img {
			margin-top: 0;
			margin-bottom: 17px;
			max-width: 100%;
			width: 330px;
			height: auto;
			z-index: 2;
			align-items: center;
		}

		.partners-item13 {
			margin-top: 0;
		}
	}

	.partners-item + .partners-item {
		margin-left: 70px; /* Adjust the margin between items */
	}
</style>
