import MediaButtons from "MediaButtons/MediaButtons";
import LoginForm from "LoginForm/LoginForm";
import Pager from "Pager/Pager";
import RadioButtons from "RadioButtons/RadioButtons";
import "./App.css";

const App = () => {

  const handleSelectionChange = (selected) => {
    console.log("Selected option:", selected);
  };

  return (
    <div>
      <div className="App-component">
        <header className="App-header">
          Media Buttons Component (Example)
        </header>
        <div className="App-content">
          <MediaButtons />
        </div>
      </div>

      <div className="App-component">
        <header className="App-header">Login form component (TODO)</header>
        <div className="App-content">
          <LoginForm />
        </div>
      </div>

      <div className="App-component">
        <header className="App-header">Pager component (TODO)</header>
        <div className="App-content">
          <Pager />
        </div>
      </div>

      <div className="App-component">
        <header className="App-header">Radio Buttons component (TODO)</header>
        <div className="App-content">
          <RadioButtons
            options={[
              { value: 'apple', label: 'Apple' },
              { value: 'pear', label: 'Pear' },
              { value: 'orange', label: 'Orange' }
            ]}
          defaultSelected="apple"
          onChange={handleSelectionChange}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
