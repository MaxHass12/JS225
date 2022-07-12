function makeCountry(name, continent, visited = false) {

  return {
    name,
    continent,
    visited,
    getDescription() {
      let countryDetails = `${this.name} is located in ${this.continent}.`;
      let visitedStatus = ` I ${this.visited ? 'have' : 'havent'} visited ${this.name}.`;
      console.log(countryDetails + visitedStatus);
    },
    visitCountry() {
      this.visited = true;
    },
  };
};

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

canada.getDescription();
canada.visitCountry();
canada.getDescription();