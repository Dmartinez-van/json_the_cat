const request = require('request');

const args = process.argv.slice(2);

const breed = args[0];

request(`https://api.thecatdapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log("Seems like you encountered an error... hmm, here are the detaisl: ");
    console.log("Tried to access the site: ", error.hostname);
    throw error;
  }
  
  const data = JSON.parse(body);
  
  if (data[0] === undefined) {
    console.log(`oops,  "${breed}"  is not a valid breed. Try again. `);
    process.exit();
  }

  console.log(data[0].description);
  process.exit();
});