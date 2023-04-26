import React, {useState} from "react";
import classnames from 'https://cdn.skypack.dev/classnames';

function NotifyOnce({children}){
  const [visible, setVisible] = useState(false);
  const [workDone,setWorkDone] = useState(false);

  if( workDone === false) {
    setTimeout(function () {
      setVisible(true);
    }, 1000);

    setTimeout(function () {
      setVisible(false);
    }, 3000);

    setWorkDone(true);
  }

  setTimeout(function (){
    console.log("실행됨");
  },1000);
  return(

    <div
      className={classnames(
      "fixed transition-all right-[10px]",
      {
        "top-[-60px]": !visible
      },
      {
        "top-[10px]": visible
      }
    )}>
      {children}
    </div>
  )
}

function Alert({ color: color_, children}){
  const color = color_ ?? "white";
  return (
    <div className="alert alert-info shadow-lg">
      <div className={`text-${color}`}>
      <span>
        <i className="fa-solid fa-circle-info"></i>
      </span>
      <span>{children}</span>
      </div>
    </div>
  );
}

function App() {
  return ( 
    <>
    <NotifyOnce>
      <Alert>안녕하세요</Alert>
    </NotifyOnce>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis impedit voluptates alias odit quae quam accusamus voluptate
         in assumenda quis perferendis minus maiores, rerum nisi cupiditate quisquam enim. Aliquam, voluptates.
      </div>
      
    </>
  );
}
export default App;
