import React from "react";

function Footer() {
  return (
    <>
      <div className="grid gap-y-5 gap-x-5 place-items-center sm:gap-x-0  grid-cols-2 h-full lg:grid-cols-4 p-5 lg:px-8 py-8 text-xl min-h-[324.66668701171875px] text-[#BEDBFF] bg-[#162456] px-4">
        <div className="space-y-4">
          <div className="flex gap-x-3">
            <h1>icon</h1>
            <h1>Permabra Premier League</h1>
          </div>
          <p className="lg:max-w-3/4">
            The premier cricket tournament bringing excitement and excellence to
            fans worldwide.
          </p>
        </div>
        <div className="space-y-4">
          <h1>Quick Links</h1>
          <div className="space-y-2">
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
          </div>
        </div>
        <div className="space-y-4">
          <h1>Information</h1>
          <div className="space-y-2">
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
          </div>
        </div>
        <div className="space-y-4">
          <h1>Follow Us</h1>
          <div>
            <h1>Stay connected for the latest updates and highlights.</h1>
            <div className="flex gap-x-3">
              <h1>Home</h1>
              <h1>icon</h1>
              <h1>icon</h1>
              <h1>icon</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
