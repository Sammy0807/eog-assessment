import axios from "axios";

const waterTemp = async () => {
  return await axios
    .get("http://localhost:3000/waterTemps")
    .then(res => res.data);
};

export default waterTemp;
