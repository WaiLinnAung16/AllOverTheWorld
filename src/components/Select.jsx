import React from "react";
import { Select as MantineSelect } from "@mantine/core";

const selectData = [
  { value: "All", label: "All" },
  { value: "Asia", label: "Asia" },
  { value: "America", label: "America" },
  { value: "Africa", label: "Africa" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];
const Select = ({ setRegion }) => {
  return (
    <MantineSelect
      styles={{
        input: {
          padding: "20px",
          border: "none",
          boxShadow: "1px 1px 9px 0px #00000010",
        },
        item: {
          "&[data-selected]": {
            "&, &:hover": {
              backgroundColor: "#007A3D",
              color: "#fff",
            },
          },
        },
      }}
      placeholder="Filter by Region"
      data={selectData}
      onChange={(e) => setRegion(e)}
    />
  );
};

export default Select;
