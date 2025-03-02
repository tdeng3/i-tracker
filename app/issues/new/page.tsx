"use client";
import { Button, TextField, TextFieldInput } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      {/*max-w-xl: it makes the width to extra large*/}
      {/*space-y-3: it gives 3px space Verticaly between each items within this div tag*/}

      <TextField.Root>
        <TextFieldInput placeholder="Title" />
      </TextField.Root>
      <SimpleMDE placeholder="Description" />
      <Button>Submit new issue</Button>
    </div>
  );
};

export default NewIssuePage;
