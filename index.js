const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error fetch details: ", error);
    process.exit();
  } else if (desc === null) {
    console.log("That cat species doesn't exist!");
  } else if (desc) {
    console.log(desc);
  }
});


