
import './App.css';
import { DataProvaider } from './DataContext';
import { DataTime } from './components/DateTime/DateTime';
import { SelectBash } from './components/FirstInput/SelectBash';
import { SelectRooms } from './components/Romms/Rooms';
import { FlorsInBash } from './components/SecondInput/FlorsInBash';
import { Comments } from './components/TextArea/Comments';



function App() {
  return (
    <DataProvaider>
      <div className='app'>
      <form>
      <SelectBash />
      <FlorsInBash />
      <SelectRooms />
      <DataTime />
      <Comments />
      <button>Подтвердить</button>
      </form>
    </div>
    </DataProvaider>
  );
}


export default App;
