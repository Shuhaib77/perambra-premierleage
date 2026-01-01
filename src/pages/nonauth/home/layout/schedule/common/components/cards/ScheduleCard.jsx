import React from "react";
import Button from "../../../../../../../../common/components/Button/Button";

function ScheduleCard({ date, time, teamA, teamB, venue, status }) {
  return (
    <>
      <div className="flex h-full max-h-[172] mt-10 shadow-xl rounded-2xl">
        <div className="w-[192px] text-white p-4  space-y-2 rounded-l-2xl bg-primary">
          <div className="flex gap-x-3">
            <h1>📅</h1>
            <h1>Date</h1>
          </div>
          <h1>{date}</h1>
          <div className="flex  gap-x-3">
            <h1>⏰</h1>
            <h1>Time</h1>
          </div>
          <h1>{time}</h1>
        </div>
        <div className="w-full flex flex-col justify-center rounded-r-2xl gap-y-3 px-3 lg:px-0  lg:py-6 items-center">
          <div className="flex justify-center items-center    w-full gap-x-3">
            <h1 className="lg:text-xl">{teamA}</h1>
            <Button
              className={
                "bg-secondary rounded-full    lg:h-[50px] px-4 rounded-2xl"
              }
              name={"Vs"}
            />
            <h1 className="lg:text-xl">{teamB}</h1>
          </div>
          <div className="text-center flex gap-x-3">
            <h1>icon</h1>
            <h1 className="lg:text-lg">{venue}</h1>
          </div>
          <Button
            className={
              "bg-[#DCFCE7] rounded-full text-sm lg:text-base h-[30px]  lg:h-[40px] px-4 rounded-2xl"
            }
            name={status}
          />
        </div>
      </div>
    </>
  );
}

export default ScheduleCard;
