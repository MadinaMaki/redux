import {useDispatch, useSelector} from "react-redux";
import {deleteProduct, selectFilteredProducts} from "../../features/products/productSlice";
import {useState} from "react";
import ProductItem from "../product-item/Product-item";
import DropdownMenu from "../dropdownMenu/DropdownMenu";

function ProductList() {
    const dispatch = useDispatch();

    const products = useSelector(selectFilteredProducts);

    let [selectedProduct, setSelectedProduct] = useState(undefined);

    function changeSelectedProduct(product) {
        setSelectedProduct(function () {
            return product;
        });
    }

    function deleteProductBtn(id) {
        dispatch(deleteProduct(id));
    }

    return (
        <div className="products">
            <table className="table" border="1" cellPadding="5">
                <thead>
                <tr>
                    <th>Product category</th>
                    <th>Product name</th>
                    <th>Price</th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>
                {products.map(function (product, index) {
                    return (
                        <tr key={index} onClick={() => changeSelectedProduct(product)} style={{
                            backgroundColor: selectedProduct === product ? 'yellow' : 'unset'
                        }}>
                            <td>{product.category}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <button onClick={() => deleteProductBtn(product.id)}>Delete product</button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            {selectedProduct !== undefined ? <ProductItem product={selectedProduct}/> :
                <p style={{color: "red", fontWeight: 600}}>Choose the product for update</p>}
        </div>
    );
}

export default ProductList;