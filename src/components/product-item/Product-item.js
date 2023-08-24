import {useState, useEffect} from "react";
import {logDOM} from "@testing-library/react";
import {useDispatch} from "react-redux";
import {changeProduct, selectProducts} from "../../features/products/productSlice";
import "../../style/componentsStyle.css"

function ProductItem(props) {
    const dispatch = useDispatch();

    const [productItem, setProductItem] = useState(props.product);

    useEffect(function () {
        setProductItem(function () {
            return props.product;
        });
    }, [props.product]);

    function addNewProductCategory(event) {
        setProductItem(function (prevProduct) {
            return {...prevProduct, category: event.target.value};
        })
    }

    function addNewProductName(event) {
        setProductItem(function (prevProduct) {
            return {...prevProduct, name: event.target.value};
        })
    }

    function addNewProductPrice(event) {
        setProductItem(function (prevProduct) {
            return {...prevProduct, price: event.target.value};
        })
    }

    function changeProductName() {
        dispatch(changeProduct(productItem));
    }

    return (
        <div className="product-update">
            <form>
                <input type="text" value={productItem.category} placeholder="category"
                       onChange={addNewProductCategory}/>
                <input type="text" value={productItem.name} placeholder="name" onChange={addNewProductName}/>
                <input type="text" value={productItem.price} placeholder="price" onChange={addNewProductPrice}/>
            </form>
            <button type="submit" onClick={changeProductName}>Change Product</button>
        </div>
    )
}

export default ProductItem;