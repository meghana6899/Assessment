import React, { useEffect, useState } from "react";
import DropDown from "../components/DropDown";
import DataTable from "../components/DataTable";
import fetchData from "../api/queries/fetchData";

const HomePage = () => {
  const [capital ,setCapital] = useState()
  const [data, setData] = useState([])
  const getValue = (value) => {
    console.log(value)
    setCapital(value)
  };
  console.log("Capital", capital)

  useEffect(() => {
    const getData = async() => {
        try {
            // console.log("From Home",capital)
            const response = await fetchData(capital);
            console.log(response)
            setData(response)
        } catch (error) {
            console.log(error);
        }
    }
    getData()
  }, [capital])
  console.log("Data from Home", data)

  return (
    <>
      <DropDown getValue={getValue} />
      <DataTable data={data} />
    </>
  );
};

export default HomePage;


// As for the table columns; Name , Capital, Currency & symbol, Latitude Longitude , UnNumber ( checkbox ) , Area, Flag ( image )