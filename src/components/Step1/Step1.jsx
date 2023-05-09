import { MainContainer } from "../MainContainer/MainContainer";
import { Form } from "../Form/From";
import { SelectBash } from "../FirstInput/SelectBash";
import { FlorsInBash } from "../SecondInput/FlorsInBash";
import { SelectRooms } from "../Rooms/Rooms";
import { DataTime } from "../DataValue/DateTime";
import { Comments } from "../TextArea/Comments";
import { SendFormButton } from "../ButtonSend/SendFormButton";
import { ClearAllButton } from "../ButtonClear/ClearAllButton";
import { useForm } from "react-hook-form";
import { TimeValue } from "../TimeValue/TimeValue";


export const Step1 = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);


  return (
      <MainContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <SelectBash {...register("bash")}/>
        <FlorsInBash {...register("flor")}/>
        <SelectRooms {...register("room")}/>
        <DataTime {...register("data")}/>
        <TimeValue {...register("time")}/>
        <Comments {...register("comments")}/>
        <SendFormButton />
        <ClearAllButton/>
      </Form>
      </MainContainer>
  );
};
