const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
    await mongoose
        .connect("mongodb://127.0.0.1:27017/dessertsDB")
        .then(() => {
            console.log("CONNECTION OPEN");
        })
        .catch((err) => {
            console.log("error");
          });
} //   for .load ---- node -i -e "$(< app.js)"

const dessertSchema = mongoose.Schema(
        {
                name: String,
                tastiness: Number,
                difficulty: Number
        }
)
const dessert = mongoose.model('dessert', dessertSchema);
// const cookies = new dessert({
//         name: "Cookies",
//         tastiness: 8,
//         difficulty: 4
// })
// const cake = new dessert({
//         name: "Cake",
//         tastiness: 6,
//         difficulty: 4
// })
// const cheeseCake = new dessert({
//         name: "CheeseCake",
//         tastiness: 11,
//         difficulty: 6
// })

dessert.insertMany([
        {name: "Brownies", tastiness: 6, difficulty: 4},
        {name: "Blondies", tastiness: 7, difficulty: 4},
        {name: "Ice Cream", tastiness: 8, difficulty: 5}
]);