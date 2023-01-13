function lessFlight(fuel) {
    let n = fuel.length;
    let countFlight = 1;
    let FuelBetween = 0;
    let tank = 0;
    
    //Edge case
    if(fuel[0]==0)
        return -1;
    //take starting index into tank and traverse array
    tank = fuel[0];
    for (let i = 1; i < n; i++) {
        if (FuelBetween < fuel[i]) {    // check if Fuel between is less than hen array current value then  current vale is fuel between elsee Fuelbetween--
            FuelBetween = fuel[i];
        } else {
            FuelBetween--;
        }
        tank--;
        if (tank === 0) {  // count required flight  
            if (FuelBetween > 0 && i < n - 1) { 
                countFlight++;  
                tank = FuelBetween;
                FuelBetween = 0;
            } else if (i < n - 1) {
                return -1;
            }
        }
    }
    return countFlight;
}
 
//Driver Code
let fuel = [2,1,2,3,1 ];
console.log(lessFlight(fuel));
