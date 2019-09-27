import axios from "axios";

const oilTemps = async () => {
  return await axios
    .get("http://localhost:3000/oilTemps")
    .then(res => res.data);
};

export default oilTemps;
