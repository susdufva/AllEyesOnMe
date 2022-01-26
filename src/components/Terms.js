import React from "react";

function Terms() {
  return (
    <>
      <div className="flex justify-center mt-28 h-screen">
        <div className="text-white text-sm sm:text-md tracking-wide w-full px-6 sm:w-2/3 lg:w-1/2 text-left">
          <p>
            <b className="font-bold text-lg">Terms & Conditions. </b>
            <p>
              The glasses are unique customisations of handpicked frames from
              other manufacturers. Some of the frames are second hand. Since the
              frames are handmade some of them have flaws. They are all unique
              so there is only one example per frame.{" "}
              <p>No returns are allowed.</p>{" "}
            </p>
            VAT according to Swedish law. Import fees/taxes that may apply to
            international orders are the buyer's responsibility. Please make all
            necessary inquiries before placing your order.
          </p>{" "}
          <p>World wide shipping.</p>
          <p className="font-semibold mt-10">
            Contact: sofia@ljusbergolsson.com
          </p>
        </div>
      </div>
    </>
  );
}

export default Terms;
