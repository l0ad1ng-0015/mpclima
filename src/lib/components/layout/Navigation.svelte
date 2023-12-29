<div class="nav">
	<img src="/images/logo.png" class="logo" />
	<!---<img src="/images/arrow_down.png" class="arrow"> -->
	<ul>
		<li><a href="/">Начало</a></li>
		<li class="submenu">
			<a href="#">За нас</a>
			<ul class="sub-nav">
				<li><a href="/основаване">Основаване Фирма</a></li>
				<li><a href="/партньори">Партньори</a></li>
				<li><a href="/галерия">Галерия</a></li>
				<li><a href="/галерия2">Галерия 2</a></li>
				<li><a href="/галерия3">Галерия 3</a></li>
			</ul>
		</li>
		<li class="submenu">
			<a href="#">Ценови листи</a>
			<ul class="sub-nav">
				<li><a href="/дейности">Дейности</a></li>
				<li><a href="/доставка">Доставка</a></li>
			</ul>
		</li>

		<li class="submenu">
			<a href="#">Контакти</a>
			<ul class="sub-nav">
				<li><a href="/връзки">Връзки</a></li>
				<li><a href="/свържете се">Свържете се</a></li>
			</ul>
		</li>
	</ul>
</div>

<style>
	.nav {
		/* Corrected class name here */
        height: 11rem;
		width: 90%;
		margin: auto;
		padding: 30px 0 0 20px;
		display: flex;
		align-items: center;
		justify-content: space-between
        
	}
	.logo {
		cursor: pointer;
		padding: 50px 0 0 40px;
		width: 310px;
	}
	.nav ul li {
		list-style: none;
		display: inline-table;
		margin: 1dvh;
		position: relative;
	}
	.nav ul li a {
		text-decoration: none;
		color: #fff;
		text-transform: uppercase;
	}
	.nav ul li::after {
		content: '';
		height: 3px;
		width: 0;
		background: #0070bb;
		position: absolute;
		left: 0;
		bottom: -5px;
		transition: 0.5s;
	}
	.nav ul li:hover::after {
		width: 100%;
	}
</style>
