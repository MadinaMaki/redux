import {useState} from "react";
import "../../style/componentsStyle.css"

function DropdownMenu(props) {
    const [expanded, setExpanded] = useState(false);

    const [categories, setCategories] = useState(
        props.items.map(function (item) {
            return {name: item, selected: false}
        })
    );

    function dropMenuBtn() {
        setExpanded(function () {
            return !expanded;
        });
    }

    function chooseProductCategory(index) {
        setCategories(function (prevCategories) {
            let newCategories = [...prevCategories];
            newCategories[index].selected = !newCategories[index].selected;
            return newCategories;
        });
    }

    let dropDownLabel = [];
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].selected === true) {
            dropDownLabel.push(<div key={i} className="selected-category">{categories[i].name}
            </div>)
        }
    }

    if (dropDownLabel.length === 0) {
        dropDownLabel = <div>Choose category</div>
    }

    return (
        <div className="menu">
            <div onClick={() => dropMenuBtn()} className="drop-menu-btn">
                {dropDownLabel}
            </div>
            <div style={{
                display: expanded === false ? "none" : "flex",
                flexDirection: "column"
            }}>
                {categories.map(function (category, index) {
                    return (
                        <div key={index}
                             className="product-category"
                             onClick={() => chooseProductCategory(index)}
                             style={{
                                 backgroundColor: category.selected === true ? "#f1f1f1" : "#e7e7e7",
                                 color: category.selected === true ? "#b7b7b7" : "black"
                             }}>
                            <div>{category.name}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default DropdownMenu;
