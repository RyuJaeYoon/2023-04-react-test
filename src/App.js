import React, {useState, useEffect} from "react";

let AppCallCount=0;

function App() {
  AppCallCount++;
  console.log(`AppCallCount : ${AppCallCount}`);

  const [no, setNo] =useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(()=> {
    const html = document.getElementsByTagName("html")[0];
    
    if (isDark) {
      html.classList.add('dark');
    }
    else {
      html.classList.remove("dark");
    }
  })
  return ( 
    <>
     <div>
      <button className="btn btn-outline" onClick={() => setNo(no+1)}>App버튼 : {no}</button>
      <button className="btn btn-outline" onClick={() => setIsDark(!isDark)}>테마토글 : {no}</button>
      
      <hr />
     
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi illum nam at eveniet. Tempora ducimus aliquid ipsa repudiandae accusamus quas magni, illum maiores? Assumenda cumque, molestias blanditiis vel placeat doloremque!
      </div>

      <h1 className= "color-pirmary">안녕,반가워</h1>
     </div>
    </>
  );
}
export default App;
