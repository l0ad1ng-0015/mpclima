<script>
	let services = [
	  { name: 'Монтаж на външно тяло на мултисплит при наличие на тръбен път', price: '140 лв.' },
	  { name: 'Монтаж на вътрешно тяло 7 - 14 000 BTU на мултисплит при наличие на тръбен път', price: '60 лв.' },
	];
</script>

<div class="main-title">
    Дпълнителни цени
</div>

<p></p>
<div class="table-container">
	<div class="table">
	<div>Услуга</div>
	<div class="price">Цена</div>
	{#each services as service}
	  <div>{service.name}</div>
	  <div>{service.price}</div>
	{/each}
  	</div>
  </div>


<style>
    .main-title {
		text-align: center;
		padding: 20px 10px;
		margin: 40px 0;
		font-size: 40px;
		font-weight: bold;
		background-color: #0000007e; 
		color: #fff; 
	}

    .table {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1px;
	margin: 0 auto; 
	}

	.table > div:nth-child(2n) {
	background-color: rgba(0, 0, 0, 0.6);
	}

	.table > div:nth-child(2n+1) {
	background-color: rgba(0, 0, 0, 0.356);
	}

	.table > div:first-child {
	background-color: #0070BB;
	color: #ffffff;
	font-weight: bold;
	}

	.table > div:first-child + div {
	background-color: #0070BB;
	color: #ffffff;
	}

	.table div {
	padding: 10px;
	border: 1px solid #ccc;
	}

	h3 {
		/* margin-top: 40px; */
		font-size: 35px;
		font-weight: bold;
		color: #ddd;
	}
   
</style>