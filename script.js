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
  const tolerantiekrediet = ((efficiency - 50) + 3 * (totaalStudiePunten - behaaldeStudiePunten)) / 10;

  // Display the results
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `
    <p>Efficiëntie: ${efficiency.toFixed(2)}%</p>
    <p>Tolerantiekrediet: ${tolerantiekrediet.toFixed(2)} studiepunten</p>
  `;
}
