<footer class="">
	<div class="column">
		<h2>За фирмата</h2>
		Designed and developed by Viking<br />
		Warning: This website might use cookies to enhance your experience. If you are not comfortable with
		this, please consider leaving the website. Your privacy is important to us, and we respect your choice.
		Thank you for your understanding.
	</div>
	<div class="column">
		<h2>Контакти</h2>
		<ul>
			<li><a href="tel:+123456789">123-456-789</a></li>
			<li><a href="mailto:mpclimabg@gmail.com">Фирмен имейл: mpclimabg@gmail.com</a></li>
			<li><a href="mailto:v.popov.businesses@gmail.com">v.popov.businesses@gmail.com</a></li>
			<li><a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%E2%80%9E%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%E2%80%9C+3,+1000+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F+%D1%86%D0%B5%D0%BD%D1%82%D1%8A%D1%80,+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.69742,23.3237038,17z/data=!3m1!4b1!4m6!3m5!1s0x40aa856e34c59f1d:0x97d07b6d259f65c!8m2!3d42.6974161!4d23.3262787!16s%2Fg%2F11c1_6sygp?entry=ttu">Централен офис: ул.Московска 3, София</a></li>
		</ul>
	</div>
	<div class="column" >
		<h2 >Услуги</h2>
		<ul>
		   	<li>Продажба на климатици</li>
			<li>Монтаж и Демонтаж на климатици</li>
			<li>Профилактика</li>
			<li>Сервизна дейност</li>
		</ul>
	</div>
	<div class="column" />
	
	<div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
		© 2021 Copyright:
		<a class="text-reset fw-bold" href="https://mpclima.bg/">MP Clima | Sofia</a>
	  </div>
</footer>

<style>
	footer {
		/* border: solid 1px var(--blue-6);; */
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		/* grid-template-rows: repeat(3, minmax(40px, auto)); */
		gap: var(--size-fluid-2);
		padding: var(--size-fluid-5) var(--size-fluid-2);
		color: white;
		background-color: rgba(0, 0, 0, 0.35);

		& a {
			text-decoration: none;
		}
		& .column {
			/* border: solid 1px green; */
			width: 90%;
			padding: 20px;
			text-align: left;
		}
		& .column ul li a{
			font-size: 16px;
			text-transform: capitalize;
			color: #ffffff;
			text-decoration: none;
			font-weight: 300;
			color: #bbbbbb;
			display: block;
			transition: all 0.3s ease;
		}
		& .column ul li a:hover{
			color: #ffffff;
			padding-left: 10px;
		}
		& .column ul li	{
			color: #bbbbbb;
		}
		& .column li{
			color: blue;
		}
		& .text-center{
			background-color: rgba(0, 0, 0, 0.05);
		}
	}

	/* .row-without-columns {
		grid-column-start: span 3;
		padding: var(--size-fluid-2) var(--size-fluid-2);
		/* border: solid 1px var(--blue-6); 
	} */
	/* grid-template-columns: 8px auto 8px;
	grid-template-rows: 8px auto 12px; */

	
</style>

