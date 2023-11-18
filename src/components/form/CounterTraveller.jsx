import TextField from "@mui/material/TextField";
import React from "react";
import { BsPersonAdd } from "react-icons/bs";
import { FaChild } from "react-icons/fa";
import { ImMan } from "react-icons/im";
import { MdOutlinePersonRemoveAlt1 } from "react-icons/md";
import ChildAgesFiled from "./ChildAgesFiled";
function CounterTraveller({
  adults,
  childrens,
  handleRemoveCounter,
  handleAddCounter,
  childAges,
  handleAddChild,
  handleRemoveChild,
  handleChildAgeChange,
}) {
  return (
    <div className=" col-span-2 ">
      <div className=" grid grid-cols-2 gap-3 mt-5">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <ImMan className="text-2xl text-bsBlue" />
            <span className="text-sm text-[#555]  capitalize font-medium">
              {" "}
              Adulti
            </span>
          </div>
          <div className="flex items-center px-5">
            <div
              onClick={() => {
                handleAddCounter("adults");
              }}
              className="text-colorDark text-xl cursor-pointer"
            >
              <BsPersonAdd />{" "}
            </div>
            <TextField
              required
              type="tel"
              variant="standard"
              value={adults}
              inputProps={{ style: { textAlign: "center" } }}
            />
            <div
              onClick={() => {
                handleRemoveCounter("adults");
              }}
              className="text-colorDark text-xl cursor-pointer"
            >
              <MdOutlinePersonRemoveAlt1 />{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <FaChild className="text-2xl text-bsBlue" />
            <span className="text-sm text-[#555]  capitalize font-medium">
              {" "}
              Bambini
            </span>
          </div>
          <div className="flex items-center px-5">
            <div
              onClick={() => {
                handleAddChild();
              }}
              className="text-colorDark text-xl cursor-pointer"
            >
              <BsPersonAdd />{" "}
            </div>
            <TextField
              required
              type="tel"
              variant="standard"
              value={childrens}
              inputProps={{ style: { textAlign: "center" } }}
            />
            <div
              onClick={() => {
                handleRemoveChild("childs");
              }}
              className="text-colorDark text-xl cursor-pointer"
            >
              <MdOutlinePersonRemoveAlt1 />{" "}
            </div>
          </div>
        </div>
      </div>

      <ChildAgesFiled
        childAges={childAges}
        handleChildAgeChange={handleChildAgeChange}
      />
    </div>
  );
}

export default CounterTraveller;
