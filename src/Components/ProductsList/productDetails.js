import React,{useState} from 'react';
import Button from "./button";
import { findStockCount } from "../../appl";



function ProductDetails(props){
    let badgeClass = 'badge-margin-left-240 badge';
badgeClass += props.isAvailable ? ' bg-success' : ' bg-danger';

let  [productCount,updateCount] = useState(0)

function displayProductCount(){
    return productCount > 0 ? productCount : '0';
}

let incrementProductCount = function(){
    updateCount(++productCount)
}

let decrementProductCount = function(){
    updateCount(--productCount)
}

let stockCount  = findStockCount(props.pID);
let isDisabled = productCount >= stockCount && stockCount !== 0;
return (
    <div className="d-flex align-items-center justify-content-start mt-1">
                        <h6 className="font-weight-bold my-2" style ={{'marginRight':30}}>${props.price}</h6>
        {props.isAvailable && (<div>
                        <Button eventHandler={decrementProductCount} disable={productCount === 0}>-</Button>
                        <span style ={{padding: '8px 14px'}}>{displayProductCount()}</span>
                        <Button eventHandler={incrementProductCount} disable={isDisabled}>+</Button>
                    </div>
        )}
                        <span className={badgeClass}>{props.isAvailable ? 'Available' : 'Unavailable'}</span>
</div>
)
}
export default ProductDetails;