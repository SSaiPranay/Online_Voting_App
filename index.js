const app = require("./app");

app.listen(process.env.PORT || 3000, () => {
  console.log("Started server at the port 3000");
});