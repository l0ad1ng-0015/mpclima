<!-- Услуги Section -->

<div class="container">
	<div class="main-title">
		<h1 class="main-title-header">Услуги</h1>
	</div>

	<div class="services" style="margin-top: 60px;">
		<div class="service-items">
			<div class="service-item">
				<img src="/images/icons/stickman-prodajbi.png" alt="Service 1" />
				<h3>Продажба на климатици</h3>
				<p>Професионална инсталация на климатици.</p>
				<a href="/продажба">
					<button style="padding: 10px 12px;" class="more">Виж повече</button>
				</a>
			</div>
			<div class="service-item">
				<img src="/images/icons/stickman-montaj.png" alt="Service 1" />
				<h3>Монтаж</h3>
				<p>Професионална инсталация на климатици.</p>
				<a href="/activities/монтаж">
					<button style="padding: 10px 12px;" class="more">Виж повече</button>
				</a>
			</div>
			<div class="service-item">
				<img src="/images/icons/stickman-demontaj.png" alt="Service 3" />
				<h3>Демонтаж</h3>
				<p>Безопасно демонтиране на стари или повредени климатици.</p>
				<a href="/activities/демонтаж">
					<button style="padding: 10px 12px;" class="more">Виж повече</button>
				</a>
			</div>
			<div class="service-item">
				<img src="/images/icons/stickman-profilaktika.png" alt="Service 3" />
				<h3>Профилактика</h3>
				<p>Редовна поддръжка на вашите климатици.</p>
				<a href="/activities/профилактика">
					<button style="padding: 10px 12px;" class="more">Виж повече</button>
				</a>
			</div>
			<div class="service-item">
				<img src="/images/icons/stickman-service.png" alt="Service 4" />
				<h3>Сервиз на място</h3>
				<p>Професионално обслужване и поддръжка.</p>
				<a href="/activities/сервизно-обслужване">
					<button style="padding: 10px 12px;" class="more">Виж повече</button>
				</a>
			</div>
			<div class="service-item">
				<img src="/images/icons/stickman-nestan.png" alt="Service 5" />
				<h3>Нестандартни услуги</h3>
				<p>Нестандартни цени, които не са включени в по-горните услуги</p>
				<a href="/activities/нестандартни-услуги">
					<button style="padding: 10px 12px;" class="more">Виж повече</button>
				</a>
			</div>
		</div>
	</div>
</div>

<!-- 
OLD ONE

<div>
	<a href="/activities/монтаж">
		<button type="button">МОНТАЖ</button>
	</a>
	<a href="/activities/демонтаж">
		<button type="button">ДЕМОНТАЖ</button>
	</a>
	<a href="/activities/профилактика">
		<button type="button">ПРОФИЛАКТИКА</button>
	</a>
	<a href="/activities/сервизно_обслужване">
		<button type="button">СЕРВИЗНО ОБСЛУЖВАНЕ</button>
	</a>
	<a href="/activities/нестандартни-услуги">
		<button type="button">НЕСТАНДАРТНИ УСЛУГИ</button>
	</a>
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

	/* button {
    display: block;
    margin-bottom: 50px; 
} */
</style> -->

<style>
	.container {
		/* display: flex; */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 20px;
	}

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

	.services {
		margin: 20px 0;
		width: 100%;
		max-width: 1200px;
	}

	.a-h2 {
		margin-bottom: 20px;
		font-size: 2.5em;
		color: #c1bebe;
		text-decoration: none;
	}
	.a-h2:hover {
		color: white;
		transition: 0, 3s;
	}

	.service-items {
		display: grid;
		gap: 1.3rem;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		justify-items: center;
		width: 100%;
	}

	.service-item {
		margin: 10px;
		padding: 20px;
		border: 1px solid #ccc;
		border-radius: 10px;
		text-align: center;
		width: 300px;
		transition: transform 0.3s;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		background: #00000096;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	.service-item:hover {
		border-color: #0070bb;
		transition: 0.23s;
		box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
	}

	.service-item img {
		width: 150px;
		height: 198px;
		margin-bottom: 10px;
	}

	.service-item img:hover {
		transform: translateY(-8px);
		transition-duration: 0.3s;
	}

	@media screen and (max-width: 599px) {
		.service-items {
			justify-content: center;
		}

		.service-item {
			width: 90%;
			margin: 10px 0;
			border: 1px solid #0070bb;
		}

		.more {
			width: 100%;
			padding: 10px 0;
		}

		h1 {
			margin-top: 0;
			font-size: 2.7rem;
		}

		.p-main {
			font-size: 0.9rem;
		}
	}

	@media screen and (max-width: 390px) {
		h1 {
			font-size: 2.5rem;
		}

		.p-main {
			font-size: 0.856rem;
		}

		.service-item h3 {
			font-size: 0.5rem;
		}
	}

	@media screen and (min-width: 1364px) {
		.p-main {
			padding: 0 20px;
		}
	}

	.service-item h3 {
		margin: 10px 0;
		font-size: 1.5em;
	}

	.service-item p {
		font-size: 1em;
		color: #a9a6a6;
		text-decoration: none;
	}

	.more {
		width: 100%;
		padding: 10px;
		text-align: center;
		margin: 10px 0 0 0;
		border-radius: 25px;
		font-weight: bold;
		border: 2px solid #0070bb;
		background-color: rgba(0, 0, 0, 0.17);
		color: #fff;
		cursor: pointer;
		overflow: hidden;
		z-index: 1;
	}

	.more:hover {
		background-color: #0070bb;
		color: #fff;
	}

	h1 {
		margin-top: 60px;
	}
</style>
