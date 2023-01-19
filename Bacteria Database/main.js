const bacteriaList = {
    "Escherichia coli": "Luria broth or on Luria agar plates at 37°C",
    "Streptococcus pneumoniae": "Todd-Hewitt broth or on blood agar plates at 37°C in 5% CO2",
    "Bacillus subtilis": "nutrient broth or on nutrient agar plates at 37°C",
    "Staphylococcus aureus": "nutrient broth or on nutrient agar plates at 37°C",
    "Pseudomonas aeruginosa": "nutrient broth or on nutrient agar plates at 37°C",
    "Salmonella enterica": "nutrient broth or on nutrient agar plates at 37°C",
    "Listeria monocytogenes": "Listeria enrichment broth or on Oxford agar plates at 37°C",
    "Vibrio cholerae": "nutrient broth or on nutrient agar plates at 37°C",
    "Streptococcus pyogenes": "Todd-Hewitt broth or on blood agar plates at 37°C",
    "Haemophilus influenzae": "Haemophilus test medium or on Haemophilus agar plates at 37°C in 5% CO2",
    "Clostridium botulinum": "reinforced Clostridial medium or on reinforced Clostridial agar plates at 37°C",
    "Clostridium perfringens": "nutrient broth or on nutrient agar plates at 37°C",
    "Legionella pneumophila": "buffered charcoal yeast extract (BCYE) agar plates at 37°C",
    "Mycobacterium tuberculosis": "Middlebrook 7H9 broth or on Lowenstein-Jensen agar plates",
    "Klebsiella pneumoniae": "nutrient broth or on nutrient agar plates at 37°C",
    "Neisseria meningitidis": "chocolate agar or on blood agar plates at 37°C in 5% CO2",
    "Campylobacter jejuni": "blood-free media or on blood agar plates at 42°C in microaerophilic conditions",
    "Brucella melitensis": "blood-free media or on blood agar plates at 37°C in 5% CO2",
    "Corynebacterium diphtheriae": "blood-free media or on blood agar plates at 35°C",
    "Actinomyces israelii": "blood-free media or on blood agar plates at 37°C",
    "Chlamydia trachomatis": "Chlamydia growth medium or on cysteine-containing agar plates at 37°C",
    "Yersinia pestis": "blood-free media or on blood agar plates at 28°C"
}



    document.querySelector('.submit-button').addEventListener('click', function() {
        event.preventDefault();
        
        let bacteriaInput = document.querySelector('#bacteria-input').value;
        const resultDiv = document.querySelector('#result');
        bacteriaInput = bacteriaInput.toLowerCase();
        bacteriaInput = bacteriaInput.replace(/\./g, '');
        resultDiv.innerHTML = "Bacteria not found in our database. Please check the spelling or try a different input.";


        for(let key in bacteriaList){
            let genus = key.split(" ")[0];
            let genusAbbrev = genus.slice(0,1);
            let species = key.split(" ")[1];
            let genusAbbrevSpecies = genusAbbrev.concat(" ", species);
            if(bacteriaInput == key.toLowerCase() || bacteriaInput == genusAbbrevSpecies.toLowerCase()) {
            resultDiv.innerHTML = bacteriaList[key];
                return;
            }

        }
    });
    
