"use client";
import { Button, TextField, TextFieldInput } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data);
        router.push("/issues");
      })}
    >
      {/*max-w-xl: it makes the width to extra large*/}
      {/*space-y-3: it gives 3px space Verticaly between each items within this form tag*/}

      <TextField.Root>
        <TextFieldInput placeholder="Title" {...register("title")} />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />

      {/*SimpleMDE https://www.npmjs.com/package/react-simplemde-editor#install*/}
      <Button>Submit new issue</Button>
    </form>
  );
};

export default NewIssuePage;
