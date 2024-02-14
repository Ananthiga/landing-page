const scrollRevealOption = {
   distance:"50px",
   origin:"bottom",
   duration:1000,
};

// header container
scrollReveal ().reveal(".header_container h1".{
    ...scrollRevealOption,
})

scrollReveal().reveal(".header_form",{
    ...scrollRevealOption,
    delay:500,
})

// trending container
scrollReveal().reveal(".trending_card", {
    ...scrollRevealOption,
    interval: 500,
});

// destination container 
scrollReveal().reveal(".destination_card", {
    duration:1000,
    interval:500,
});

// seller container
scrollReveal().reveal(".seller_card",{
    ...scrollRevealOption,
    interval:500,
});

// guide container
scrollReveal().reveal(".guide_card", {
    ...scrollRevealOption,
    interval:500,
});

// client container
scrollReveal().reveal(".client_card" {
    ...scrollRevealOption,
    interval:500,
})