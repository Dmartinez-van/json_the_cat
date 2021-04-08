const request = require('request');

const args = process.argv.slice(2);

const breed = args[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error === null) {
    console.log(`oops,  "${breed}"  is not a valid breed. Try again. `);
  }
  if (error) {
    console.log("Seems like you encountered an error... hmm, here are the detaisl: ");
    //throw error;
    throw error;
  }
  
  const data = JSON.parse(body);

  // console.log("body: ", data);
  console.log("typeof body", typeof data);
  console.log(data[0]);
  process.exit();
});