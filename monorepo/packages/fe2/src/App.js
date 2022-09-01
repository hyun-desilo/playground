import multiply from 'common/utils/multiply';
import Header from 'common/components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div>FE2</div>
      <div>3 x 4 = {multiply(3, 4)}</div>
    </div>
  );
}

export default App;
