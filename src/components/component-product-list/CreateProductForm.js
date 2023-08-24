import {useState} from "react";
import {useDispatch} from "react-redux";
import {addProduct} from "../../features/products/productSlice";
import "../../style/componentsStyle.css"

function CreateProductForm() {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        id: 0,
        category: '',
        name: '',
        price: ''
    });

    function addProductCategory(event) {
        setFormData(function (state){
            return { ...state, category: event.target.value }
        })
    }

    function addProductName(event) {
        setFormData(function (state){
            return { ...state, name: event.target.value }
        })
    }

    function addProductPrice(event) {
        setFormData(function (state){
            return { ...state, price: event.target.value }
        })
    }

    function formSubmitHandler() {
        if (formData.category.trim() === '' && formData.name.trim() === '' && formData.price.trim() === '') {
            setFormData(function (state){
                return { ...state, category: '', name: '', price: '' }
            })
        }
        else {
            setFormData(function (state){
                return { ...state, category: '', name: '', price: '' }
            })
            dispatch(addProduct({ category: formData.category, name: formData.name, price: formData.price }))
        }
    }

    return (
        <div className="product-list">
            <form>
                <input type="text" value={formData.category} onChange={addProductCategory} placeholder="Input product category"/>
                <input type="text" value={formData.name} onChange={addProductName} placeholder="Input product name"/>
                <input type="text" value={formData.price} onChange={addProductPrice} placeholder="Input product price" />
            </form>
            <button className="product-button" type="submit" onClick={formSubmitHandler}>Add product</button>
        </div>
    )
}

export default CreateProductForm;