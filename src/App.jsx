import './App.css';
import MailNav from "./components/MailNav";
import Messages from './components/Messages';
import SelectedMsg from './components/SelectedMsg';


function App() {
  return (
    <div className='App'>

      <div className='mailNav'>
      <MailNav />
      </div>

      <div className='messages'>
        <Messages/>
      </div>

      <div className='selectedMsg'>
        <SelectedMsg/>
      </div>

    </div>
  );
}

export default App;
