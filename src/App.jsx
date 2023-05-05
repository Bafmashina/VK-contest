
import './App.css';
import { SelectBash } from './components/FirstInput/SelectBash';
import { SelectRooms } from './components/Romms/Rooms';
import { FlorsInBash } from './components/SecondInput/FlorsInBash';
import { Comments } from './components/TextArea/Comments';



function App() {
  return (
    <div className='app'>
      <form>
      <SelectBash />
      <FlorsInBash />
      <SelectRooms />
      <Comments />
      <button>Подтвердить</button>
      </form>
    </div>
  );
}


export default App;
