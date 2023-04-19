import React, {useState} from "react";

export default function ProductListItem({imgno,name,price}) {
  
  // 방법1
  // const {imgNo, name: productname, productPriceFormatted} = props;
  
  /* 방법2
  const {imgNo, name, productPriceFormatted} = props;

  const productName = name;
  */

  /*방법3 
  const imgno = props.imgno;
  const productname = props.name;
  const productPriceFormatted = props.ProductPriceFormatted;
  */
  return (
   <>
      <div className="flex flex-col gap-[10px]"></div>
      <img src= {`https://picsum.photos/id/${imgno}/400/400`} />
      <div className="text-center font-bold">{name}</div>
      <div className="after:content-['원'] text-center">{price}</div>   
   </>
   );
}



