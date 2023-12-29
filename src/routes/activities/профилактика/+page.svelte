
<script>
    let showAdditionalSection = false;
  
    function toggleSection() {
      showAdditionalSection = !showAdditionalSection;
    }
  </script>
  
  <div class="profilaktika-container-wrapper">
  
    <div class="profilaktika-container">
      <p>Профилактика на климатици:</p> 
    <h1>9-24 000 BTU</h1>
    <hr>
    <li class="first-li">Преглед на вътрешно тяло</li>
    <li>Преглед на вътрешно тяло</li>
    <li>Почистване на вътрешно тяло</li>
    <li>Преглед на външно климатично тяло</li>
    <li>Измерване на работно налягане.</li>
    <li>Измерване на температура на изпарение на <br>фреона</li>
    <li>Почистване на филтърна секция</li>
    <h2>Цена: 60лв</h2>
  </div>
  

  </div>
  
  
  
  
  <style>
 
  .profilaktika-container-wrapper {
		display: flex;
		justify-content: center;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
		/* margin-right: 400px; */
	}
	
	.profilaktika-container {
		padding: 30px;
		width: calc(30% - 130px);
		box-sizing: border-box;
		background-color: rgba(0, 0, 0, 0.7);
		border-radius: 15px;
		margin: 0 30px;
		/* display: flex; */
		/* flex-wrap: wrap; */
		/* margin-right: 100pc; */
	}

	h1 {
		font-size: 40px;
		font-weight: bold;
		color: #ddd;
		margin-top: 10px;
		
	}

	h2 {
		font-size: 30px;
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
  
    
   /* .first-li {
      margin-top: 18px;
    } */
  </style>