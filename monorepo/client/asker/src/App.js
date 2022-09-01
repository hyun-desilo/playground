import multiply from 'common/utils/multiply';
import dayjs from 'dayjs';
// import Header from 'common/components'; // TODO

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <div>FE1</div>
      <div>4 x 5 = {multiply(3, 5)}</div>
      <div>{dayjs().toISOString()}</div>
    </div>
  );
}

export default App;
