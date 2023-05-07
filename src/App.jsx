import "./App.css";
import { DataProvaider } from "./DataContext";
import { ClearAllButton } from "./components/ButtonClear/ClearAllButton";
import { SendFormButton } from "./components/ButtonSend/SendFormButton";
import { DataTime } from "./components/DateTime/DateTime";
import { SelectBash } from "./components/FirstInput/SelectBash";
import { MainComponent } from "./components/MainComponent/MainComponent";
import { SelectRooms } from "./components/Rooms/Rooms";
import { FlorsInBash } from "./components/SecondInput/FlorsInBash";
import { Comments } from "./components/TextArea/Comments";

function App() {
  return (
    <DataProvaider>
      <MainComponent>
        <SelectBash />
        <FlorsInBash />
        <SelectRooms />
        <DataTime />
        <Comments />
        <SendFormButton />
        <ClearAllButton />
      </MainComponent>
    </DataProvaider>
  );
}

export default App;
