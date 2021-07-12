const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const dotenv = require("dotenv");
const schema = require("./schema");
const Call = require("./models/call.model");
const cors = require("cors");
require("./db/connect");

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const root = {
  getAllCalls: () => {
    const calls = Call.find({});
    return calls;
  },
  addCall: async ({ phone }) => {
    const call = new Call({
      phone: phone,
      call_date: Date.now(),
      status: "ok",
    });
    await call.save();
  },
  changeCall: async ({ id, status }) => {
    await Call.findOneAndUpdate({ _id: id }, { status });
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  })
);

app.listen(port, () => {
  console.log(`Server run on port:${port}`);
});
