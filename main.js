const fs = require("fs/promises");

const csvFile = "./users.csv";
const jsonFile = "./users.json";
const userData = {
  userName: "",
  birthDate: "",
  address: "",
  mobileNumber: "",
  gender: "",
};
let readCSV = async (csvFile) => {
  const myData = await fs.readFile(csvFile, "utf8");
  return myData.split("\n").map((user) => user.split(",").map((d) => d.trim()));
};

const convertToJson = (csvData) => {
  const metaData = Object.keys(userData);
  return csvData.slice(1).map((user) => {
    let userData = {};
    user.forEach((value, index) => {
      userData[metaData[index]] = value;
    });
    return userData;
  });
};

const saveToFile = async (data, filePath) => {
  let dataStr = JSON.stringify(data);
  await fs.writeFile(filePath, dataStr);
};

const readJSONFile = async (jsonFile) => {
  const data = await fs.readFile(jsonFile, "utf8");
  console.log(data);
};

async function display() {
  const data = await readCSV(csvFile);
  const dataArray = await convertToJson(data);
  await saveToFile(dataArray, jsonFile);
  await readJSONFile(jsonFile);
}
display();
