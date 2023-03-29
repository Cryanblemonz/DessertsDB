const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
    await mongoose
        .connect("mongodb://127.0.0.1:27017/fruitApp")
        .then(() => {
            console.log("CONNECTION OPEN");
        })
        .catch((err) => {
            console.log("error");
          });
}

const fruitSchema = mongoose.Schema({
  name: String,
  color: String,
  rating: Number,
  health: Number,
});
//   for .load ---- node -i -e "$(< app.js)"

const fruit = mongoose.model("fruit", fruitSchema);
const apple = new fruit({
name: "apple",
color: "red",
rating: 5,
health: 7,
});
const orange = new fruit({
  name: "orange",
  color: "orange",
  rating: 4,
  health: 6,
  });
main();