import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { supabase } from "../../api/supabase.client";
import { useState } from "react";
import process from "process";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const insert = async () => {
    const { error } = await supabase
      .from("entry")
      .insert({ title: "hello", content: "test content" });

    console.log(error);
  };

  return (
    <div className="flex flex-col gap-4 w-[50%]">
      <Input
        value={inputValue}
        onChange={(e) => setInputValue((e.target as HTMLInputElement).value)}
        type="text"
        label="Topic"
        placeholder="Enter topic to generate text"
      />
      <Button color="success" fullWidth onClick={insert}>
        Generate
      </Button>
    </div>
  );
};

export default Form;
