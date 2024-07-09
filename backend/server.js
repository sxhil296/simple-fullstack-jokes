import "dotenv/config";
import express from "express";
const port = process.env.PORT || 4000;

const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });



//route for jokes
app.get("/api/v1/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Trust Issues",
      content:
        "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 2,
      title: "Award Winning",
      content:
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 3,
      title: "No Guts",
      content:
        "Why don't skeletons fight each other? They don't have the guts.",
    },
    {
      id: 4,
      title: "Fake Spaghetti",
      content: "What do you call fake spaghetti? An impasta!",
    },
    {
      id: 5,
      title: "Tired Bike",
      content: "Why did the bicycle fall over? Because it was two-tired!",
    },
    {
      id: 6,
      title: "Cow Feet",
      content: "Why do cows have hooves instead of feet? Because they lactose.",
    },
    {
      id: 7,
      title: "Snow Vampire",
      content:
        "What do you get if you cross a snowman and a vampire? Frostbite.",
    },
    {
      id: 8,
      title: "Ocean Wave",
      content:
        "What did one ocean say to the other ocean? Nothing, they just waved.",
    },
    {
      id: 9,
      title: "Golf Pants",
      content:
        "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    },
    {
      id: 10,
      title: "Gym Relationships",
      content:
        "Why don't some couples go to the gym? Because some relationships don't work out.",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`App is serving at http://localhost:${port}`);
});
