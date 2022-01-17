

// =============================================================================

/**
  * Outputs the statistical information about deforestation of the province inputted.
  *
  * @returns {string} The information related to the province asked for. This is called when a button is pressed in the html file.
  */
function getProvinceStats () {

  console.log("Starting to get the provincial statistics.")

let inputCheck = ["ontario","quebec","princeedwardisland","newbrunswick","newfoundland","novascotia","british columbia","nunavut","alberta","manitoba","northwestterritories","yukon","saskatchewan"];

let coverLostInTwentyYears = { // a list containing information about the cover of trees lost in each province between 2000 and 2020

ontario: "4.7 mha of tree cover",
quebec: "7.85 mha of tree cover",
princeedwardisland: "39.3 kha of tree cover",
newbrunswick: "1.31 mha of tree cover",
newfoundland: "595 kha of tree cover",
novascotia: "682 kha of tree cover",
britishcolumbia: "8.08 mha of tree cover",
nunavut: "14.4 kha of tree cover",
alberta: "5.52 mha of tree cover",
manitoba: "2.76 mha of tree cover",
northwestterritories: "3.94 mha of tree cover",
yukon: "2.29 mha of tree cover",
saskatchewan: "6.27 mha of tree cover"

};

let treeCoverGain  = { // a list containing the cover of trees gained in each province between 2001 and 2012

ontario: "1.63 mha of tree cover",
quebec: "1.94 mha of tree cover",
princeedwardisland: "9.38 kha of tree cover",
newbrunswick: "428 kha of tree cover",
newfoundland: "135 kha of tree cover",
novascotia: "267 kha of tree cover",
britishcolumbia: "2.66 mha of tree cover",
nunavut: "238 ha of tree cover",
alberta: "651 kha of tree cover",
manitoba: "395 kha of tree cover",
northwestterritories: "166 kha of tree cover",
yukon: "41.3 kha of tree cover",
saskatchewan: "788 kha of tree cover"

};

let annualTemperatureRise = { // a list containing the average temperature increase in each province in the last 10 years

ontario: "1.5 degrees celsius",
quebec: "1.7 degrees celsius",
princeedwardisland: "1.3 degrees celsius",
newbrunswick: "1.1 degrees celsius",
newfoundland: "0.8 degrees celsius",
novascotia: "0.4 degrees celsius",
britishcolumbia: "0.014 degrees celsius",
nunavut: "2.3 degrees celsius",
alberta: "2.5 degrees celsius",
manitoba: "0.1 degrees celsius",
northwestterritories: "2.3 degrees celsius",
yukon: "2.3 degrees celsius",
saskatchewan: "1.0 degrees celsius"
};

// converting to the province name to lowercase, and making it a single lowercase word

let input = (document.getElementById("provinceName").value).split(" ").join("").toString().toLowerCase();

let index = inputCheck.indexOf(input);

if (index >= 0) {

  console.log("Province recognized! Statistics being outputted.")

return (document.getElementById("outputOne").innerHTML = "Amount of tree cover lost in the past twenty years: " + coverLostInTwentyYears[input]) + (document.getElementById("outputTwo").innerHTML = "The amount of tree cover gained between 2001 and 2012: " + treeCoverGain[input]) + (document.getElementById("outputThree").innerHTML = "The average annual temperature rise in the last ten years: " + annualTemperatureRise[input]) + (document.getElementById("outputFour").innerHTML = "Canada's Statistics: ");

  console.log("Statistics outputted.")

} else {

  console.log("Province not recognized, spelling error has occured.")

return (document.getElementById("outputOne").innerHTML = "Check the spelling of your input.") + (document.getElementById("outputTwo").innerHTML = "") + (document.getElementById("outputThree").innerHTML = "");
}}


/**
  * Outputs the statistical information about deforestation of Canada. This is called when a button is pressed in the html file.
  *
  * @returns {string} The information related Canada.
  */
function getCanadianStats () {

  console.log("Canadian Statistics begin outputted.")

return (document.getElementById("outputFive").innerHTML = "Amount of tree cover lost in Canada during the past twenty years: A total of 44.05 mha of tree cover" ) + (document.getElementById("outputSix").innerHTML = "The amount of tree cover gained in Canada between 2001 and 2012: A total of 9.11 mha of tree cover") + (document.getElementById("outputSeven").innerHTML = "The average annual temperature rise in Canada during the last ten years: 1.7 degrees celsius")

  console.log("Canadian Statistics outputted.")

}

// =======================================================================