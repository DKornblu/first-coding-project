// Too many iframes can take a toll on the browser, try to use just 1 iframe. 
// Consider making an array of the different location urls and cycling through this array as you press the next button.
// Each time a button is pressed the src of the iframe should be replaced by the next item in the array.
//Here are the various location urls
// src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2147.376035817045!2d-73.73448985268278!3d40.62767169607334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c265c455970759%3A0x75b68506de350747!2s402%20Rugby%20Rd%2C%20Cedarhurst%2C%20NY%2011516%2C%20USA!5e0!3m2!1sen!2sil!4v1673813875984!5m2!1sen!2sil"
// src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.4023176891174!2d-95.51390098533791!3d29.65009774404917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e9b7d2810f3b%3A0xa5778ce5cc0af0ba!2sStallion%20Ln%2C%20Houston%2C%20TX%2077071%2C%20USA!5e0!3m2!1sen!2sil!4v1673814588136!5m2!1sen!2sil"
// src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.037511553394!2d-94.68819722114218!3d38.95589171612189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0eb7802bef721%3A0x93dd02794c4b0e03!2sAntioch%20Rd%2C%20Overland%20Park%2C%20KS%2066212%2C%20USA!5e0!3m2!1sen!2sil!4v1673814862455!5m2!1sen!2sil"
// src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.2175268615465!2d-80.01991968525921!3d32.81300088945785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe7c7d99123e1d%3A0xbee306063ae6171a!2sCongregation%20Dor%20Tikvah!5e0!3m2!1sen!2sil!4v1673814929041!5m2!1sen!2sil"
// src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13562.173340457222!2d35.187213226108184!3d31.810193485190638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d60df73e702d%3A0x73c73c9da5602537!2sRamot%20B%2C%20Jerusalem!5e0!3m2!1sen!2sil!4v1673814954322!5m2!1sen!2sil"

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
// With 1 iframe and an array of urls, I just need to queryselect a single iframe. So don't need this.
// const galleryMaps = document.querySelectorAll('.gallery-map');
const gmap = document.querySelector('.gallery-map');
let galleryMaps = ['https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2147.376035817045!2d-73.73448985268278!3d40.62767169607334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c265c455970759%3A0x75b68506de350747!2s402%20Rugby%20Rd%2C%20Cedarhurst%2C%20NY%2011516%2C%20USA!5e0!3m2!1sen!2sil!4v1673813875984!5m2!1sen!2sil',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.4023176891174!2d-95.51390098533791!3d29.65009774404917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e9b7d2810f3b%3A0xa5778ce5cc0af0ba!2sStallion%20Ln%2C%20Houston%2C%20TX%2077071%2C%20USA!5e0!3m2!1sen!2sil!4v1673814588136!5m2!1sen!2sil',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.037511553394!2d-94.68819722114218!3d38.95589171612189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0eb7802bef721%3A0x93dd02794c4b0e03!2sAntioch%20Rd%2C%20Overland%20Park%2C%20KS%2066212%2C%20USA!5e0!3m2!1sen!2sil!4v1673814862455!5m2!1sen!2sil',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.2175268615465!2d-80.01991968525921!3d32.81300088945785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe7c7d99123e1d%3A0xbee306063ae6171a!2sCongregation%20Dor%20Tikvah!5e0!3m2!1sen!2sil!4v1673814929041!5m2!1sen!2sil',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13562.173340457222!2d35.187213226108184!3d31.810193485190638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d60df73e702d%3A0x73c73c9da5602537!2sRamot%20B%2C%20Jerusalem!5e0!3m2!1sen!2sil!4v1673814954322!5m2!1sen!2sil'];
let currentlySelected = 0;

console.log(galleryMaps);
console.log(gmap);

prevBtn.addEventListener('click', function () {

    // Don't need the following anymore because the single iframe remains active and doesn't need to change.
    // galleryMaps[currentlySelected].classList.remove("active");
    // currentlySelected--; 
    // galleryMaps[currentlySelected].classList.add("active");

    currentlySelected--;
    gmap.src = galleryMaps[currentlySelected];
    nextBtn.disabled = false;

    if (currentlySelected === 0) {
        prevBtn.disabled = true;
    }
});

nextBtn.addEventListener('click', function () {

    // Don't need the following anymore because the single iframe remains active and doesn't need to change.
    // galleryMaps[currentlySelected].classList.remove("active");
    // currentlySelected++;
    // galleryMaps[currentlySelected].classList.add("active");

    currentlySelected++;
    gmap.src = galleryMaps[currentlySelected];
    prevBtn.disabled = false;

    if (galleryMaps.length === currentlySelected + 1) {
        nextBtn.disabled = true;
    }
});