import React from "react";
import Button from "../../../../../common/components/Button/Button";
import cupicon from "../../../../../../public/assets/cupicon.png";

function Banner() {
  const stats = [
    {
      icon: cupicon,
      value: 6,
      subtitle: "Registered Teams",
    },
    {
      icon: cupicon,
      value: 72,
      subtitle: "Total Players",
    },
    {
      icon: cupicon,
      value: 18,
      subtitle: "Completed Matches",
    },
  ];

  return (
    <>
      <div  style={{backgroundImage:'url("https://images.unsplash.com/photo-1675693303492-9a5bc898bf94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMG5pZ2h0fGVufDF8fHx8MTc2NzIzOTY5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'}} className="h-[866px] bg-no-repeat bg-cover  space-y-8 pt-10 p-3  lg:p-10 relative bg-blue-900 bg-blend-luminosity   bg-primary">
        <div className="">
          <Button
            className={"bg-secondary    lg:h-[50px] px-5 rounded-2xl"}
            name={" Season 2026"}
          />
        </div>
        <div>
          <h1 className="text-secondary text-xl">Permabra</h1>
          <h1 className="text-xl text-white">Premier League</h1>
        </div>
        <div className="text-xl text-white max-w-1/2">
          <h1>
            Experience the thrill of world-class cricket. Eight elite teams
            competing for glory in the most electrifying tournament of the year.
          </h1>
        </div>
        <div className=" flex   space-x-4 ">
          <Button
            className={
              "bg-secondary hover:bg-primary  hover:border border-white hover:text-white text-primary  w-[200px]   h-[50px]   lg:h-[70px] px-5 rounded-2xl"
            }
            name={" Season 2026"}
          />
          <Button
            className={
              "bg-secondary  hover:bg-primary  hover:border border-white hover:text-white text-primary   w-[200px] h-[50px]   lg:h-[70px] px-5 rounded-2xl"
            }
            name={" Season 2026"}
          />
        </div>
        <div className="flex gap-x-4  text-white">
          {stats.map((item, i) => (
            <div className="w-[240px] rounded-xl space-y-2 py-4 px-4 h-[117.33333587646484px] bg-[#ffffff6c]">
              <div className="flex items-center gap-x-2">
                <img src={item?.icon} alt="" />

                <h1 className="text-2xl">{item?.value}</h1>
              </div>
              <h1 className=" text-[#ffffffce]">{item?.subtitle}</h1>
            </div>
          ))}
        </div>
      </div>
       {/* <div className="absolute inset-0 bg-blue-900/90 z-0"></div> */}
    </>
  );
}

export default Banner;
