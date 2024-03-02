import { useState } from "react";
import ProductsForm from "./ProductForm";

function CreateProduct(props){
    let[showForm,updateShowForm] = useState(false)
    function OnCreateProduct(product){
        // console.log(product);
        props.createProduct(product)
    }

    function onCreateNewProduct(){
        updateShowForm(true);
    }

    function onProductSubmittedOrCancelled(){
        updateShowForm(false);
    }

return (
    
        <div  style={{backgroundColor: 'white',padding:'10px 20px',borderRadius:2}}>
            { !showForm && <button onClick={onCreateNewProduct}>Create Product</button>}
            { showForm && <ProductsForm createProduct={OnCreateProduct} onCancel={onProductSubmittedOrCancelled}></ProductsForm>}
        </div>
)
}

export default CreateProduct;