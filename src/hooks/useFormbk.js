import { useState } from "react";
const UseForm = ({ formname, initialval }) => {
  // console.log("hooks call");
  let [formdata, setFormdata] = useState({
    name: "",
    password: "",
    email: "",
  });
  let bind = {
    value: formdata[name],
    name: formname,
    placeholder: formname,
    onChange: function (e) {
      setFormdata({ ...formdata, [e.target.name]: e.target.value });
    },
  };
  return [bind, formdata];
};

export default UseForm;
