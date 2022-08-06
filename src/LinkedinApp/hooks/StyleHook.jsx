import '../style/App.css';

export const StyleHook = ({children}) => {
  return (
    <div className="App">
        <header className="App-header">
          {children}
        </header>
      </div>
  )
}


