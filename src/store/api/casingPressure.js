import axios from "axios";

const casingPressures = async () => {
  return await axios
    .get("http://localhost:3000/casingPressures")
    .then(res => res.data);
};

export default casingPressures;
