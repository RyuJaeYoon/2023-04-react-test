import React,{useState, useCallback, useMemo} from "react";



function OrderMainFood({mainFoodCount, setMainFoodCount}) {
  return(
    <>
    <h2>메인 (수량 : {mainFoodCount})</h2>
      <div>
        <button onClick={(()=> setMainFoodCount(mainFoodCount + 1))}>증가</button>
        <button onClick={(()=> setMainFoodCount(mainFoodCount==1 ? 1 :mainFoodCount - 1))}>감소</button>
      </div>
    </>
  );
}

const MemoizedOrderMainFood = React.memo(OrderMainFood);

function OrderOptions({
  selectedCount,
  options,
  toggleAllChecked,
  btnAllCheced,
  optionCheckeds,
  toggleOptionCheck
}){
  return(
    <>
      <h2>옵션({selectedCount}/{options.length})</h2>


      <span style={{paddingLeft: 40,userSelect:"none", cursor:"pointer"}} onClick={toggleAllChecked}>{btnAllCheced ? "[v]":"[]"} 전체선택</span>

      <ul>
        {options.map((option, index)=> (
          <li style={{userSelect:"none", cursor:"pointer"}} kye={option} onClick={()=> toggleOptionCheck(index)}>
        {optionCheckeds[index] ? "[v]" : "[]"}
        {option}
      </li>
  ))};
</ul>
    </>);
}

const MemoizedOrderOptions = React.memo(OrderOptions);

export default function Order() {
  const [mainFoodCount, setMainFoodCount] = useState(1);

  const options =[
    "사이다 1.5",
    "랜치소스",
    "머스타드 소스",
    "마라 소스",
    "스윗 칠리 소스",
    "레몬에이드",
  ];
  
  //[false,false,false,false,false]
  //[,,,,,,].fill(false)
  //new Array(6).fill(false)
  //new Array(option.length).fill(false)


  const [optionCheckeds,setOptionCheckeds] = useState(new Array(options.length).fill(false));

  const toggleOptionCheck = useCallback((index) => {
    const nexOptionCheckeds = optionCheckeds.map((el, _index)=>_index==index ? !el : el );
    setOptionCheckeds(nexOptionCheckeds);
  },[optionCheckeds]);
  
  const btnAllCheced = useMemo(()=> optionCheckeds.every((el)=> el),[optionCheckeds]);
  const selectedCount = useMemo(()=> optionCheckeds.filter((el)=> el).length,[optionCheckeds]);

  const toggleAllChecked = useCallback(() => {
    if (btnAllCheced) {
      //전부 체크를 해제 해야함.
      const newOptionCheckeds = optionCheckeds.map((el)=> false);
      setOptionCheckeds(newOptionCheckeds);
    }
    else {
      //전부 체크를 해야함.
      const newOptionCheckeds = optionCheckeds.map((el)=> true);
      setOptionCheckeds(newOptionCheckeds);
    }
  },[optionCheckeds]);

  return <>
    <h1>음식주문</h1>

    <MemoizedOrderMainFood 
      setMainFoodCount={setMainFoodCount}
      mainFoodCount={mainFoodCount}
     />

     <MemoizedOrderOptions
     selectedCount={selectedCount}
     options={options}
     toggleAllChecked={toggleAllChecked}
     optionCheckeds={optionCheckeds}
     btnAllCheced={btnAllCheced}
     toggleOptionCheck={toggleOptionCheck}
     />

     <MemoizedOrderOptions
     selectedCount={selectedCount}
     options={options}
     toggleAllChecked={toggleAllChecked}
     optionCheckeds={optionCheckeds}
     btnAllCheced={btnAllCheced}
     toggleOptionCheck={toggleOptionCheck}
     />

    
  </>;
}



