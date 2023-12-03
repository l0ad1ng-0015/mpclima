
<script>
    let showAdditionalSection = false;
  
    function toggleSection() {
      showAdditionalSection = !showAdditionalSection;
    }
  </script>
  
  <div class="montaj-container-wrapper">
  
    <div class="montaj-container">
      <p>Профилактика на климатици:</p> 
    <h1>9-12 000 BTU</h1>
    <hr>
    <li class="first-li">Преглед на вътрешно тяло</li>
    <li>Почистване на вътрешно тяло</li>
    <li>Преглед на външно климатично тяло</li>
    <li>Измерване на работно налягане.</li>
    <li>Измерване на температура на изпарение на <br>фреона</li>
    <li>Почистване на филтърна секция</li>
    <h2>Цена: 270лв</h2>
  </div>
  
  <div class="montaj-container2">
    <p>Профилактика на климатици:</p> 
    <h1>12-24 000 BTU</h1>
     <hr>
     <li class="first-li">Преглед на вътрешно тяло</li>
    <li>Почистване на вътрешно тяло</li>
    <li>Преглед на външно климатично тяло</li>
    <li>Измерване на работно налягане.</li>
    <li>Измерване на температура на изпарение на <br>фреона</li>
    <li>Почистване на филтърна секция</li>
     <h2>Цена: 270лв</h2>
  </div>
  
  <div class="montaj-container3">
    <p>Профилактика на климатици:</p>
    <h1>24 000 + BTU</h1>
     <hr>
    <li class="first-li">Преглед на вътрешно тяло</li>
    <li>Почистване на вътрешно тяло</li>
    <li>Преглед на външно климатично тяло</li>
    <li>Измерване на работно налягане.</li>
    <li>Измерване на температура на изпарение на <br>фреона</li>
    <li>Почистване на филтърна секция</li>
     <h2>Цена: 270лв</h2>
  </div>
  </div>
  
  
  
  
  <style>
  li {
    text-align: left; 
  }
  .montaj-container-wrapper {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      margin: 0 -5px;
  } 
    .montaj-container, .montaj-container2, .montaj-container3 {
      padding: 30px;
      width: calc(30% - 10px);
      box-sizing: border-box; 
      display: flex;
      flex-wrap: wrap;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 15px;
      margin: 0 100px;
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
    margin-bottom: 15px;
  }
  
  hr{
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
      margin-top: 18px;
    }
  </style>