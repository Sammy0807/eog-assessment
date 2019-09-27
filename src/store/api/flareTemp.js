import axios from "axios";

const flareTemps = async () => {
  return await axios
    .get("http://localhost:3000/flareTemps")
    .then(res => res.data);
};

export default flareTemps;
