import { useState } from "react";
import { initialFormData, requiredFields } from "../constants/formInitialState";

export function useReportForm() {
  const [data, setData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const change = ({ target: { name, value } }) => {
    setData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const toggle = (field, item) => {
    setData((current) => ({
      ...current,
      [field]: current[field] === item ? "" : item,
    }));
  };

  const validate = () => {
    const nextErrors = {};

    Object.entries(requiredFields).forEach(([key, message]) => {
      // Outcome is only required when the customer is a Sales Rep.
      if (key === "reactionOutcome" && data.typeofcustomer !== "Sales Rep") return;
      if (!String(data[key] ?? "").trim()) nextErrors[key] = message;
    });

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const reset = () => {
    setData(initialFormData);
    setErrors({});
  };

  return { data, errors, change, toggle, validate, reset };
}
