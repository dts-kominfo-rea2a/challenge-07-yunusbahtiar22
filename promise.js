const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const theaterIXX = await promiseTheaterIXX();
    const theaterVGC = await promiseTheaterVGC();

   const list = [...theaterIXX, ...theaterVGC];
   let total = 0;
   list.forEach(item => {
     const { hasil } = item;
     hasil === emosi ? total++ : total + 0;
   });

  return total;

  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
