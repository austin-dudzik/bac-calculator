$(document).ready(function() {

  $("form").submit(calculateBAC);

  function calculateBAC(event) {

    event.preventDefault();

    // Constant variables
    let oneBeer = 0.54; // 0.54 liquid ounces
    let oneWine = 0.6; // 0.6 liquid ounces
    let oneShot = 0.6; // 0.6 liquid ounces


    // Get number of beers from input
    let numBeer = $("input#beers").val();
    numBeer = parseFloat(numBeer);

    // Get glasses of wine from input
    let numWine = $("input#wine").val();
    numWine = parseFloat(numWine);

    // Get number of shots from input
    let numShots = $("input#shots").val();
    numShots = parseFloat(numShots);

    // Get weight from input
    let weight = $("input#weight").val();
    weight = parseFloat(weight);

    // Get hours from input
    let hours = $("input#hours").val();
    hours = parseFloat(hours);

    // Add values and multiply each by constants
    let consumption = (numBeer * oneBeer) + (numWine * oneWine) + (numShots * oneShot);

    // Multiply by average absoprtion rate
    let absorptionRate = consumption * 7.5;

    // Divide by 2
    let bacResult = absorptionRate / weight;

    // Subtract for each hour
    let hoursSince = bacResult - (hours * 0.015);

    // Round to 3 decimal places
    let bacTotal = hoursSince.toFixed(3);

    // Set result text and add classes
    $("p#result").html(`Your blood alochol level is <strong>${bacTotal}%</strong>`).attr("class", "alert alert-primary mt-4");

  }


});
