function calculate() {
  // Get the values from the form
  const behaaldeStudiePunten = document.getElementById("behaalde_studiepunten").value;
  const opgenomenStudiePunten = document.getElementById("opgenomen_studiepunten").value;
  const vrijstellingen = document.getElementById("vrijstellingen").value;
  const totaalStudiePunten = document.getElementById("totaal_studiepunten").value;

  // Calculate the effective number of study points
  const effectiveStudiePunten = opgenomenStudiePunten - vrijstellingen;

  // Calculate the efficiency
  const efficiency = (behaaldeStudiePunten / effectiveStudiePunten) * 100;

  // Calculate the tolerantiekrediet
  const tolerantiekrediet = ((efficiency - 50) + 3 * (totaalStudiePunten - vrijstellingen)) / 60;

  // Display the results
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `
    Je studie-efficiëntie is ${efficiency.toFixed(2)}%.<br>
    Je tolerantiekrediet is ${tolerantiekrediet.toFixed(2)}.
  `;
}