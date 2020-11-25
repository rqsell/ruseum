import React, { useEffect, useState } from "react";
import axios from "axios";
import request from "superagent";
import traverson from "traverson";
import JsonHalAdapter from "traverson-hal";

function API(props) {
  const [frida, setFrida] = useState({});

  //   "token":"eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI1ZjQ2OGU4M2Y2MmY1ZTAwMTE1NmVkZjMiLCJleHAiOjE2MDY4NzcyMjMsImlhdCI6MTYwNjI3MjQyMywiYXVkIjoiNWY0NjhlODNmNjJmNWUwMDExNTZlZGYzIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjVmYmRjNWE3NWUzZGI0NWU2NDQ2OGMwOCJ9.H1ofNDJKGy_BMuPwusge4PTgVuj_QayCGImaoWsVkws","expires_at":"2020-12-02T02:47:03+00:00"

  let xappToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI1ZjQ2OGU4M2Y2MmY1ZTAwMTE1NmVkZjMiLCJleHAiOjE2MDY4NzcyMjMsImlhdCI6MTYwNjI3MjQyMywiYXVkIjoiNWY0NjhlODNmNjJmNWUwMDExNTZlZGYzIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjVmYmRjNWE3NWUzZGI0NWU2NDQ2OGMwOCJ9.H1ofNDJKGy_BMuPwusge4PTgVuj_QayCGImaoWsVkws";
  useEffect(() => {
    traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);
    let api = traverson.from("https://api.artsy.net/api").jsonHal();

    api
      .newRequest()
      .follow("artist")
      .withRequestOptions({
        headers: {
          "X-Xapp-Token": xappToken,
          Accept: "application/vnd.artsy-v2+json",
        },
      })
      .withTemplateParameters({ id: "frida-kahlo" })
      .getResource(function (error, fridaKahlo) {
        console.log(fridaKahlo);
        setFrida(fridaKahlo);
      });
  }, []);

  return (
    <div>
      <div>
        <h1>{frida?.name}</h1>
        <img src={frida?._links.thumbnail.href} alt="pic" />
        <ul>
          <li> Born: {frida.birthday} </li>
          <li>Died: {frida.deathday}</li>
          <li> Nationality: {frida.nationality}</li>
          <li> Hometown: {frida.hometown} </li>
        </ul>
      </div>
    </div>
  );
}

export default API;
