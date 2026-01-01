import React from "react";
import Button from "../../../../../common/components/Button/Button";
import ScheduleCard from "./common/components/cards/ScheduleCard";

function Schedule() {
  const schedules = [
    {
      date: "Jan 17, 2026",
      time: "3:00 PM",
      teamA: "Golden Eagles",
      teamB: "Midnight Panthers",
      venue: "Central Stadium",
      status: "Upcoming", // Upcoming | Completed | Live
    },
    {
      date: "Jan 20, 2026",
      time: "7:30 PM",
      teamA: "Royal Warriors",
      teamB: "Thunder Kings",
      venue: "Victory Arena",
      status: "Live",
    },
    {
      date: "Jan 25, 2026",
      time: "5:00 PM",
      teamA: "Power Hitters",
      teamB: "Desert Hawks",
      venue: "Champion Ground",
      status: "Completed",
    },
  ];

  return (
    <>
      <div className=" mt-20 p-3 lg:px-10">
        <div className="text-center space-y-3 h-[144px]">
          <Button
            className={
              "bg-secondary hover:bg-primary  hover:border border-white hover:text-white text-primary  w-[150px]  h-[40px] px-5 rounded-2xl"
            }
            name={" Season 2026"}
          />
          <h1>Fixtures & Results</h1>
          <p className="w-full lg:max-w-[50%] mx-auto">
            Stay updated with the latest match schedules and results. Don't miss
            a single moment of the action.
          </p>
        </div>
        <div className=" flex lg:justify-center p-2 lg:p-0 space-x-4">
          <Button
            className={
              "bg-primary text-sm lg:text-base hover:bg-white  hover:border border-primary hover:text-primary text-white  w-[200px]  h-[50px] lg:h-[70px] px-5 rounded-2xl"
            }
            name={" Season 2026"}
          />
          <Button
            className={
              "bg-primary hover:bg-white  text-sm lg:text-base hover:border border-primary hover:text-primary text-white  w-[200px]  h-[50px]  lg:h-[70px] px-5 rounded-2xl"
            }
            name={" Season 2026"}
          />
          <Button
            className={
              "bg-primary hover:bg-white text-sm lg:text-base  hover:border border-primary hover:text-primary text-white  w-[200px]  h-[50px] lg:h-[70px] px-5 rounded-2xl"
            }
            name={" Season 2026"}
          />
        </div>
        <div>
          {schedules.map((item, i) => (
            <ScheduleCard
              key={i}
              date={item.date}
              time={item.time}
              teamA={item.teamA}
              teamB={item.teamB}
              venue={item.venue}
              status={item.status}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Schedule;
