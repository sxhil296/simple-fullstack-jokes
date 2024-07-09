import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [jokes, setJokes] = useState([]);

  const showJokes = () => {
    axios
      .get("/api/v1/jokes")
      .then((response) => {
        console.log(response.data);
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const hideJokes = () => {
    setJokes([]);
  };

  return (
    <div className="flex flex-col items-center py-12">
      <h1 className="font-bold text-2xl mb-4">
        Simple Jokes - a small project to understand the very basics of
        fullstack development
      </h1>
      <p className="mb-4">JOKES: {jokes.length}</p>
      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-white text-black hover:bg-slate-200 rounded-md"
          onClick={showJokes}
        >
          Show Jokes
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-black hover:bg-white rounded-md"
          onClick={hideJokes}
        >
          Hide Jokes
        </button>
      </div>
      <div className="w-full max-w-md">
        {jokes.map((joke) => {
          return (
            <div key={joke.id} className="mb-6 p-4 border-b border-gray-300">
              <h2 className="text-xl font-bold mb-2">
                {joke.id} : {joke.title}
              </h2>
              <p className="text-lg">{joke.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
