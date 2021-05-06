const  {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP('173.246.139.190', (error, geo) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , geo);
});

fetchISSFlyOverTimes({ latitude: '43.1373', longitude: '-79.2928' }, (error, geo) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log(`The ISS current location is:` , geo);
});