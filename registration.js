function TheRegNumbers(){
    let allRegNumbers = '';
    let validRegex = '/^([a-zA-Z0-9 _-]+)$/';
    const filteredTowns = []
    let townValue = ''

    function setRegNumber(regNumberString){
       allRegNumbers = regNumberString;
    }

    function getRegNumber(){
        return allRegNumbers;
    }

    const setTownValue = (towns) => {
        for(let i = 0; i < towns.length; i++){
            if(towns[i].checked){
                townValue = townValue[i].value
            }
        }
    }
    function getTownValue(){
        return townValue;
    }

    function filterCapeTown(cape){
        cape = townValue.filter(function(allCapeReg){
            return allCapeReg.includes("CA");
        });
    }
    function filterPaarl(thePaarl){
        num = thePaarl.filter(function(allPaarlReg){
            return allPaarlReg.includes("CJ");
        });
    }
    function filterBellville(bell){
        bell = townValue.filter(function(allBellReg){
            return allBellReg.includes("CY");
        });
    }
    function filterKuilsriver(kuils){
        kuils = townValue.filter(function(allKuilsReg){
            return allKuilsReg.includes("CF");
        });
    }

    return{
        setRegNumber,
        getRegNumber,
        setTownValue,
        getTownValue,
        filterCapeTown, 
        filterPaarl,
        filterBellville,
        filterKuilsriver 
    }

    //Kuilsriver  CF
    //paarl CJ
    //CapeTown CA
    // bellville CY

    /*
    function filteringAllTows(){
        if(townValue.includes("CA")){
            filteredTowns.push(townValue);
        }
        if(townValue.includes("CJ")){
            filteredTowns.push(townValue);
        }
        if(townValue.includes("CY")){
            filteredTowns.push(townValue);
        }
        if(townValue.includes("CF")){
            filteredTowns.push(townValue);
        }
        console.log(filteredTowns);
    }
    */
}