import React, { useState } from 'react';

function Hoc(Original) {
    function Update() {
        const [money, setMoney] = useState(10);
        const [money2, setMoney2] = useState(money * 2);
        function increment() {
            setMoney(money * 2);
        }

        function incrementNew() {
            setMoney2(money2 * 2);
        }
        return <Original money={money} money2={money2} handleIncrease={increment} handleIncreaseNew={incrementNew} />;
    }
    return Update;
}

export default Hoc;
