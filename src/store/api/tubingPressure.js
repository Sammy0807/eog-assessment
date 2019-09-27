import axios from "axios";

const tubingPressures = async () => {
  return await axios
    .get("http://localhost:3000/tubingPressures")
    .then(res => res.data);
};

export default tubingPressures;
