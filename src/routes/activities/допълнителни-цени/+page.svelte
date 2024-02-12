<div class="main-title">
    Дпълнителни цени
</div>

<div class="prices">
    <!-- <h3>
        <b>Демонтаж на препятствия </b>
    </h3> -->

    <div class="prices-box">
        <p>
            <!-- <span>Услуга</span>
            <span>Цена</span> -->
            Услуга
            <p2>Цена</p2>
        </p>

        <p>
            Демонтаж на парапети и всякакви препятствие в терасата
            <p2>80лв</p2>

        <p>
            Демонтаж на стъклопакет | прозорец (единицен с размери 60-120см) 
            <p2>70лв</p2>
        </p>
        
        <p>
            Демонтаж на стъклопакет, двоен - цени само с предварителен огле и по преценка на монтажника
            <p2>от 70лв на горе</p2>
        </p>

        
        
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

    .prices {
		padding: 40px 20px;
    	width: 100%;
   	 	max-width: 1400px;
		/* max-width: (--width); */
		margin: 40px auto;
	}

	.prices p {
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

		.prices-box {
			margin: 20px; 
		}
		.prices p:first-child {
 			display: flex;
  			color: #fff;
  			background: #0070BB;
  			border-top-left-radius: 8px;
  			border-top-right-radius: 8px;
		}

		.prices p:nth-of-type(odd):not(:first-child) {
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

		.prices p:nth-of-type(even) {
			background: rgba(0, 0, 0, 0.356);
			display: flex;
			justify-content: space-between;
			padding: 10px;
			margin: 0;
			border-left: 1px solid var(--light);
			border-right: 1px solid var(--light);
		}


    p {
		font-size: 22px;
		color: #ddd;
	}
    b {
        font-size: 35px;
    }

   
</style>