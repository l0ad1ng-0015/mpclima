<script>
    let showAdditionalSection = false;
  
    function toggleSection() {
      showAdditionalSection = !showAdditionalSection;
    }
  </script>
  
  <div class="main-title">
    Профилактика на климатици
  </div>
  
  <div class="profilaktika-container-wrapper">
    <div class="profilaktika-container">
      <p>Профилактика на климатици:</p>
      <h1>9-24 000 BTU</h1>
      <hr>
      <li class="first-li">Разглобяване на вътрешно тяло</li>
      <li>Основно почистване на всички пластмасови елементи</li>
      <li>Почистване на филтърна секция</li>
      <li>Преглед на външно климатично тяло</li>
      <li>Работен тест-проверка на работата</li>
      <li>Замерване на температурата на вътрешното тяло</li>
      <li class="last-li">Почистване на перката във вътрешното тяло се прави <strong>АКО</strong> е замърсено</li>
      <h2>Цена: 60-100лв</h2>
      <button class="toggle-button" on:click={toggleSection}>
        {showAdditionalSection ? 'Скрий повече информация' : 'Покажи повече информация'}
      </button>
      {#if showAdditionalSection}
        <div class="additional-section">
          <p>
            Редовната профилактика на климатика е от съществено значение за оптималната му работа и дълготрайност. Нашият екип предлага професионални услуги по поддръжка и почистване, които включват:
          </p>
          <ul class="prophylaxis-list">
            <li class="prophylaxis-list-item"><strong>Почистване на филтрите</strong>: Натрупването на прах и мръсотия намалява ефективността и може да доведе до повишено износване на системата.</li>
            <li class="prophylaxis-list-item"><strong>Проверка на хладилния агент</strong>: Недостигът или изтичането на хладилен агент може да доведе до неправилна работа на климатика и повишена консумация на електроенергия.</li>
            <li class="prophylaxis-list-item"><strong>Измерване на налягането</strong>: Правилното налягане гарантира ефективната работа на системата и предотвратява възможни повреди.</li>
            <li class="prophylaxis-list-item"><strong>Проверка на електрическите компоненти</strong>: Осигурява безопасната и надеждна работа на климатика.</li>
          </ul>
          <p>
            Не чакайте климатикът ви да започне да създава проблеми. Планирайте профилактика още днес и се насладете на свеж и комфортен въздух във вашия дом или офис. Свържете се с нас за повече информация и запазване на час.
          </p>
          <a href="contact.html" class="prophylaxis-button">Свържете се с нас</a>
        </div>
      {/if}
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
    
    .profilaktika-container-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;
      padding: 40px 20px;
      padding-top: 20px;
      background-color: rgba(0, 0, 0, 0.297);
      text-align: left;
    }
    
    .profilaktika-container {
      padding: 20px 20px;
      flex-wrap: wrap;
      width: calc(25% - 40px);
      box-sizing: border-box;
      align-items: flex-start;
      justify-content: flex-start;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 15px;
      margin-bottom: 20px;
    }
    
    @media screen and (min-width: 1681px) {
      .profilaktika-container {
        width: calc(25% - 40px);
      }
    }
    
    @media screen and (max-width: 1380px) {
      .profilaktika-container {
        width: calc(50% - 40px);
      }
    }
    
    @media screen and (max-width: 765px) {
      .profilaktika-container {
        width: calc(100% - 40px);
      }
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
      list-style: none;
    }
    
    .first-li {
      margin-top: 20px;
    }
    
    .last-li {
      list-style: disc;
      text-align: left;
    }
    
    .toggle-button {
      display: block;
      margin: 20px auto;
      padding: 10px 20px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      text-align: center;
      font-size: 1rem;
    }
    
    .toggle-button:hover {
      background-color: #2980b9;
    }
    
    .additional-section {
      margin-top: 20px;
    }
    
    .prophylaxis-list {
      list-style-type: disc;
      margin-left: 1.5rem;
    }
    
    .prophylaxis-list-item {
      margin-bottom: 0.5rem;
    }
    
    .prophylaxis-button {
      display: block;
      width: fit-content;
      margin: 2rem auto 0;
      padding: 0.75rem 1.5rem;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      text-align: center;
      text-decoration: none;
      font-size: 1rem;
    }
    
    .prophylaxis-button:hover {
      background-color: #2980b9;
    }
  </style>
  