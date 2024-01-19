import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
    <Header />
    <div id='user-input'>
      <div className='input-group'>
      <label>Initial Invesment</label>
      <input type="number"></input>
      </div>

      <div className='input-group'>
      <label>Annual Investment</label>
      <input type="number"></input>
      </div>

      <div className='input-group'>
      <label>Expected Return</label>
      <input type="number"></input>
      </div>

      <div className='input-group'>
      <label>Duration</label>
      <input type="number"></input>
      </div>
    </div>
    </>
  )
}

export default App;
