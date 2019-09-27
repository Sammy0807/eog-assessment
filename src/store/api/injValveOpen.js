import axios from "axios";

const injValveOpens = async () => {
  return await axios
    .get("http://localhost:3000/injValveOpens")
    .then(res => res.data);
};

export default injValveOpens;
