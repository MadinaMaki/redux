import React from 'react';
import './App.css';
import CreateProductForm from "./components/component-product-list/CreateProductForm";
import ProductList from "./components/create-product-form/ProductList";
import Filter from "./components/product-filter/Filter";
import List from "./components/list/List";
import HookPractice from "./components/reactHooks/HookPractice";
import ProductList2 from "./components/create-product-form/ProductList2";
import DropdownMenu from "./components/dropdownMenu/DropdownMenu";
import DropSearch from "./components/dropSearch/DropSearch";

function App() {
    const [visibleList, setVisibleList] = React.useState(true);

    function toggleVisibleList() {
        setVisibleList(visible => !visible);
    }

    return (
        <div className="App">
            <CreateProductForm/>
            <ProductList/>
            <Filter/>
            <DropdownMenu items={[
                'CPU', 'Phones', 'Audio', 'Games'
            ]}/>
            <DropSearch items={[
                'USA', 'Canada', 'Japan', 'Korea'
            ]}/>
            <ProductList2/>
            {/*{visibleList && <List/>}*/}
            {/*<button onClick={toggleVisibleList}>Показать / скрыть</button>*/}
            {/*<HookPractice/>*/}
        </div>
    );
}

export default App;