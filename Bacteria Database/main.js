const bacteriaList = {
    "Escherichia coli": "facultative anaerobe that grows well at 37°C and pH 7 in Luria broth (LB) or on Luria agar (LA) plates",
    "Streptococcus pneumoniae": "facultative anaerobe that grows well at 35-37°C in blood agar or tryptic soy agar (TSA) plates at 5% CO2.",
    "Bacillus subtilis": "mesophile that grows well at 37°C and pH 7 in nutrient agar or nutrient broth",
    "Staphylococcus aureus": " facultative anaerobe that grows well at 37°C in nutrient agar or tryptic soy agar (TSA) plates",
    "Pseudomonas aeruginosa": "facultative aerobe that grows well at 37°C and pH 7 in nutrient agar or nutrient broth.",
    "Salmonella enterica": "nutrient broth or on nutrient agar plates at 37°C",
    "Listeria monocytogenes": "facultative anaerobe that grows well at 37°C in blood agar or tryptic soy agar (TSA) plates.",
    "Vibrio cholerae": "nutrient broth or on nutrient agar plates at 37°C",
    "Streptococcus pyogenes": "facultative anaerobe that grows well at 35-37°C in blood agar or tryptic soy agar (TSA) plates",
    "Haemophilus influenzae": " facultative anaerobe that grows well at 35-37°C in chocolate agar, tryptic soy agar (TSA) , or Haemophilus agar plates, or Haemophilus test medium  at 37°C in 5% CO2",
    "Clostridium botulinum": "reinforced Clostridial medium or on reinforced Clostridial agar plates at 37°C",
    "Clostridium perfringens": "nutrient broth or on nutrient agar plates at 37°C",
    "Legionella pneumophila": "buffered charcoal yeast extract (BCYE) agar plates at 37°C",
    "Mycobacterium tuberculosis": "obligate aerobe that grows well at 37°C and pH 7 in nutrient agar or nutrient broth with addition of albumin, dextrose, and catalase (Middlebrook 7H9 broth)",
    "Klebsiella pneumoniae": "nutrient broth or on nutrient agar plates at 37°C",
    "Neisseria meningitidis": "chocolate agar or on blood agar plates at 37°C in 5% CO2",
    "Campylobacter jejuni": "blood-free media or on blood agar plates at 42°C in microaerophilic conditions",
    "Brucella melitensis": "blood-free media or on blood agar plates at 37°C in 5% CO2",
    "Corynebacterium diphtheriae": "blood-free media or on blood agar plates at 35°C",
    "Actinomyces israelii": "anaerobic bacteria, grows in blood-free media or on blood agar plates at 37°C",
    "Chlamydia trachomatis": "obligate intracellular bacteria that grows well at 37°C in Eagle's minimal essential medium (EMEM) or modified EMEM with added antibiotics.",
    "Yersinia pestis": "blood-free media or on blood agar plates at 28°C",
    "Salmonella typhimurium": "facultative anaerobe that grows well at 37°C and pH 7 in nutrient agar or nutrient broth",
    "Streptococcus thermophilus": "facultative anaerobe that grows well at 42-45°C in M17 or MRS agar",
    "Streptococcus thermophilus": "facultative anaerobe that grows well at 42-45°C in M17 or MRS agar.",
    "Clostridium perfringens": "facultative anaerobe that grows well at 37°C in nutrient agar or tryptic soy agar (TSA) plates.",
    "Proteus mirabilis": "facultative anaerobe that grows well at 37°C in nutrient agar or tryptic soy agar (TSA) plates.",
    "Shigella flexneri": "facultative anaerobe that grows well at 37°C in nutrient agar or nutrient broth.",
    "Serratia marcescens": "facultative aerobe that grows well at 37°C in nutrient agar or nutrient broth.",
    "Klebsiella pneumoniae": "facultative anaerobe that grows well at 37°C in nutrient agar or nutrient broth.",
    "Vibrio cholerae": "facultative aerobe that grows well at 37°C in nutrient agar or nutrient broth.",
    "Neisseria meningitidis": "facultative aerobe that grows well at 35-37°C in chocolate agar or tryptic soy agar (TSA) plates.",
    "Legionella pneumophila": "facultative aerobe that grows well at 35-37°C in buffered charcoal yeast extract (BCYE) agar or BCYE broth.",
    "Brucella melitensis": "facultative intracellular bacteria that grows well at 37°C in brucella agar or brucella broth.",
    "Streptococcus mutans": "facultative anaerobe that grows well at 37°C in brain heart infusion (BHI) agar or BHI broth.",
    "Clostridium tetani": "obligate anaerobe that grows well at 37°C in nutrient agar or tryptic soy agar (TSA) plates.",
    "Proteus vulgaris": "facultative anaerobe that grows well at 37°C in nutrient agar or tryptic soy agar (TSA) plates.",
    "Shigella dysenteriae": "facultative anaerobe that grows well at 37°C in nutrient agar or nutrient broth.",
    "Serratia liquefaciens": "facultative aerobe that grows well at 37°C in nutrient agar or nutrient broth.",
    "Klebsiella oxytoca": "facultative anaerobe that grows well at 37°C in nutrient agar or nutrient broth.",
    "Vibrio parahaemolyticus": "facultative aerobe that grows well at 37°C in nutrient agar or nutrient broth.",
    "Neisseria gonorrhoeae": "facultative aerobe that grows well at 35-37°C in chocolate agar or tryptic soy agar (TSA) plates.",
    "Legionella longbeachae": "facultative aerobe that grows well at 35-37°C in buffered charcoal yeast extract (BCYE) agar or BCYE broth.",
    "Brucella suis": "facultative intracellular bacteria that grows well at 37°C in brucella agar or brucella broth.",
    "Francisella tularensis": "facultative intracellular bacteria that grows well at 37°C in cysteine-heart infusion (CHI) agar or CHI broth.",
    "Bordetella pertussis": "facultative aerobe that grows well at 35-37°C in Bordet-Gengou agar.",
    "Haemophilus ducreyi": "facultative anaerobe that grows well at 35-37°C in chocolate agar or tryptic soy agar (TSA) plates.",
    "Treponema pallidum": "spirochete bacteria that grows well at 34-37°C in Barbour-Stoenner-Kelly (BSK) medium or modified BSK medium.",
    "Rickettsia rickettsii": "obligate intracellular bacteria that grows well at 37°C in EMEM or modified EMEM with added antibiotics.",
    "Mycoplasma pneumoniae": "Obligate intracellular bacteria that grow well at 37°C and pH 7 in Mycoplasma broth or on Mycoplasma agar plates with added supplements like cholesterol.",
    "Borrelia burgdorferi": "Spirochete bacteria that grow well at 34-37°C in Barbour-Stoenner-Kelly (BSK) medium or modified BSK medium.",
    "Francisella tularensis": "facultative intracellular bacteria that grows well at 37°C in cysteine-heart infusion (CHI) agar or CHI broth.",
    "Pasteurella multocida": "facultative anaerobe that grows well at 37°C in blood agar or tryptic soy agar (TSA) plates.",
    "Ehrlichia chaffeensis": "obligate intracellular bacteria that grows well at 37°C in EMEM or modified EMEM with added antibiotics.",
    "Leptospira interrogans": "spirochete bacteria that grows well at 28-30°C in Ellinghausen-McCullough-Johnson-Harris (EMJH) medium or in liquid EMJH medium.",
    "Coxiella burnetii": "obligate intracellular bacteria that grows well at 37°C in EMEM or modified EMEM with added antibiotics.",
    "Chlamydia psittaci": "obligate intracellular bacteria that grows well at 37°C in EMEM or modified EMEM with added antibiotics.",
    "Legionella pneumophila": "facultative aerobe that grows well at 35-37°C in buffered charcoal yeast extract (BCYE) agar or BCYE broth.",
    "Brucella abortus": "facultative intracellular bacteria that grows well at 37°C in brucella agar or brucella broth.",
    "Burkholderia cepacia": "facultative aerobe that grows well at 37°C in nutrient agar or nutrient broth.",
    "Ralstonia solanacearum": "facultative aerobe that grows well at 28-30°C in nutrient agar or nutrient broth.",
    "Xanthomonas campestris": "facultative aerobe that grows well at 28-30°C in nutrient agar or nutrient broth.",
    "Streptomyces coelicolor": "aerobic bacteria that grows well at 28-30°C in nutrient agar or nutrient broth.",
    "Thermus aquaticus": "thermophile that grows well at 65-80°C in nutrient agar or nutrient broth.",
    "Deinococcus radiodurans": "extremely radiation-resistant bacteria that grows well at 30-37°C in nutrient agar or nutrient broth.",
    "Azotobacter vinelandii": "facultative anaerobe that grows well at 28-30°C in nutrient agar or nutrient broth.",
    "Aquifex aeolicus": "thermophile that grows well at 85-95°C in nutrient agar or nutrient broth.",
    "Thermotoga maritima": "thermophile that grows well at 80-85°C in nutrient agar or nutrient broth."
}

/*ensure background for output is not displayed when their is no output */
result.style.display = 'None';

    document.querySelector('.submit-button').addEventListener('click', function() {
        event.preventDefault();

        /*display the background for the text-output */
        result.style.display = 'Block';

        /* 
        We need to allow for 3 things: 
        (1) the response must be case insensitive, 
        (2) the first word of the bacteria name (the genus) be be abbreviated to a single letter,
        (3) if abbreviated, the genus may have a period after it (e.g. E. coli) 
        */
        
        let bacteriaInput = document.querySelector('#bacteria-input').value;
        const resultDiv = document.querySelector('#result');

        /* (1) make it case insensitive */
        bacteriaInput = bacteriaInput.toLowerCase(); 

        /* (3) remove any periods */
        bacteriaInput = bacteriaInput.replace(/\./g, '');

        /* Setting the baseline output, if input is not found in database */
        resultDiv.innerHTML = "Bacteria not found in our database. Please check the spelling or try a different input.";


        for(let key in bacteriaList){

            /* (2) allow for the genus to be abbreviated */
            let genus = key.split(" ")[0];
            let genusAbbrev = genus.slice(0,1);
            let species = key.split(" ")[1];
            let genusAbbrevSpecies = genusAbbrev.concat(" ", species);

    
            if(bacteriaInput == key.toLowerCase() || bacteriaInput == genusAbbrevSpecies.toLowerCase()) {
                /* our return value may not be in proper sentence case, so we call it unadjusted result */
                unadjustedResult = bacteriaList[key];

                /* we adjust our return value by making the first letter uppercase */
                adjustedResult = (unadjustedResult.slice(0,1).toUpperCase()).concat(unadjustedResult.slice(1));


                resultDiv.innerHTML = adjustedResult  
            }

        }
    });





    websiteInfo.style.display = 'none'

    about = websiteInfo.style.display

    document.querySelector('.website-info-button').addEventListener('click', function() {
        event.preventDefault();

        allBacteria.style.display = 'None';

        if (websiteInfo.style.display === 'none') {
            websiteInfo.style.display = 'Block';
        } 
        else {
            websiteInfo.style.display = 'none'
        }
    })


    document.querySelector('.exitInfo').addEventListener('click', function() {
        event.preventDefault();
        websiteInfo.style.display = 'none';
    });
 


    allBacteria.style.display = 'none';

keys = Object.keys(bacteriaList);
keys.sort()

var stringKeys = ""
for (let i = 0; i < keys.length; i++) {
    stringKeys = stringKeys + keys[i] + "<br>"
}

document.getElementById("allBacteriaText").innerHTML = stringKeys;


document.querySelector('.viewAllBacteria').addEventListener('click', function() {
    event.preventDefault();
    allBacteria.style.display = 'Block';
    websiteInfo.style.display = 'none';
});

document.querySelector('.exitAllBacteria').addEventListener('click', function() {
    event.preventDefault();
    allBacteria.style.display = 'none';
});



document.getElementById("Linkdin").addEventListener('click', function() {
    event.preventDefault();
    console.log("test")
    window.location.href = "https://www.linkedin.com/in/max-bueckert-8712b4254/";
});

document.getElementById("GitHub").addEventListener('click', function() {
    event.preventDefault();
    window.location.href = "https://github.com/maxbueckert";
});