import {useState} from "react";
import {useDispatch} from "react-redux";
import {filterProduct} from "../../features/products/productSlice";

function Filter() {
    const dispatch = useDispatch();

    const [priceForm, setPriceForm] = useState({
            minPrice: '',
            maxPrice: ''
        }
    )

    function addMinPrice(event) {
        setPriceForm(function (state){
            return { ...state, minPrice: event.target.value }
        })
    }

    function addMaxPrice(event) {
        setPriceForm(function (state){
            return { ...state, maxPrice: event.target.value }
        })
    }

    function filter(){
        dispatch(filterProduct({ minPrice: priceForm.minPrice, maxPrice: priceForm.maxPrice }))
    }

    return (
        <div className="filter">
            <form>
                <input type="text" value={priceForm.minPrice} onChange={addMinPrice}/>
                <input type="text" value={priceForm.maxPrice} onChange={addMaxPrice}/>
            </form>
            <button onClick={filter}>Filter</button>
        </div>
    )
}

export default Filter;