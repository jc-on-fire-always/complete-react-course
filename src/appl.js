import React, { useState } from 'react';
import './appl.css'
import ProductsList from './Components/ProductsList/ProductsList';
import CreateProduct from './Components/CreateProduct/CreateProduct';
import FilterProduct from './Components/FilterProduct/FilterProduct';


const products = [
    {
        pID: 1,
        pName: 'Fresh Milk',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: 'images/fresh-milk.png',
        price: 12,
        stock:20
    },
    {
        pID: 2,
        pName: 'Cottage Cheese',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: false,
        image: "images/cottage-cheese.png",
        price: 10,
        stock:27
    },
    {
        pID: 3,
        pName: 'Brocoli',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: "images/brocoli.png",
        price: 15,
        stock:12
    },
    {
        pID: 4,
        pName: 'oranges',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: "images/oranges.png",
        price: 20,
        stock:8
    },
    {
        pID: 5,
        pName: 'Olive oil',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: false,
        image: "images/olive-oil.png",
        price: 14,
        stock:6
    }
]

const findStockCount = function (id){
    const product = products.find(obj => id === obj.pID);
    return product?.stock ?? 0;
}


function App() {

    let [newProductList, updatetProductList] = useState(products);
    let [filterTextValue, updatetFilterTextValue] = useState('all');

    let FilteredProductList = newProductList.filter((product)=>{
        if(filterTextValue === 'available'){
            return product.isAvailable === true;
        }
        else if(filterTextValue === 'unavailable'){
            return product.isAvailable === false;
        }
  else{
    return product;
  }
    });

    function createProduct(product) {
        product.pID = newProductList.length + 1;
        updatetProductList([product, ...newProductList]);
    }

    function onfliterValueSelected(filterValue){
        updatetFilterTextValue(filterValue);
    }

    return (
        <div className='row'>
            <div className='col-lg-8 mx-auto'>
                <CreateProduct createProduct={createProduct}></CreateProduct>
                <FilterProduct filterValueSelected={onfliterValueSelected}></FilterProduct>
                <ProductsList newProductList={FilteredProductList}></ProductsList>
            </div>
        </div>
    )
}
export { findStockCount, App };

