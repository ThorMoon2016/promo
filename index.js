document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        // Ovo onemogućava skrolovanje na stranici kada je meni otvoren
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : 'auto';
    });
});




window.onload = function() {
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Menja sliku svake 2 sekunde
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
};



document.addEventListener('DOMContentLoaded', function() {
    const poruciDugme = document.querySelector('.poruci-dugme');
    const infoContainer = document.querySelector('.info-container');

    poruciDugme.addEventListener('click', function() {
        infoContainer.style.display = 'block';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const poruciDugme = document.querySelector('.poruci-dugme');
    const extrasSectionLabel = document.getElementById('openExtrasSectionLabel');
    const infoSectionLabel = document.getElementById('openInfoSectionLabel');
    const productOutlineBox = document.querySelector('.product-outline-box');
    const infoContainer = document.getElementById('infoContainer');
    const naruciButton = document.getElementById('naruciButton');

    // Dodajte flag za praćenje statusa sekcija
    let extrasSectionOpen = false;
    let infoSectionOpen = false;

    poruciDugme.addEventListener('click', function() {
        extrasSectionLabel.style.display = 'block';
        extrasSectionLabel.addEventListener('click', function() {
            if (extrasSectionOpen) {
                productOutlineBox.style.display = 'none';
            } else {
                productOutlineBox.style.display = 'block';
            }
            extrasSectionOpen = !extrasSectionOpen;

            // Ako je sekcija "Podaci" otvorena, zatvorite je
            if (infoSectionOpen) {
                infoContainer.style.display = 'none';
                naruciButton.disabled = true;
                infoSectionOpen = !infoSectionOpen;
                infoSectionLabel.classList.remove('active');
            }
        });

        infoSectionLabel.style.display = 'block';
        infoContainer.style.display = 'none'; // Početno sakrijte sekciju "Podaci"
        naruciButton.disabled = true; // Početno onemogućite dugme "Naruči"

        infoSectionLabel.addEventListener('click', function() {
            if (infoSectionOpen) {
                infoContainer.style.display = 'none';
                naruciButton.disabled = true;
            } else {
                infoContainer.style.display = 'block';
                naruciButton.disabled = false;
            }
            infoSectionOpen = !infoSectionOpen;

            // Ako je sekcija "Dodatak uz cvijeće" otvorena, zatvorite je
            if (extrasSectionOpen) {
                productOutlineBox.style.display = 'none';
                extrasSectionOpen = !extrasSectionOpen;
                extrasSectionLabel.classList.remove('active');
            }
        });
    });
});








document.addEventListener('DOMContentLoaded', function() {
    const naruciDugme = document.querySelector('.naruci-dugme');
    const paypalContainer = document.getElementById('paypal-button-container');

    naruciDugme.addEventListener('click', function() {
        // Prikazi PayPal dugme kada se klikne na dugme "NARUČI"
        paypalContainer.style.display = 'block';

        // Ovde možete dodati kod za inicijalizaciju PayPal dugmeta, ako je potrebno
    });
});





document.addEventListener('DOMContentLoaded', function() {
    const naruciButton = document.getElementById('naruciButton');
    const inputFields = document.querySelectorAll('input, textarea');

    inputFields.forEach(function(input) {
        input.addEventListener('input', function() {
            const allFieldsFilled = Array.from(inputFields).every(field => field.value.trim() !== '');
            naruciButton.disabled = !allFieldsFilled;
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    var productCheckbox = document.getElementById('productCheckbox');
    var additionalNotes = document.getElementById('additionalNotes');
    var completeOrderButton = document.getElementById('completeOrderButton');

    productCheckbox.addEventListener('change', function() {
        if (productCheckbox.checked) {
            // Proizvod je odabran, možete izvršiti odgovarajuće akcije
            // Na primjer, prikažite detalje o proizvodu
            showProductDetails();
        } else {
            // Proizvod nije odabran, sakrijte detalje o proizvodu
            hideProductDetails();
        }
    });

    completeOrderButton.addEventListener('click', function() {
        // Ovdje možete dohvatiti vrijednosti checkbox-a i dodatnih napomena
        var isProductSelected = productCheckbox.checked;
        var notes = additionalNotes.value;

        // Ovdje možete izvršiti akcije na temelju odabranih proizvoda i dodatnih napomena
        // Na primjer, slanje podataka na server ili prikazivanje zahvalne poruke
        if (isProductSelected) {
            // Proizvod je odabran, izvršite odgovarajuće akcije
            // Na primjer, prikažite zahvalnu poruku korisniku
            displayThankYouMessage();
        } else {
            // Proizvod nije odabran, obavijestite korisnika da odabere proizvod
            alert('Molimo odaberite proizvod prije nego završite narudžbu.');
        }
    });

    function showProductDetails() {
        var productDetails = document.querySelector('.productDetails');
        productDetails.style.display = 'block';
    }

    function hideProductDetails() {
        var productDetails = document.querySelector('.productDetails');
        productDetails.style.display = 'none';
    }

    function displayThankYouMessage() {
        // Ovdje možete prikazati zahvalnu poruku korisniku
        alert('Hvala vam na narudžbi! Vaša narudžba je uspješno zaprimljena.');
    }
});



