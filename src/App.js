import React, {useState} from "react";

function App() {
    const onBtnIncreaseClicked = ()  => {
    setNum(num + 1);
  };

  const [num, setNum] = useState(0);

  

  return (
  <>
    Num : {0}, <button onClick={onBtnIncreaseClicked}>증가</button>
  </>)
}

export default App;

