import React from "react";
import ContactCard from "./common/components/ContactCard";
import Button from "../../../../../common/components/Button/Button";
import Input from "../../../../../common/components/Input/Input";

function Contact() {
  const contactData = [
    {
      icon: "📧",
      title: "Email Us",
      subtitle: "Send us a message anytime",
      value: "info@permabrapremierleague.com",
    },
    {
      icon: "📞",
      title: "Call Us",
      subtitle: "We’re available 24/7",
      value: "+91 9876543210",
    },
    {
      icon: "📍",
      title: "Visit Us",
      subtitle: "Our official headquarters",
      value: "Calicut, Kerala",
    },
  ];

  return (
    <>
      <div
        className=" h-full    min-h-[1100.666748046875px] w-[100%] flex flex-col justify-center items-center mt-20 p-3 lg:p-10 pt-20  bg-cover bg-no-repeat"
        style={{
          backgroundImage:
              'linear-gradient(to right, #1C398E, #162456),url("https://images.unsplash.com/photo-1624194611924-bb02300dad6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYmF0JTIwYmFsbHxlbnwxfHx8fDE3NjcyNjg1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral")',
        }}
      >
        
        <div className="text-center space-y-3 w-full  text-white">
          <Button
            className={"bg-secondary    lg:h-[50px] px-5 rounded-2xl"}
            name={"Get in Touch"}
          />
          <h1>Contact Us</h1>
          <h1 className="text-xl">
            Have questions about the tournament, tickets, or partnerships? We'd
            love to hear from you.
          </h1>
        </div>
        <div className="flex flex-col gap-y-5 lg:flex-row  gap-x-5 w-full   mt-20">
          <div className="lg:w-1/3 space-y-4">
            {contactData.map((item, index) => (
              <ContactCard
                key={index}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                value={item.value}
              />
            ))}
          </div>{" "}
          <div className="w-full h-[650px] flex flex-col  justify-center space-y-8 p-10 rounded-2xl bg-white">
            <h1> send a message</h1>
            <div className=" space-y-6 w-full flex flex-col">
              <div className="flex w-full gap-x-5">
                <Input label={"First name"} palceholder={"First name"} />
                <Input label={"Last name"} palceholder={"Last name"} />
              </div>
              <Input label={"email"} palceholder={"First name"} />
              <Input label={"Last name"} palceholder={"sublect"} />
              <Input label={"message"} palceholder={"sublect"} />
              <div className=" px-15 ">
                <Button
                  className={
                    "bg-primary  text-white w-full     lg:h-[60px] px-5 rounded-2xl"
                  }
                  name={"Send Message"}
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </>
  );
}

export default Contact;
