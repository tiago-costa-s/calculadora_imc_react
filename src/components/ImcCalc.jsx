
import { useState } from "react";

import './ImcCalc.css';
import Button from './Button';

const ImcCalc = () => {

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const clearForm = (e) => {
        e.preventDefault();

        setHeight("");
        setWeight("");
    };

    return (
        <div id="calc-container">
            <h2>Calculadora de IMC</h2>
            <form id="imc-form">
                <div className="form-inputs">
                    <div className="form-control">
                        <label htmlFor="">
                            <span>Altura:</span>
                            <input
                                type="text"
                                name="height"
                                id="height"
                                placeholder="Exemplo: 1,70"
                                onChange={(e) => setHeight(e.target.value)}
                                value={height}
                            />
                        </label>
                    </div>

                    <div className="form-control">
                        <label htmlFor="">
                            <span>Peso:</span>
                            <input
                                type="text"
                                name="weight"
                                id="weight"
                                placeholder="Peso: 80,3"
                                onChange={(e) => setWeight(e.target.value)}
                                value={weight}
                            />
                        </label>
                    </div>
                </div>
                <div className="action-control">
                    <Button id="calc-btn" text="Calcular" />
                    <Button id="clear-btn" text="Limpar" action={clearForm}/>
                </div>
            </form>
        </div>
    );
}

export default ImcCalc;