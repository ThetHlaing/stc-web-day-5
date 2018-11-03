describe("Calculation Object Test", function () {

  beforeEach(function() {
    
  }); 

  describe("in the add function", function () {
    it("should combine two number", function () {
      expect(Calculation.add(2, 3)).toEqual(5);
    });

    it("should throw error when combine two string", function () {
        expect(function(){
          Calculation.add("2","3")
        }).toThrowError('Parameters must be numbers');
    });

    it("0.1 + 0.2 should be 0.3", function () {
      expect(Calculation.add(0.1, 0.2)).toEqual(0.3);

      expect(Calculation.add(0.1, 0.2)).not.toEqual(0.1);
    });
    
  });

  describe("in the divide function", function () {
    it("should divide two number", function () {
      expect(Calculation.divide(8, 4)).toEqual(2);
    });

    it("should not include more than 2 decimal points", function () {
      expect(Calculation.divide(1,1000)).toEqual(0.00);
    });

    it("should throw error if divider is 0", function () {
      expect(function(){
        Calculation.divide(10,0)
      }).toThrowError('Cannot divide by zero');
    });
    
  });
});
