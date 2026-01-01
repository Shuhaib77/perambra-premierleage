import React from "react";
import Button from "../../../../../common/components/Button/Button";

function About() {
  const aboutFeatures = [
    {
      icon: "🏆",
      title: "Excellence",
      description:
        "Striving for the highest standards in every match and moment.",
    },
    {
      icon: "🔥",
      title: "Passion",
      description:
        "Fueling the spirit of cricket with dedication and excitement.",
    },
    {
      icon: "🤝",
      title: "Sportsmanship",
      description:
        "Promoting fairness, respect, and integrity on and off the field.",
    },
    {
      icon: "🌍",
      title: "Global Impact",
      description: "Uniting fans and players across the world through cricket.",
    },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row p-4 justify-center mt-30px  lg:mt-40 mb-30 ">
        <div className="w-full relative lg:p-5 ">
          <div className=" ">
            <img
              className="lg:h-[700px] h-[500px] object-cover rounded-2xl w-[898px]"
              src="https://images.unsplash.com/photo-1624897174291-1bd715e371d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdGVhbSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2NzI2ODU1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt=""
            />
          </div>
          <div className=" mt-8  ">
            <div className="h-[200px] bottom-2 space-y-4 w-[270px] p-7 rounded-2xl absolute right-0  bg-secondary  ">
              <h1 className="text-6xl">5+</h1>
              <h1 className="text-2xl">Years of Excellence</h1>
            </div>
            <div />
          </div>
        </div>

        <div className="w-full space-y-4 p-3 lg:p-5">
          <Button
            className={"bg-secondary mx-auto sm:mx-0   h-[50px] px-5 rounded-2xl"}
            name={" Season 2026"}
          />
          <h1 className="text-2xl">Where Legends Are Made</h1>
          <p className="text-xl">
            The Permabra Premier League is more than just a cricket
            tournament—it's a celebration of skill, strategy, and sporting
            excellence. Since our inception, we've brought together the world's
            finest cricketers to compete in the most thrilling format of the
            game.
          </p>
          <p className="text-xl relative z-3">
            Our league showcases the perfect blend of emerging talent and
            established stars, creating unforgettable moments that inspire
            millions of fans across the globe. Every season brings new
            rivalries, spectacular performances, and memories that last a
            lifetime.
          </p>

          <div className="grid grid-cols-2">
            {aboutFeatures.map((item, index) => (
              <div key={index} className="flex gap-x-3">
                <h1>{item.icon}</h1>
                <div>
                  <h1 className="font-semibold text-lg">{item.title}</h1>
                  <h1>{item.description}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
