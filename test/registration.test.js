describe("The Registration Number factory function", function() {
	it("should be able to add Kuilsriver reg number", function() {
        let numberPlates = TheRegNumbers();
        numberPlates.setRegNumber("CF 124-564");
		assert.equal("CF 124-564", numberPlates.getRegNumber());
	});
    it("should be able to add Cape Town reg number", function() {
        let numberPlates = TheRegNumbers(); 
        numberPlates.setRegNumber("CA 407-504");
        assert.equal("CA 407-504", numberPlates.getRegNumber());
	});
    it("should be able to add Paarl reg number", function() {
        let numberPlates = TheRegNumbers();       
        numberPlates.setRegNumber("CJ 028-944");
        assert.equal("CJ 028-944", numberPlates.getRegNumber());  
	});
    it("should be able to add Bellville reg number", function() {
        let numberPlates = TheRegNumbers();
        numberPlates.setRegNumber("CY 100-580");
        assert.equal("CY 100-580", numberPlates.getRegNumber());
	});
    it("should be able to add all reg numbers", function() {
        let numberPlates = TheRegNumbers();
        numberPlates.setRegNumber("CY 100-580");
        assert.equal("CY 100-580", numberPlates.getRegNumber());
        numberPlates.setRegNumber("CJ 028-944");
        assert.equal("CJ 028-944", numberPlates.getRegNumber()); 
        numberPlates.setRegNumber("CA 407-504");
        assert.equal("CA 407-504", numberPlates.getRegNumber());
        numberPlates.setRegNumber("CF 124-564");
		assert.equal("CF 124-564", numberPlates.getRegNumber());
	});
    describe("should filter for a town", function() {
        it("Should return Cape Town reg numbers only", function() {
            let numberPlates = TheRegNumbers();

            numberPlates.setTownValue('CA 123-452');
            numberPlates.setTownValue('CJ 301-098');
            numberPlates.setTownValue('CY 073-592');
            numberPlates.setTownValue('CF 203-289');
            assert.equal('CA 123-452', numberPlates.filterCapeTown());
        });
        it("Should return Paarl reg numbers only", function() {
            let numberPlates = TheRegNumbers();
            
            numberPlates.setTownValue('CA 123-452');
            numberPlates.setTownValue('CJ 301-098');
            numberPlates.setTownValue('CY 073-592');
            numberPlates.setTownValue('CF 203-289');
            assert.equal('CJ 301-098', numberPlates.filterPaarl());
        });
        it("Should return Bellville reg numbers only", function() {
            let numberPlates = TheRegNumbers();

            numberPlates.setTownValue('CA 123-452');
            numberPlates.setTownValue('CJ 301-098');
            numberPlates.setTownValue('CY 073-592');
            numberPlates.setTownValue('CF 203-289');
            assert.equal('CY 073-592', numberPlates.filterBellville());
        });
        it("Should return Kuilsriver reg numbers only", function() {
            let numberPlates = TheRegNumbers();

            numberPlates.setTownValue('CA 123-452');
            numberPlates.setTownValue('CJ 301-098');
            numberPlates.setTownValue('CY 073-592');
            numberPlates.setTownValue('CF 203-289');
            assert.equal('CF 203-289', numberPlates.filterKuilsriver());
        });
/*
        it("Should return all the reg numbers that were entered", function() {
            let numberPlates = TheRegNumbers();
            
            numberPlates.setTownValue('CA 123-452');
 
            numberPlates.setTownValue('CF 203-289');

            numberPlates.setTownValue('CY 073-592');

            numberPlates.setTownValue('CJ 301-098');
            
            assert.equal('CA 123-452', numberPlates.getTownValue());
            assert.equal('CY 073-592', numberPlates.getTownValue());
            assert.equal('CF 203-289', numberPlates.getTownValue());
            assert.equal('CA 123-452', numberPlates.getTownValue());
        });
        */
    });
	// it("should give error message for an invalid regNumber", function() {
	// 	assert.equal(1,2);
	// });



});