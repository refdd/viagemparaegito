"use client";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import ArrivalDate from "./ArrivalDate";
import DepartureDate from "./DepartureDate";
import NationalitySelect from "./NationalitySelect";
import PhoneNumberField from "./PhoneNumberField";
import CounterTraveller from "./CounterTraveller";
import Checkflight from "./Checkflight";
import TextArea from "./TextArea";
import { BsArrowUpRight } from "react-icons/bs";
import { FormProvider, useForm } from "react-hook-form";
import format from "date-fns/format";
import axios from "axios";
import { useRouter } from "next/navigation";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ariportFlight, setAriportFlight] = useState("");
  const [number, setnumber] = useState("+39");
  const [StartDate, setStartDate] = useState(null);
  const [EndDate, setEndDate] = useState(null);
  const [aduits, setAduits] = useState(0);
  const [childs, setChilds] = useState(0);
  const [checked, setChecked] = useState(false);
  const [childAges, setChildAges] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({
    code: "IT",
    label: "Italy",
    phone: "39",
  });
  const methods = useForm();
  const router = useRouter();
  // handle selected country
  const handleCountryChange = (newValue) => {
    setSelectedCountry(newValue);
  };
  //   handle start date change
  const handleStartDate = (date) => {
    setStartDate(date);
  };
  //   handle end date change
  const handleEndDate = (date) => {
    setEndDate(date);
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
  //   handle check flight
  const handleCheck = (event) => {
    setChecked(event.target.checked);
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
          departure_airport: ariportFlight,
          arrival: dateArrival,
          departure: dateDepature,
          flight: checked ? "yes" : "no",
          url_goal: window.location.href,
          number: number,
          nationality: selectedCountry.label,
          name,
          email,
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
        className="grid grid-cols-1 gap-3 lg md:grid-cols-2 md:gap-5 "
      >
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
        {/* arrival */}
        <div className="">
          <ArrivalDate value={StartDate} onChange={handleStartDate} />
        </div>
        {/* departure */}
        <div className="">
          <DepartureDate value={EndDate} onChange={handleEndDate} />
        </div>
        {/* Nationality */}
        <div className="">
          <NationalitySelect
            selectedCountry={selectedCountry}
            handleCountryChange={handleCountryChange}
          />
        </div>
        {/* Nationality */}
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
        {/* check flight */}
        <div className=" md:col-span-2">
          <Checkflight checked={checked} handleChange={handleCheck} />
          {/* Flight */}
          {checked && (
            <div className="">
              <TextField
                id="Flight"
                label="aeroporto più vicino"
                variant="outlined"
                type="text"
                fullWidth
                onChange={(event) => {
                  setAriportFlight(event.target.value);
                }}
              />
            </div>
          )}
        </div>

        {/*message*/}
        <div className="md:col-span-2">
          <TextArea />
        </div>
        {/* button */}
        <div className="md:col-span-2">
          <div className="flex items-center justify-center py-3 gap-3 bg-bsBlue rounded transition-all hover:md:bg-[#051036]">
            <button className="text-[15px] text-white  font-medium capitalize">
              Richiesta Preventivo{" "}
            </button>

            <BsArrowUpRight className="text-white text-lg" />
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default Form;
