const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const theaterIXX = await promiseTheaterIXX();
    const theaterVGC = await promiseTheaterVGC();

   const total = [...theaterIXX, ...theaterVGC].reduce((acc, val) => {
    return val.hasil === emosi ? ++acc : acc;
   },0);

   return total;

  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
