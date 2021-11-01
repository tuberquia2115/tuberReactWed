import Toggle from './components/Toggle';


const App = () => {
  return (
    <div className="App">
      {/* <Home /> */}
      <Toggle onToggle={(on) => console.log(on)}>
        <Toggle.On>
          <p>The button is on</p>
        </Toggle.On>
        <Toggle.Off>
          <p>The button is off</p>
        </Toggle.Off>
        <Toggle.Button color="primary"/>
      </Toggle>
    </div>
  );
};

export default App;
