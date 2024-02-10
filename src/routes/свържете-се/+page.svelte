<script lang="ts">

	let name = '';
    let phone = '';
	let email = '';
    let subject = '';
	let message = '';
	let statusMessage = '';
	let apples = 'apples';

    
	const submitForm = async () => {
		if (apples != 'oranges') {
			return;
		}

		const chat_id = '-1002036390065';
		const botID = '6537438238:AAFfi1D4ZP1FYkb87uBi3tAVOFM1LoSOuAo';
		const telegramURL = `https://api.telegram.org/bot${botID}/sendMessage`;

        // https://api.telegram.org/bot6537438238:AAFfi1D4ZP1FYkb87uBi3tAVOFM1LoSOuAo/getUpdates

		let text = JSON.stringify({ name, phone, email, subject, message }, null, 2);
		try {
			const response = await fetch(telegramURL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ chat_id, text })
			});

			if (response.ok) {
				statusMessage = 'Съобщението беше изпратено успешно!';
			} else {
				statusMessage = 'Изпращането беше неуспешно :( ' + (await response.text());
			}
		} catch (error) {
			console.error('Error:', error);
			statusMessage = 'An error occurred.';
		}

		name = '';
        phone = '';
		email = '';
		message = '';
	};

	const doApples = () => {
		apples = 'oranges';
		console.log('apples', apples);
	};

</script>

<div class="main-title">
	Контакти
</div>

<div class="container">
    <div class="social">



        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.2977346377706!2d23.3262787!3d42.6974161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa856e34c59f1d%3A0x97d07b6d259f65c!2z0KHQvtGE0LjRjyDRhtC10L3RgtGK0YAsINGD0LsuIOKAntCc0L7RgdC60L7QstGB0LrQsOKAnCAzLCAxMDAwINCh0L7RhNC40Y8!5e0!3m2!1sbg!2sbg!4v1706443322618!5m2!1sbg!2sbg" 
        width="600" 
        height="480" 
        frameborder="0" 
        allowfullscreen="" aria-hidden="false" tabindex="0" loading="lazy"></iframe>
        <p>Централен офис: ул.Московска 3, София</p>
        <p>Телефони: 0899 591664, 0898 414816</p>
        <p>Работно време: Понеделник-Петък 8:00 - 20:00</p>
        <!-- <b>Централен офис: ул.Московска 3, София</b>
        <b>Телефони: 0899 591664, 0898 414816</b>
        <b>Работно време: Понеделник-Петък 8:00 - 20:00</b> -->
    </div>
    
   
    

   <div class="contact">
        <div class="contact-content">
            <h2>Свържете се с нас</h2>
            <p>Ако имате въпроси или запитвания, <br> моля свържете се като попълние формата .</p>
        
            <form on:submit|preventDefault={submitForm} class="contact-form">
                <input type="hidden" bind:value={apples} />
                <input type="text" name="name" bind:value={name} placeholder="Име (задължително)" required  title="Моля, попълнете това поле">
                <input type="number" name="phone" bind:value={phone} placeholder="Телефон (задължително)" required title="Моля, попълнете това поле">
                <input type="email" name="email" bind:value={email} placeholder="Имейл (задължително)" required title="Моля, попълнете това поле">
                <input type="text" name="your-subject" bind:value={subject} placeholder="Относно">
                <textarea on:input={doApples} bind:value={message} name="message" placeholder="Вашето ъобщение"></textarea>
                <button type="submit">Изпрати</button>
                <p>{statusMessage}</p>
            </form>
        </div>
   </div>
</div>


<style>
    .main-title {
        text-align: center;
        padding: 20px 10px;
	    margin: 40px 0;
        margin-top: 20px;
        /* margin-bottom: 50px; */
        font-size: 40px;
        font-weight: bold;
        background-color: #0000007e; 
        color: #fff;     
    }
    p, h2 {
        color: white;
    }

    .container {
        display: flex;
        justify-content: center;
        /* border: solid 1px green; */
        width: 100%;
        gap: 10rem;
        flex-wrap: wrap-reverse;
        align-items: flex-end;
       
        /* align-items: stretch; */
    }
    
    .contact {
        text-align: center;
    }

    .contact-content {
        width: 100%;
        max-width: 500px;
        background-color: rgba(0, 0, 0, 0.7);
        padding: 25px;
        border-radius: 25px;
        text-align: center;
    }

    .contact h2,
    .contact p {
        color: #fff;
        /* s */
    }



    .contact form {
        /* Other styles */
        position: relative;
    }
    .contact input[type="text"],
    .contact input[type="number"],
    .contact input[type="email"],
    .contact textarea {
        display: block; /* Make input fields and textarea block-level elements */
        width: 95%; /* Set their width to 100% to make them full-width */
        background-color: rgba(255, 255, 255, 0.2); /* Add a translucent white background */
        border: 2px solid #0070BB; /* Add a blue border */
        border-radius: 5px;
        color: #fff; /* Change text color to white */
        padding: 10px;
        font-size: 13px;
        backdrop-filter: blur (10px); /* Apply a blur effect to the background */
        margin-bottom: 10px; /* Add spacing between fields */
    }

    /* Rest of the styles remain the same */


    .contact input[type="text"]::placeholder,
    .contact input[type="number"]::placeholder,
    .contact input[type="email"]::placeholder,
    .contact textarea::placeholder {
        color: #fff; /* Change placeholder text color to white */
    }

    .contact input[type="text"]:focus,
    .contact input[type="email"]:focus,
    .contact textarea:focus {
        outline: none;
        border-color: #00518A; /* Change border color on focus */
    }

    .contact button[type="submit"] {
        /* Other button styles... */
        background-color: #0070BB;
        color: #fff;
    }

    .contact h2,
    .contact p {
        color: #fff;
        /* margin-top: 0;
        margin-bottom: 20px 0;  */
    }
    /* Additional CSS styles for contact form */

    .social iframe { 
    border: 6px solid #0070FF; /* Blue border */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Box shadow */
    height: 500px;
    width: 600px;
    margin: 0 auto;
    display: block;
}


/* Add this style for the Google link */


    .social iframe p {
        
    }


</style>