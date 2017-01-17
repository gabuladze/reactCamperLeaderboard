// Get the top 100 campers
const getTopCampers = (callback) => {
  let config = { method: 'GET' };
  fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent', config)
    .then((response) => {
      response.json()
        .then(campers => { return callback(campers) });
    });
};

export default getTopCampers;