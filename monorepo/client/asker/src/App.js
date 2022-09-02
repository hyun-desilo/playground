import multiply from 'common/utils/multiply';
import axios from 'axios';
import { useEffect } from 'react';
// import Header from 'common/components'; // TODO

function App() {
  useEffect(() => {
    axios.get('error');
  }, []);

  return (
    <div className="App">
      {/* <Header /> */}
      <div>FE1</div>
      <div>4 x 5 = {multiply(3, 5)}</div>
    </div>
  );
}

export default App;
