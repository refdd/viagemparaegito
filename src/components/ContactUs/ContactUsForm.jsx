"use client";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import NationalitySelect from "../form/NationalitySelect";
import PhoneNumberField from "../form/PhoneNumberField";
import { FormProvider, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
function ContactUsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setnumber] = useState("+39");
  const [selectedCountry, setSelectedCountry] = useState({
    code: "IT",
    label: "Italy",
    phone: "39",
  });
  const methods = useForm();
  const router = useRouter();
  //
  const handlephoneNumber = (value) => {
    setnumber(value);
  };
  // handle selected country
  const handleCountryChange = (newValue) => {
    setSelectedCountry(newValue);
  };
  // handle submit
  const onSubmit = (data) => {
    axios
      .post(
        `https://api.dubaidaytrips.com/v1/inquires?tenant_id=18&language_id=11`,
        {
          ...data,
          name,
          email,
          number,
          nationality: selectedCountry.label,
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
        className="px-5 py-7 bg-white opacity-[.8] rounded-md shadow-lg w-full md:w-[400px] "
      >
        <p className="text-lg md:text-2xl text-mainColor  font-semibold capitalize">
          Inviaci Un Messaggio
        </p>
        <div className="grid grid-cols-1 gap-6 mt-4">
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
          {/*text message */}
          <div className=" mt-5  ">
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
              placeholder="Aggiungi suggerimenti o spiegaci cosa vuoi fare?"
            ></textarea>
          </div>
          {/* button sent */}
          <div className="  ">
            <button className="flex justify-center items-center py-4 bg-bsBlue rounded-md cursor-pointer w-full">
              <span className="text-[16px] font-medium text-white  capitalize text-center">
                Invia
              </span>
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default ContactUsForm;
