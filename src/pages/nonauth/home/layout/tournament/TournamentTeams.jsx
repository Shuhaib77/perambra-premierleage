import React from "react";
import Button from "../../../../../common/components/Button/Button";
import TournamentCard from "./common/compnents/TournamentCard";

function TournamentTeams() {
  const teamCards = [
    {
      name: "Royal Warriors",
      stats: [
        { label: "Matches", value: "12" },
        { label: "Wins", value: "9" },
        { label: "Points", value: "18" },
      ],
      buttonText: "View Team",
    },
    {
      name: "Power Hitters",
      stats: [
        { label: "Matches", value: "10" },
        { label: "Wins", value: "7" },
        { label: "Points", value: "14" },
      ],
      buttonText: "View Team",
    },
    {
      name: "Power Hitters",
      stats: [
        { label: "Matches", value: "10" },
        { label: "Wins", value: "7" },
        { label: "Points", value: "14" },
      ],
      buttonText: "View Team",
    },
     {
      name: "Power Hitters",
      stats: [
        { label: "Matches", value: "10" },
        { label: "Wins", value: "7" },
        { label: "Points", value: "14" },
      ],
      buttonText: "View Team",
    },
  ];

  return (
    <>
      <div className="min-h-[946px] lg:pt-20  space-y-10 p-3 lg:px-10">
        <div className="text-center space-y-3 ">
          <Button
            className={
              "bg-[#DBEAFE]   text-primary      lg:h-[40px] px-5 rounded-2xl"
            }
            name={" Season 2026"}
          />
          <h1>Competing Teams</h1>
          <div className="w-full max-w-[50%] mx-auto text-base">
            Eight powerhouse teams battling for championship glory. Each team
            brings unique strategies, star players, and passionate fan bases.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10  ">
          {teamCards.map((item, i) => (
            <TournamentCard
              key={i}
              name={item.name}
              stats={item.stats}
              buttonText={item.buttonText}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TournamentTeams;
