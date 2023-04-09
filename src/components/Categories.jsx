import React from "react";

import Button from "./Button";

const Categories = () => {
  return (
    <div className="max-w-[700px] pt-10 mx-auto px-3 grid grid-cols-4 md:grid-cols-7 gap-3">
      <Button text="All" item="all"></Button>
      <Button text="Japanese" item="Japanese"></Button>
      <Button text="Turkish" item="Turkish"></Button>
      <Button text="Indian" item="Indian"></Button>
      <Button text="Italian" item="Italian"></Button>
      <Button text="American" item="American"></Button>
      <Button text="French" item="French"></Button>
    </div>
  );
};

export default Categories;
