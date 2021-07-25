const language_data = {
    "english":{
        "location": "Chios, Megas Limionas",

        "main_title": "Welcome to Chios<br>Welcome to Manos",

        "region_title": "Megas Limionas",
        "region_text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima dignissimos accusantium dolorum consectetur recusandae ullam itaque tempora in suscipit culpa assumenda, eius sapiente ab ea doloribus hic vel similique ad velit doloremque vero saepe illum? Ut magni nostrum rem eos, delectus perferendis voluptates porro earum unde eius tempore, ex repudiandae corrupti veritatis placeat reprehenderit ducimus dolores! Sit tenetur dolore magni quisquam magnam sunt mollitia ipsa, nobis assumenda iusto, libero, eius reiciendis vitae quod cumque. Saepe ullam dolores placeat blanditiis.",

        "studio_text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae exercitationem consectetur vel suscipit odit ullam delectus?",

        "card1_title": "Facilities",
        "wifi": "Free WiFi internet",
        "parking": "Free parking area",
        "pet": "Pets allowed",
        "garden": "Garden with furniture",
        "bbq": "Shared BBQ",
        "terrace": "Terrace area",

        "card2_title": "Room",
        "prvt_entrance": "Private entrance",
        "soundproof": "Soundproofing",
        "air_condition": "Air conditioning",
        "bathroom": "Bathroom with shower",
        "hair_dryer": "Hair dryer",
        "kitchen": "Fully equipped kitchen",
        "tea_coffee": "Tea/Coffee maker",
        "media": "Flat TV",

        "card3_title": "Nearby",
        "beach": "Beach",
        "restaurant": "Cafe / Restaurant",
        "bus": "Bus stop",
        "market": "Mini market",

        "gal_title": "Gallery",
        "close_msg": "Double click to close",

        "contact_title": "Contact us:"
    },

    "greek":{
        "location": "Χίος, Μέγας Λιμιώνας",

        "main_title": "Καλωσήρθατε στη Χίο<br>Καλωσορίσατε στο Manos",

        "region_title": "Μέγας Λιμιώνας",
        "region_text": "Τα καρότα Lorem ipsum βελτίωσαν τις εκπτώσεις. Σαν, ως εκ τούτου, οι καιροί είναι στο ελάχιστο άξιο να κατηγορούν ότι λαμβάνει το λάθος οποιουδήποτε θλίψης, ο διαμαρτυρόμενος γίνεται δεκτός ταυτόχρονα, κάτι παρόμοιο έχει τις επιθυμίες της που είναι σοφός σε αυτό ή σε πόνο, συχνά δεν από είναι, οι πόνοι του; Για να είναι το σπουδαίο πράγμα από εμάς, Και για τις ευχαρίστησεις τους, και έτσι, επιλέχθηκε για τη διαρκή του χρόνου, καταδικάζουμε, από τους πόνους που μπορεί να ευχαριστήσει την αποκήρυξη της αλήθειας από αυτούς που αντιμετωπίζουν διεφθαρμένα! Ας υπάρξει ένας μεγάλος άντρας με μεγάλο πόνο, δεν είναι αρκετά ρευστοί, είναι υποχρεωμένη, για εμάς να πάρουμε αμέσως το καλό, την ελευθερία, απορρίπτοντας κάποια από τη ζωή τι είναι και πότε. Συχνά, κάθε πόνος για να την ευχαριστήσει με κολακευτικό. Ο σοφός ήρθε τη στιγμή που τίποτα δεν μισούται χωρίς κανένα λόγο.",
        
        "studio_text": "Lorem ipsum dolor sit amet consectetur, εκπτώσεις. Επιλέχθηκε για την άσκηση οποιασδήποτε μίσους Repudiandae consectetur vel suscipit, το λάθος της κολακευτικής της να μεταφέρει μηνύματα, τον εγκαταλείπουν, πράγματι;",

        "card1_title": "Παροχές",
        "wifi": "Δωρεάν ασύρματο ίντερνετ",
        "parking": "Δωρεάν πάρκινγκ",
        "pet": "Επιτρέπονται κατοικίδια",
        "garden": "Κήπος με έπιπλα",
        "bbq": "Κοινόχρηστο μπάρμπεκιου",
        "terrace": "Βεράντα",

        "card2_title": "Δωμάτιο",
        "prvt_entrance": "Ιδιωτική είσοδος",
        "soundproof": "Ηχομόνωση",
        "air_condition": "Κληματιστικό",
        "bathroom": "Μπάνιο με ντουζιέρα",
        "hair_dryer": "Στεγνωτήρας μαλλιών",
        "kitchen": "Πλήρως εξοπλισμένη κουζίνα",
        "tea_coffee": "Καφετιέρα",
        "media": "Επίπεδη τηλεώραση",

        "card3_title": "Τριγύρω",
        "beach": "Παραλία",
        "restaurant": "Καφέ / Εστιατόρια",
        "bus": "Στάση λεωφορείου",
        "market": "Μίνι μάρκετ",

        "gal_title": "Συλλογή",
        "close_msg": "Διπλό κλικ για κλήσιμο",

        "contact_title": "Επικοινωνία:"
    }
}

//Setting constants for the language icons
const lang_gr_img = 'url(\'images/lang_gr_45x30.png\')';
const lang_eng_img = 'url(\'images/lang_eng_45x30.png\')';

//Getting the language links to add event listeners to each
const links = [document.querySelector('a.lang-gr'), document.querySelector('a.lang-eng')];

//Getting button to change its background image
const langButton = document.querySelector('.lang-btn');

//Getting all the elements that contain text for translation
//showcase
const locationEl = document.querySelector('.location');
const mainTitleEl = document.querySelector('#main-title');
//paragraphs
const regionTitleEl = document.querySelector('.region-title');
const regionTextEl = document.querySelector('.region-text');
const studioTextEl = document.querySelector('.studio-text');
//cards
const card1TitleEl = document.querySelector('.card1-title');
const card2TitleEl = document.querySelector('.card2-title');
const card3TitleEl = document.querySelector('.card3-title');
const wifiEl = document.querySelector('#wifi');
const parkingEl = document.querySelector('#parking');
const petEl = document.querySelector('#pet');
const gardenEl = document.querySelector('#garden');
const bbqEl = document.querySelector('#bbq');
const terraceEl = document.querySelector('#terrace');
const prvtEntranceEl = document.querySelector('#prvt-entrance');
const soundproofEl = document.querySelector('#soundproof');
const airConditionEl = document.querySelector('#air-condition');
const bathroomEl = document.querySelector('#bathroom');
const hairDryerEl = document.querySelector('#hair-dryer');
const kitchenEl = document.querySelector('#kitchen');
const teaCoffeeEl = document.querySelector('#tea-coffee');
const mediaEl = document.querySelector('#media');
const beachEl = document.querySelector('#beach');
const restaurantEl = document.querySelector('#restaurant');
const busEl = document.querySelector('#bus');
const marketEl = document.querySelector('#market');
const galTitleEl = document.querySelector('.gal-title');
const contactTitleEl = document.querySelector('.contact-title');
const close_pop_msg = document.getElementById('close-msg');

//Translation Function
function translateLanguage(lang_data, attribute){
    //showcase
    locationEl.textContent = lang_data[attribute].location;
    mainTitleEl.innerHTML = lang_data[attribute].main_title;
    //paragraphs
    regionTitleEl.textContent = lang_data[attribute].region_title;
    regionTextEl.textContent = lang_data[attribute].region_text;
    studioTextEl.textContent = lang_data[attribute].studio_text;
    //cards
    card1TitleEl.textContent = lang_data[attribute].card1_title;
    card2TitleEl.textContent = lang_data[attribute].card2_title;
    card3TitleEl.textContent = lang_data[attribute].card3_title;
    wifiEl.textContent = lang_data[attribute].wifi;
    parkingEl.textContent = lang_data[attribute].parking;
    petEl.textContent = lang_data[attribute].pet;
    gardenEl.textContent = lang_data[attribute].garden;
    bbqEl.textContent = lang_data[attribute].bbq;
    terraceEl.textContent = lang_data[attribute].terrace;
    prvtEntranceEl.textContent = lang_data[attribute].prvt_entrance;
    soundproofEl.textContent = lang_data[attribute].soundproof;
    airConditionEl.textContent = lang_data[attribute].air_condition;
    bathroomEl.textContent = lang_data[attribute].bathroom;
    hairDryerEl.textContent = lang_data[attribute].hair_dryer;
    kitchenEl.textContent = lang_data[attribute].kitchen;
    teaCoffeeEl.textContent = lang_data[attribute].tea_coffee;
    mediaEl.textContent = lang_data[attribute].media;
    beachEl.textContent = lang_data[attribute].beach;
    restaurantEl.textContent = lang_data[attribute].restaurant;
    busEl.textContent = lang_data[attribute].bus;
    marketEl.textContent = lang_data[attribute].market;
    //close pop-up wingow message while in image viewer -> text
    close_pop_msg.textContent = lang_data[attribute].close_msg;
    //gallery title
    galTitleEl.textContent = lang_data[attribute].gal_title;
    //contact title
    contactTitleEl.textContent = lang_data[attribute].contact_title;
}

//Set english as the default language
translateLanguage(language_data, 'english');

//adding the event listeners and translating
links.forEach(el => {
    el.addEventListener('mousedown', () => {
        const langAttr = el.getAttribute('language');

        //changing the language icon
        if (langAttr == 'english'){
            langButton.style.backgroundImage = lang_eng_img;
            langButton.style.backgroundPosition = 'center center';
        }else {
            langButton.style.backgroundImage = lang_gr_img;
            langButton.style.backgroundPosition = 'left center';
        }

        translateLanguage(language_data, langAttr);
    });
});

function clamp(num, bottom){
    return num < bottom? bottom : num;
}

const start_opacity = 0.9;    //starting opacity of 'Douple tap to close' message

function fadeOutEffect() {
    var fadeTarget = document.getElementById("close-msg");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = start_opacity;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity = clamp(parseInt(fadeTarget.style.opacity)-0.3, 0);
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
}

const close_msg = document.getElementById('close-msg');

//Opening up the image viewer pop-up window
const images = document.querySelectorAll('.image');
const img_viewer = document.querySelector('#img-viewer');
const popup_win = document.getElementById('gallery-pop-background');

var selected_img_id;

images.forEach(el => {
    el.addEventListener('click', () =>{
        //getting the background-image url, cutting the excess characters
        //and *WITHOUT QUATETION MARKS (' || ")* pass it as the src value
        //to my image viewer
        console.log(close_msg.style.opacity);
        var styles = window.getComputedStyle(el);
        var background_img = styles.backgroundImage.slice(5, -2);
        img_viewer.src = background_img;

        selected_img_id = el.getAttribute('id');
        
        popup_win.style.display = 'flex';
        fadeOutEffect();
    });
});

var selected = false;   //checks the state of the starting image

//Closing the pop-up image by clicking the "closing"/'x' button
const close_btn = document.getElementById('close-popup');
const nav_button_cont = document.querySelector('.next-prev-cont');

close_btn.onclick = closeWindow;

//double-tap close image pop-up window
window.addEventListener('dblclick', (e) => {
    if(((e.target == img_viewer || e.target == nav_button_cont) && (e.target !== prev_btn || e.target !== next_btn))){
        closeWindow();
    }
});


function closeWindow(){
    popup_win.style.display = 'none';
    selected = false;   //used for the next-prev buttons
    close_msg.style.opacity = start_opacity;
}

//Previous and Next buttons functions
const prev_btn = document.getElementById('prev');
const next_btn = document.getElementById('next');

var id_num;
prev_btn.onclick = swapPrev;

next_btn.onclick = swapNext;

//Swap gallery images using arrow keys
/*Used 'released' so the user doesn't hold right or left arrow keys*/
var released = true;

window.onkeyup = function(event){
    released = true;
}

window.onkeydown = function(event){
    if (popup_win.style.display == 'flex' && released){
        released = false;
        if (event.code == 'ArrowLeft' || event.code == 'KeyA'){
            swapPrev();
        }else if (event.code == 'ArrowRight' || event.code == 'KeyD'){
            swapNext();
        }else if (event.code == 'Escape'){
            closeWindow();
        }
    }
}

function swapPrev(){
    if (!selected){
        id_num = repeat(parseInt(selected_img_id.slice(4))-1, 1, images.length);
        selected = true;
    }else {
        id_num = repeat(--id_num, 1, images.length);
    }
    var img_id = selected_img_id.slice(0, 4)+id_num;

    var el = document.getElementById(img_id);
    var styles = window.getComputedStyle(el);
    var background_img = styles.backgroundImage.slice(5, -2);
    img_viewer.src = background_img;
}

function swapNext(){
    if (!selected){
        id_num = repeat(parseInt(selected_img_id.slice(4))+1, 1, images.length);
        selected = true;
    }else {
        id_num = repeat(++id_num, 1, images.length);
    }
    var img_id = selected_img_id.slice(0, 4)+id_num;
    
    var el = document.getElementById(img_id);
    var styles = window.getComputedStyle(el);
    var background_img = styles.backgroundImage.slice(5, -2);
    img_viewer.src = background_img;
}

//Math repeat function ^^
function repeat(number, start_const, end_const){
    if(number < start_const) { return end_const; }
    if (number > end_const) { return start_const; }
    return number;
}

//language button functionality
const lang_btn = document.querySelector('.lang-btn');
const lang_arrow = document.getElementById('lang-arrow');
const lang_dropdown = document.querySelector('.lang-dropdown ul');

//dropdown icon state
var isClicked = false;

const lang_cont = document.getElementById('lang-btn-cont');

lang_cont.addEventListener('mouseover', () => {
    if (!isClicked){
        lang_arrow.style.opacity = 1;
    }
});

lang_cont.addEventListener('mouseleave', () => {
    if (!isClicked){
        lang_arrow.style.opacity = 0;
    }
});

//dropdown icon images
const dropdown_fill_img = 'url(\'images/dropdown_fill_10x10.png\')';
const dropdown_img = 'url(\'images/dropdown_10x10.png\')';

lang_cont.addEventListener('click', () => {
    isClicked = !isClicked;
    if (isClicked){
        lang_dropdown.style.opacity = 1;
        lang_dropdown.style.pointerEvents = 'all';
        lang_dropdown.style.transform = 'translateY(0)';

        lang_btn.style.filter = 'grayscale(50%)';

        lang_arrow.style.backgroundImage = dropdown_fill_img;
    }else{
        lang_dropdown.style.opacity = 0;
        lang_dropdown.style.pointerEvents = 'none';
        lang_dropdown.style.transform = 'translateY(-10px)';

        lang_btn.style.filter = 'grayscale(0%)';
        lang_arrow.style.backgroundImage = dropdown_img;
    }
    lang_arrow.style.opacity = 1;
    lang_btn.style.opacity = 1;
});

window.onclick = function(event) {
    if ((event.target !== lang_btn && event.target !== lang_arrow && event.target !== lang_cont && event.target !== langButton) && isClicked) {
        isClicked = !isClicked;
        lang_arrow.style.opacity = 0;
        lang_dropdown.style.opacity = 0;
        lang_dropdown.style.pointerEvents = 'none';
        lang_dropdown.style.transform = 'translateY(-10px)';

        lang_btn.style.filter = 'grayscale(0%)';
        
        lang_arrow.style.backgroundImage = dropdown_img;
    }
    //Closing the pop-up image by clicking out of the pop-up box
    if (event.target == popup_win) {
        popup_win.style.display = 'none';
        selected = false;   //used for the next-prev buttons
        close_msg.style.opacity = 1;
    }
}
