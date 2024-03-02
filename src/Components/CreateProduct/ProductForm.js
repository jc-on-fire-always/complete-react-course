import React,{ useState } from "react";


function ProductsForm(props){
    let [pName,UpdateName]=useState('')
    let [pPrice,UpdatePrice]=useState('')
    let [pDesc,UpdateDesc]=useState('')
    let [pAvl,UpdateAvail]=useState(false)
    let [pImgUrl,UpdateImageUrl]=useState('')


    function nameInputHandler(event){
        UpdateName(event.target.value);
    }
    function priceInputHandler(event){
        UpdatePrice(event.target.value);
    }
    function descriptionInputHandler(event){
        UpdateDesc(event.target.value);
    }
    function availablityInputHandler(event){
        UpdateAvail(event.target.checked);
    }
    function imageInputHandler(event){
        UpdateImageUrl(event.target.value);
    }

function CreateProductEventHandler(event){
    event.preventDefault();
    let product =
        {
            pName: pName,
            desc: pDesc,
            isAvailable: Boolean(pAvl),
            image: pImgUrl,
            price: Number(pPrice)
        }

        UpdateName('');
        UpdateDesc('');
        UpdatePrice('');
        UpdateAvail(false);
        UpdateImageUrl('');

        props.createProduct(product)
        props.onCancel();
}



return (
    <form className="row g-3" onSubmit={CreateProductEventHandler}>
        <div className="col-md-6">
            <label for="name">Product Name</label>
            <input type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Product Name" 
                    value={pName}
                    onChange={nameInputHandler} />
        </div>
        <div className="col-md-6">
            <label for="price">Product Price</label>
            <input type="number" 
                    min="0.01" step="0.01" 
                    className="form-control" 
                    id="price" 
                    placeholder="Product Price"
                    value={pPrice}
                    onChange={priceInputHandler} />
        </div>

        <div className="form-group">
            <label for="description">Product Description</label>
            <input type="text" 
                    className="form-control" 
                    id="description" 
                    placeholder="Product Description"
                    value={pDesc}
                    onChange={descriptionInputHandler} />
        </div>

        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="isAvailable" checked={pAvl}
            onChange={availablityInputHandler}/>
            <label class="form-check-label" for="isAvailable">Is product available in stock?</label>
        </div>

        <div className="form-group">
            <label for="select-image">Select product image</label>
            <input type="file" className="form-control" id="select-image" value={pImgUrl} onChange={imageInputHandler}/>
        </div>
        

        <button type="submit" className="btn btn-primary">Add Product</button>
        <button type="button" onClick={props.onCancel}>Cancel</button>
    </form>
)
}
export default ProductsForm;