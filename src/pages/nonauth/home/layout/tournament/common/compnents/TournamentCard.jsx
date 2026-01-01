import React from "react";
import Button from "../../../../../../../common/components/Button/Button";

function TournamentCard({ name, stats, buttonText }) {
  return (
    <>
      <div className="h-[324px] rounded-3xl w-full ">
        <div className="h-[128px] rounded-t-3xl  bg-secondary "></div>
        <div className="h-full min-h-[196px] space-y-3 p-5 px-7 ">
          <h1>{name}</h1>
          <div className="flex justify-between">
            {stats.map((item, index) => (
              <div key={index} className="text-center">
                <h1>{item.label}</h1>
                <h1>{item.value}</h1>
              </div>
            ))}
          </div>

          <div className="">
            <Button
              className={
                "w-full rounded-xl text-white bg-primary px-5 h-[48px]"
              }
              name={buttonText}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TournamentCard;
