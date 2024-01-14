<script>
	let showAdditionalSection = false;

	function toggleSection() {
		showAdditionalSection = !showAdditionalSection;
	}
</script>


<div class="main-title">
	Монтаж на климатици
</div>

<div class="montaj-container-wrapper">
	<!-- <div class="montaj-title">Стандартен монтаж</div> -->
	<h2>
		<b>Стандартен монтаж</b>
	</h2>
	<div class="montaj-container">
		<p>Монтаж на климатици:</p>
		<h1>9-12 000 BTU</h1>
		<hr />
		<li class="first-li">Качване на климатик и материали с асансьор</li>
		<li>Фиксиране на стойка на вътрешно тяло</li>
		<li>Технологичен отвор в стената 1 бр.</li>
		<li>Медни тръби с термо изолация до 3 л. м.</li>
		<li>Отводняваща гофрирана тръба до 3 л. м.</li>
		<li>Комуникационен кабел до 5 л. м.</li>
		<h2>Цена: 270лв</h2>
	</div>

	<div class="montaj-container">
		<p>Монтаж на климатици:</p>
		<h1>12-18 000 BTU</h1>
		<hr />
		<li class="first-li">Качване на климатик и материали с асансьор</li>
		<li>Фиксиране на стойка на вътрешно тяло</li>
		<li>Технологичен отвор в стената 1 бр.</li>
		<li>Медни тръби с термо изолация до 3 л. м.</li>
		<li>Отводняваща гофрирана тръба до 3 л. м.</li>
		<li>Комуникационен кабел до 5 л. м.</li>
		<h2>Цена: 290лв</h2>
	</div>

	<div class="montaj-container">
		<p>Монтаж на климатици:</p>
		<h1>18-24 000 BTU</h1>
		<hr />
		<li class="first-li">Качване на климатик и материали с асансьор</li>
		<li>Фиксиране на стойка на вътрешно тяло</li>
		<li>Технологичен отвор в стената 1 бр.</li>
		<li>Медни тръби с термо изолация до 3 л. м.</li>
		<li>Отводняваща гофрирана тръба до 3 л. м.</li>
		<li>Комуникационен кабел до 5 л. м.</li>
		<h2>Цена: 310лв</h2>
	</div>

	<div class="montaj-container">
		<p>Монтаж на климатици:</p>
		<h1>24 000 + BTU</h1>
		<hr />
		<li class="first-li">Качване на климатик и материали с асансьор</li>
		<li>Фиксиране на стойка на вътрешно тяло</li>
		<li>Технологичен отвор в стената 1 бр.</li>
		<li>Медни тръби с термо изолация до 3 л. м.</li>
		<li>Отводняваща гофрирана тръба до 3 л. м.</li>
		<li>Комуникационен кабел до 5 л. м.</li>
		<h2>Цена: По договаряне</h2>
	</div>
</div>

<div class="montaj-info">
	<h3>
		<b>Допълнителни цени</b>
	</h3>

	<div class="montaj-info-box">
        <p>
			<!-- <span>Услуга</span>
			<span>Цена</span> -->
			Услуга
			
		</p> 

		<p>
			Монтаж със скеле
			<p2>120лв</p2>
		</p>

		<p>
			Монтаж с висока стълба над 3 метра 
			<p2>80лв</p2>
		</p>
	</div>
</div>

<style>
	 /* body {
    margin: 0;
    padding: 0;
    border-top: 50px solid #ddd; /* Adjust the color and size as needed */

  	
	.main-title {
    text-align: center;
    padding: 20px 10px;
	margin: 40px 0;
    font-size: 40px;
    font-weight: bold;
    background-color: #0000007e; 
    color: #fff; 
    }

	/* .montaj-title {
		text-align: center;
		font-size: 30px;
		font-weight: bold;
		color: white; 
		margin-bottom: 10px;
	} */
	.montaj-container-wrapper {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		gap: 1rem;
		padding: 40px 20px;
		background-color: rgba(0, 0, 0, 0.297);
		text-align: left;
		/* margin-right: 400px; */
		/* margin-right: 400px; */

		/* & .montaj-title{
			justify-content: center;
		} */
	}
		
	
	.montaj-container {
		padding: 20px 20px;
		width: calc(30% - 200px);
		box-sizing: border-box;
		background-color: rgba(0, 0, 0, 0.7);
		border-radius: 15px;
		margin: 0 30px;
		text-align: left;

		/* display: flex; */
		/* flex-wrap: wrap; */
		/* margin-right: 100pc; */
	}

	.montaj-info {
		padding: 40px 20px;
    	width: 100%;
   	 	max-width: var(--width);
		margin: 40px auto;
	}

	.montaj-info p {
		background: rgba(0, 0, 0, 0.246);
		display: flex;
		align-items: center;
    	justify-content: space-between;
		padding: 10px;
   	 	margin: 0;
		gap: 10px;
   	 	border-left: 1px solid var(--light);
    	border-right: 1px solid var(--light);
	}

		.montaj-info-box {
			margin: 20px; 
		}

		.montaj-info p:first-child {
 			display: flex;
  			color: #fff;
  			background: #0070BB;
  			border-top-left-radius: 8px;
  			border-top-right-radius: 8px;
		}

		.montaj-info p:nth-of-type(odd):not(:first-child) {
			background: rgba(0, 0, 0, 0.6);
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 10px;
			margin: 0;
			gap: 10px;
			border-left: 1px solid var(--light);
			border-right: 1px solid var(--light);
		}

		.montaj-info p:nth-of-type(even) {
			background: rgba(0, 0, 0, 0.356);
			display: flex;
			justify-content: space-between;
			padding: 10px;
			margin: 0;
			border-left: 1px solid var(--light);
			border-right: 1px solid var(--light);
		}

	/* .montaj-info p:nth-of-type(odd) {
		background: var(--light);
	} */
	
	


	h1 {
		font-size: 40px;
		font-weight: bold;
		color: #ddd;
		margin-top: 10px;
	}

	h2 {
		margin-top: 40px;
		font-size: 30px;
		font-weight: bold;
		color: #ddd;
	}

	h3 {
		margin-top: 40px;
		font-size: 35px;
		font-weight: bold;
		color: #ddd;
	}

	p {
		font-size: 22px;
		color: #ddd;
	}

	
	
	hr {
		width: 50%;
		height: 2px;
		background: white;
		border: none;
		margin: 0;
	}

	li {
		font-size: 18px;
		color: #ddd;
		margin-bottom: 25px;
	}

	.first-li {
		margin-top: 20px;
	}
</style>
