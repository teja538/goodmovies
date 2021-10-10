import React from "react";
import "./styles.css";
import { useState } from "react";

const movieDB = {
  comedy: [
    {
      name: "Jathi Ratnalu",
      rating: "4/5",
      description:
        "Three young men leave their village to find decent jobs in the city. However, they find themselves in a pickle when a minister blackmails them for a lost mobile phone."
    },
    {
      name: "F2",
      rating: "3.5/5",
      description:
        "Venky and Varun tell a policeman about their marital troubles; as they tell their own story, they both realise the mistakes of the past and decide to win back their wives."
    },
    {
      name: "Julayi",
      rating: "4/5",
      description:
        "Ravi happens to cross paths with Bittu, a gangster, and helps the police foil his plan to rob a bank. Eventually, Bittu resolves to destroy Ravi and his family."
    },
    {
      name: "Mahanubhavudu",
      rating: "3.8/5",
      description:
        "Anand, a young man who lives with obsessive-compulsive disorder, faces a dilemma after his fixation comes in the way of having a normal relationship."
    }
  ],

  thriller: [
    {
      name: "Awe",
      rating: "4/5",
      description:
        "Several disparate characters from different walks of life come together at a unique restaurant. Including a phony chef and an aspiring time traveller, they couldn't be more different from one another, except for one way in which they're all the same."
    },
    {
      name: "Karthikeya",
      rating: "4.5/5",
      description:
        "A medical student, Karthikeya, visits Subramaniyapuram for a medical camp. However, when he learns about the mystery surrounding the temple of Kumara Swami, he decides to investigate it."
    },
    {
      name: "Spyder",
      rating: "4.5/5",
      description:
        "Shiva, an intelligence officer, develops a phone software that helps him track those in need of help. He sets out to save the people of Hyderabad when he realises that a serial killer is on the loose."
    },
    {
      name: "U-turn",
      rating: "4.5/5",
      description:
        "Rachana, an intern at a leading newspaper, investigates accidents occurring on a flyover with the help of a crime reporter. However, she gets accused of murdering a frequent motorist on the flyover."
    }
  ],

  science_fiction: [
    {
      name: "24",
      rating: "4/5",
      description:
        "Scientist Sethuraman invents a time-travelling gadget, and his evil twin brother wants to get a hold of it; a bitter battle arises between Sethuraman's son and his his twin brother to capture the gadget."
    },
    {
      name: "Tik:Tik:Tik",
      rating: "4.5/5",
      description:
        "An escape artist is recruited by the Indian Space Research Organisation to join a special team. Their mission is to stop an advancing asteroid from hitting the Earth and causing a catastrophe."
    },
    {
      name: "Taxiwala",
      rating: "4.5/5",
      description:
        "Shiva settles for the job of a cab driver after quitting several odd jobs. However, things take a turn when he faces spine-chilling incidents while driving and tries to solve the mystery."
    },
    {
      name: "krrish 3",
      rating: "4.5/5",
      description:
        "Krrish and his father must defeat human-animal mutants created by an evil genius, Kaal, who is hell-bent on destroying the world. His vile army is led by a chameleon mutant, Kaya."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("comedy");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🎬 goodmovies </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout some of the good movies. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#25E8CE",
              borderRadius: "0.3rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #25E8CE",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
              <div>-</div>
              <div style={{ fontSize: "medium" }}> {movie.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
