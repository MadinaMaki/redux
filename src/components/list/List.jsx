import React from "react";

const List = () => {

    const [numbers, setNumbers] = React.useState([1, 223, 344]);
    const [count, setCount] = React.useState(0);

    const addNumber = () => {
        const randNumber = Math.round(Math.random() * 10);
        const newArr = [...numbers, randNumber];
        setNumbers(newArr);
    };

    React.useEffect(function (){
        console.log('Компонент был обновлен!')
        return function (){
            console.log('will unmount')
        }
    }, []);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={function (){setCount(count + 1)}}>+</button>
            <ul>
                {numbers.map(function (num, index) {
                    return (
                        <li key={index}>{num}</li>
                    );
                })}
            </ul>
            <button onClick={addNumber}>Add number</button>
        </div>
    );
}

export default List;