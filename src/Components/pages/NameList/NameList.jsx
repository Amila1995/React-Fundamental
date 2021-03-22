import React, { useState, useEffect } from "react";
import NameListItem from "./NameListItem";

function NameList() {
  const [loadData, setLoadData] = useState(new Date());
  const [nameList, setNameList] = useState([
    {
      id: 1,
      name: { title: "mr", first: "Brad", last: "Gibson" },
      location: { city: "kilcoole" },
      email: "brad.gibson@example.com",
      dob: { date: "1993-07-20T09:44:18.674Z", age: 26 },
      picture: { medium: "https://randomuser.me/api/portraits/med/men/75.jpg" },
    },
    {
      id: 2,
      name: { title: "Miss", first: "Freja", last: "Nielsen" },
      location: { city: "Støvring" },
      email: "freja.nielsen@example.com",
      dob: { date: "1968-11-12T03:39:13.753Z", age: 53 },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/women/65.jpg",
      },
    },
    {
      id: 3,
      name: { title: "Mr", first: "Matias", last: "Rintala" },
      location: { city: "kSund" },
      email: "matias.rintala@example.com",
      dob: { date: "1968-05-21T13:15:29.432Z", age: 53 },
      picture: { medium: "https://randomuser.me/api/portraits/med/men/53.jpg" },
    },
  ]);

  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((Response) => {
        return Response.json();
      })
      .then((responseData) => {
        setNameList((NameList) => [...NameList, responseData.results[0]]);
      });
  }, [loadData]);

  const nameListComponent = () => {
    return nameList.map((aName) => {
      return (
        <NameListItem
          key={aName.id}
          name={`${aName.name.first} ${aName.name.last}`}
          city={aName.location.city}
          email={aName.email}
          birthday={aName.dob.date}
          avatar={aName.picture.medium}
        />
      );
    });
  };

  const addUserHandler = () => {
    setLoadData(new Date());

    /* const newUser = {
      id: new Date(),
      name: { title: "Miss", first: "Cassandre", last: "Giraud" },
      location: { city: "Bordeaux" },
      email: "cassandre.giraud@example.com",
      dob: { date: "1991-08-28T10:15:08.484Z", age: 30 },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/women/39.jpg",
      },
    };

    // [1.2.3]
    // [1.2.3,4] concat method
    //setNameList((nameList) => nameList.concat(newUser));

    //Spread operator
    //setNameList([...nameList, newUser]); // not a recomand method
    setNameList((nameList) => [...nameList, newUser]); // after use rapper function
    */
  };
  return (
    <React.Fragment>
      <div className="container mt-4">
        <button className="btn btn-primary mb-2" onClick={addUserHandler}>
          Add Name
        </button>
        <ul className="list-group">{nameListComponent()}</ul>
      </div>
    </React.Fragment>
  );
}
export default NameList;

