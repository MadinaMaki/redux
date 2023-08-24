import {getProducts} from "../../features/products/productsAPI";
import {useState} from "react";

function ProductList2() {
    const [state, setState] = useState({
        loaded: false,
        items: [],
    })

    if (!state.loaded) {
        getProducts().then(function (value) {
            setState(function () {
                return {
                    loaded: true,
                    items: value,
                }
            });
        });
    }

    getProducts().then(function (value) {
        console.log(value);
    });

    return (
        <div className="product-list">
            {state.loaded ? <p style={{color: "red"}}>Товары загружены</p> : 'Товары загружаются...'}
            {state.items.map(function (item, index){
                return(
                    <div key={index}>{item.name}</div>
                )
            })}
        </div>
    );
}

export default ProductList2;
