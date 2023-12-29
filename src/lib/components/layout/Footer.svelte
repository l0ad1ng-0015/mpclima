<footer class="">
	<div class="column">
		<h2>Reach on</h2>
		<ul>
			<li><a href="/build-with-us">Contact</a></li>
			<li><a href="https://discord.gg/RTyMdqutqD">Discord</a></li>
			<li><a href="https://discord.gg/RTyMdqutqD">Linkedin</a></li>
			<li><a
				href="https://github.com/gudata"
				target="_blank"
				rel="noreferrer"
				class="font-medium underline underline-offset-4">Github</a
			></li>

		</ul>
	</div>
	<div class="column" >
		<h2 >Products</h2>
		<ul>
			<li>Data Listener</li>
			<li>RPI Wifi Autoconnect</li>
		</ul>
	</div>
	<div class="column" />
	<div class="row-without-columns">
		Designed and developed by Gudasoft<br />
		Warning: This website might use cookies to enhance your experience. If you are not comfortable with
		this, please consider leaving the website. Your privacy is important to us, and we respect your choice.
		Thank you for your understanding.
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

		& a {
			text-decoration: none;
		}
		& .column {
			/* border: solid 1px green; */
			padding: 20px;
			text-align: left;
		}
	}

	.row-without-columns {
		grid-column-start: span 3;
		padding: var(--size-fluid-2) var(--size-fluid-2);
		/* border: solid 1px var(--blue-6); */
	}
	/* grid-template-columns: 8px auto 8px;
	grid-template-rows: 8px auto 12px; */
</style>
