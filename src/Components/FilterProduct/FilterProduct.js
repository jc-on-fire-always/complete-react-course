import './FilterProduct.css'


let FilterProduct = (props) =>{

function onFliterValueChanged(event){
props.filterValueSelected(event.target.value)
}


    return (<div className="filter-area">
        <select name="isAvailable" onChange={onFliterValueChanged}>
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
        </select>
   </div>
   )
}

export default FilterProduct;