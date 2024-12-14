<footer class="">
	<!-- <div class="footer-logo">
	</div> -->
	<div class="column">
		<!-- <img src="images/MP_LOGO_2-ptif.png" alt="Footer Logo">
			<h2>За фирмата</h2> 
			<div class="column-1-text">Designed and developed by<br />
				Warning: This website might use cookies to enhance your experience. <br> If you are not comfortable with
				this, please consider leaving the website.<br> Your privacy is important to us, and we respect your choice.<br>
				Thank you for your understanding.</div> -->
		<h2>За фирмата</h2>
		Designed and developed by<br />
		Warning: This website might use cookies to enhance your experience. <br /> If you are not
		comfortable with this, please consider leaving the website.<br /> Your privacy is important to
		us, and we respect your choice.<br />
		Thank you for your understanding.
	</div>

	<div class="column">
		<h2>Контакти</h2>
		<ul>
			<li>
				<a href="tel:0899 591664"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 1024 1024"
						{...$$props}
					>
						<path
							fill="#888888"
							d="M199.232 125.568L90.624 379.008a32 32 0 0 0 6.784 35.2l512.384 512.384a32 32 0 0 0 35.2 6.784l253.44-108.608a32 32 0 0 0 10.048-52.032L769.6 633.92a32 32 0 0 0-36.928-5.952l-130.176 65.088l-271.488-271.552l65.024-130.176a32 32 0 0 0-5.952-36.928L251.2 115.52a32 32 0 0 0-51.968 10.048"
						/>
					</svg>0899 591664,</a
				>
				<a href="tel:0898 414816"><svg />0898 414816</a>
			</li>

			<li>
				<a href="mailto:mpclimabg@gmail.com"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
						{...$$props}
						><path
							fill="#888888"
							d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
						/></svg
					>mpclimabg@gmail.com</a
				>
			</li>

			<!-- <a href="mailto:v.popov.businesses@gmail.com">v.popov.businesses@gmail.com</a> </li>  -->

			<li>
				<a
					href="https://www.google.com/maps/place/%D1%83%D0%BB.+%E2%80%9E%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%E2%80%9C+3,+1000+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F+%D1%86%D0%B5%D0%BD%D1%82%D1%8A%D1%80,+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.69742,23.3237038,17z/data=!3m1!4b1!4m6!3m5!1s0x40aa856e34c59f1d:0x97d07b6d259f65c!8m2!3d42.6974161!4d23.3262787!16s%2Fg%2F11c1_6sygp?entry=ttu"
					target="_blank"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 1024 1024"
						{...$$props}
						><path
							fill="#888888"
							d="M512 928c23.936 0 117.504-68.352 192.064-153.152C803.456 661.888 864 535.808 864 416c0-189.632-155.84-320-352-320S160 226.368 160 416c0 120.32 60.544 246.4 159.936 359.232C394.432 859.84 488 928 512 928m0-435.2a64 64 0 1 0 0-128a64 64 0 0 0 0 128m0 140.8a204.8 204.8 0 1 1 0-409.6a204.8 204.8 0 0 1 0 409.6"
						/></svg
					>Централен офис: ул.Московска 3, София</a
				>
			</li>
		</ul>
	</div>

	<div class="column">
		<h2>Услуги</h2>
		<ul>
			<li class="first-li"><a href="/каталог">Продажба на климатици</a></li>
			<li><a href="/дейности">Монтаж и Демонтаж на климатици </a></li>
			<li><a href="activities/профилактика">Профилактика</a></li>
			<!-- <li><a href="activities/сервизно_обслужване">Сервизна дейност</a></li> -->
			<li><a href="activities/нестандартни-услуги">Нестандартлни услуги</a></li>
		</ul>
	</div>

	<div class="column">
		<h2>Допълнително</h2>
		<ul>
			<li><a href="/партньори">Партньори</a></li>
			<li><a href="/галерия">Галерия</a></li>
		</ul>
	</div>

	<div class="column" />

	<div class="text-center p-4" style="text-aling: center;">
		© 2024 Copyright:
		<a class="text-reset fw-bold" href="https://mpclima.bg/">MP Clima | Sofia</a>
	</div>
</footer>

<style>
	footer {
		/* border: solid 1px var(--blue-6);; */
		display: grid;
		justify-content: center;
		align-content: center;
		grid-template-columns: repeat(4, 1fr);
		/* grid-template-rows: repeat(3, minmax(40px, auto)); */
		gap: var(--size-fluid-2);
		padding: var(--size-fluid-5) var(--size-fluid-2);
		color: white;
		background-color: rgba(0, 0, 0, 0.552);
		flex-direction: row;
		flex-wrap: wrap;
		margin-top: 50px;

		/* margin-bottom: 50px; */

		& a {
			text-decoration: none;
		}
		& .column {
			/* border: solid 1px green; */
			width: 80%;
			padding: 20px;
			text-align: left;

			& .column-1-text {
				padding-top: 10px;
			}
		}
		& .column ul li svg {
			width: 1em;
			height: 1em;
			margin-right: 15px;
			fill: #8888;
			list-style: none;
		}
		& .column ul li a {
			font-size: 16px;
			text-transform: none;
			color: #ffffff;
			text-decoration: none;
			font-weight: 300;
			color: #bbbbbb;
			display: block;
			transition: all 0.3s ease;
		}
		& .column ul li a:hover {
			color: #ffffff;
			padding-left: 10px;
		}
		& .column ul li {
			color: #bbbbbb;
			list-style: none;
			margin-top: 3.5px;
		}
		/* & .column li{
			color: blue;
		} */
		& .text-center {
			background-color: rgba(0, 0, 0, 0.05);
			text-align: center;
			margin: 15px;
			justify-content: center;
		}

		& .text-reset a:hover {
			color: #ffffff;
			padding-left: 10px;
		}
		& .text-reset {
			color: #bbbbbb;
		}
	}
	/* @media screen and (max-width: 800px) {
	main {
		flex-direction: column;
	}
	main>* {
		width: 100%;
	}
} */

	/* .row-without-columns {
		grid-column-start: span 3;
		padding: var(--size-fluid-2) var(--size-fluid-2);
		/* border: solid 1px var(--blue-6); 
	} */
	/* grid-template-columns: 8px auto 8px;
	grid-template-rows: 8px auto 12px; */

	h2 {
		margin-bottom: 10px;
	}

	@media (max-width: 800px) {
		footer {
			grid-template-columns: 1fr; /* Stack columns vertically on smaller screens */
			background-color: rgba(0, 0, 0, 0.476);
		}
	}
</style>
