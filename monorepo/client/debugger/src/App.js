import multiply from 'common/utils/multiply';
import q from 'q';
import { useEffect } from 'react';
// import Header from 'common/components/Header'; TODO

function App() {
  useEffect(() => {
    q();
  });

  return (
    <div className="App">
      {/* <Header /> */}
      <div>FE2</div>
      <div>3 x 4 = {multiply(3, 4)}</div>
    </div>
  );
}

export default App;
