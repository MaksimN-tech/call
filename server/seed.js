require("./db/connect");
const mongoose = require("mongoose");
const Call = require("./models/call.model");
const faker = require('faker');


(async function seed() {
  for(let i = 0; i < 8; i++){
    const call = new Call({
      phone: faker.phone.phoneNumber(),
      call_date: faker.date.past(),
    });
    await call.save();
  }

  mongoose.disconnect(() => {
    console.log("connection was closed!");
  });
})();
