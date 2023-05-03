const fs = require("fs");

const csvFile = "./users.csv";
const jsonFile = "./users.json";
const JSONArray = [];

let readCSV = (csvFile) => {
  let myData = fs.readFileSync(csvFile, "utf8");
  let users = myData.split("\n");

  let jsArray = users.map((ele) => {
    return ele.split(", ");
  });
  return jsArray;
};

let convertToJson = (jsArray) => {
  let metaData = ["userName", "birthDate", "address", "mobileNumber", "gender"];
  let userData = {
    userName: "",
    birthDate: "",
    address: "",
    mobileNumber: "",
    gender: "",
  };

  jsArray.map((element, key) => {
    if (key > 0) {
      let personData = element.map((data, key) => {
        return data;
      });
      personData.map((element, key) => {
        userData[metaData[key]] = element;
      });
      JSONArray.push(userData);
    }
  });
  return JSONArray;
};

let saveToFile = (arr, jsonFile) => {
  let jsonFileData = JSON.stringify(arr);
  fs.writeFileSync(jsonFile, jsonFileData);
};

let readJSONFile = (jsonFile) => {
  const data = fs.readFileSync(jsonFile, "utf8");
};

let data = readCSV(csvFile);
let dataArray = convertToJson(data);
saveToFile(dataArray, jsonFile);
readJSONFile(jsonFile);
