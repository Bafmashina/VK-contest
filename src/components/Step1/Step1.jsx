import { useForm } from "react-hook-form";

import { TimeValue } from "../Inputs/TimeValue";
import { MainContainer } from "./MainContainer";
import { Form } from "./From";
import { SelectBash } from "../Inputs/SelectBash";
import { FlorsInBash } from "../Inputs/FlorsInBash";
import { SelectRooms } from "../Inputs/Rooms";
import { DataTime } from "../Inputs/DateTime";
import { Comments } from "../Inputs/Comments";
import { SendFormButton } from "../Buttons/SendFormButton";
import { ClearAllButton } from "../Buttons/ClearAllButton";

export const Step1 = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(JSON.stringify(data));

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <SelectBash {...register("bash")} />
        <FlorsInBash {...register("flor")} />
        <SelectRooms {...register("room")} />
        <DataTime {...register("data")} />
        <TimeValue {...register("time")} />
        <Comments {...register("comments")} />
        <SendFormButton />
        <ClearAllButton />
      </Form>
    </MainContainer>
  );
};
