"use client";
import TextField from "@mui/material/TextField";
import NationalitySelect from "../form/NationalitySelect";
import React, { useState } from "react";
import PhoneNumberField from "../form/PhoneNumberField";
import CounterTraveller from "../form/CounterTraveller";
import BudgetSelected from "./BudgetSelected";
import TourTypeSelected from "./TourTypeSelected";
import DestinationSelected from "./DestinationSelected";
import ArrivalDate from "../form/ArrivalDate";
import DepartureDate from "../form/DepartureDate";
import { FormProvider, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import format from "date-fns/format";

function CustomizForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [flight, setFlight] = useState("");
  const [number, setnumber] = useState("+39");
  const [aduits, setAduits] = useState(0);
  const [childs, setChilds] = useState(0);
  const [StartDate, setStartDate] = useState(null);
  const [EndDate, setEndDate] = useState(null);
  const [childAges, setChildAges] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({
    code: "IT",
    label: "Italy",
    phone: "39",
  });
  const [budget, setBudget] = useState(null);
  const [destination, setDestination] = useState(null);
  const methods = useForm();
  const router = useRouter();
  // handle tour Type change
  const handleDestination = (newValue) => {
    setDestination(newValue);
  };
  // handle buget slected
  const handleBudget = (newValue) => {
    setBudget(newValue);
  };
  // handle selected country
  const handleCountryChange = (newValue) => {
    setSelectedCountry(newValue);
  };
  //   handle change phone number
  const handlephoneNumber = (value) => {
    setnumber(value);
  };
  //   handle remove travler
  const handleRemoveCounter = (type) => {
    if (type == "adults" && aduits > 0) {
      setAduits(aduits - 1);
    }
    if (type == "childs" && childs > 0) {
      setChilds(childs - 1);
    }
  };
  //   handle add traveler
  const handleAddCounter = (type) => {
    if (type == "adults") {
      setAduits(aduits + 1);
    }
    if (type == "childs") {
      setChilds(childs + 1);
    }
  };
  //   handle start date change
  const handleStartDate = (date) => {
    setStartDate(date);
  };
  //   handle end date change
  const handleEndDate = (date) => {
    setEndDate(date);
  };
  //  handle add child age
  const handleAddChild = () => {
    setChildAges([...childAges, ""]);
    handleAddCounter("childs");
  };
  //  handle remove child age
  const handleRemoveChild = (index) => {
    const updatedAges = [...childAges];
    updatedAges.splice(index, 1);
    setChildAges(updatedAges);
    handleRemoveCounter("childs");
  };
  //  handle change child age
  const handleChildAgeChange = (index, age) => {
    const updatedAges = [...childAges];
    updatedAges[index] = age;
    setChildAges(updatedAges);
  };
  // handel formate date
  const dateArrival = StartDate
    ? format(new Date(StartDate), "dd/MM/yyyy")
    : StartDate;

  const dateDepature = EndDate
    ? format(new Date(EndDate), "dd/MM/yyyy")
    : EndDate;
  // handle submit
  const onSubmit = (data) => {
    axios
      .post(
        `https://api.dubaidaytrips.com/v1/inquires?tenant_id=18&language_id=11`,
        {
          ...data,
          adults: aduits,
          children: childs,
          departure_airport: flight,
          arrival: dateArrival,
          departure: dateDepature,
          // flight: checked ? "yes" : "no",
          url_goal: window.location.href,
          number: number,
          nationality: selectedCountry.label,
          name,
          email,
          destination,
          budget_per_person: budget,
          ageOfChildern: JSON.stringify(childAges),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        router.push("/richiestaricevuta");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="border rounded-md py-4 px-5 shadow-xl bg-white bg-opacity-[0.6]"
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {/* name */}
          <div className="">
            <TextField
              id="name"
              label="Nome"
              variant="standard"
              type="text"
              required
              fullWidth
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          {/* email */}
          <div className="">
            <TextField
              id="email"
              label="Email"
              variant="standard"
              fullWidth
              required
              type="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          {/* Nationality */}
          <div className="">
            <NationalitySelect
              selectedCountry={selectedCountry}
              handleCountryChange={handleCountryChange}
            />
          </div>
          {/* number and code  */}
          <div className="">
            <PhoneNumberField onChange={handlephoneNumber} value={number} />
          </div>
          {/* counter Travel */}
          <div className="md:col-span-2">
            <CounterTraveller
              handleRemoveCounter={handleRemoveCounter}
              handleAddCounter={handleAddCounter}
              adults={aduits}
              childrens={childs}
              childAges={childAges}
              handleAddChild={handleAddChild}
              handleRemoveChild={handleRemoveChild}
              handleChildAgeChange={handleChildAgeChange}
            />
          </div>
          {/* you Budget */}
          <div className="">
            <BudgetSelected value={budget} onChange={handleBudget} />
          </div>
          {/* tour Type */}
          {/* <div className="">
            <TourTypeSelected value={tourType} onChange={handleTourType} />
          </div> */}
          {/*  flight */}
          <div className="">
            <TextField
              id="Aggiungivolo"
              label="Aggiungi volo"
              variant="standard"
              type="text"
              fullWidth
              onChange={(event) => {
                setFlight(event.target.value);
              }}
            />
          </div>
          {/* Destination */}
          <div className="">
            <DestinationSelected
              value={destination}
              onChange={handleDestination}
            />
          </div>
          {/* arrival */}
          <div className="">
            <ArrivalDate value={StartDate} onChange={handleStartDate} />
          </div>
          {/* departure */}
          <div className="">
            <DepartureDate value={EndDate} onChange={handleEndDate} />
          </div>
          {/*message*/}
          <div className="md:col-span-2">
            {/*text message */}
            <div className=" mt-5  md:col-span-2">
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
                placeholder="descrivi la tipologia del viaggio che desideri fare"
              />
            </div>
          </div>
          {/* buttonsent */}
          <div className=" md:col-span-2 ">
            <button className="flex justify-center items-center py-4 bg-bsBlue rounded-md cursor-pointer w-full">
              <span className="text-[16px] font-medium text-white  capitalize text-center">
                Rechiesta Preventivo
              </span>
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default CustomizForm;
