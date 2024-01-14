import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Form from "../components/Form";
import '@testing-library/jest-dom';
import { coins } from "../__mocks__/coins";

describe('Probando el hook de seleccion de monedas', () => {
    test('<useSelectCurrency />', () => {
        render(<Form/>)

        const labelSelectMoneda = screen.getAllByTestId('label-select')[0];
        const labelSelectCripto = screen.getAllByTestId('label-select')[1];
        const selectMonedas = screen.getAllByTestId('select')[0];
        // const selectCriptos = screen.getAllByTestId('select')[1];

        // comprando que los label esten en el documentos y tengan el texto adecuado
        expect(labelSelectMoneda).toBeInTheDocument();
        expect(labelSelectMoneda.textContent).toBe('Select your Currency')
        expect(labelSelectCripto).toBeInTheDocument();
        expect(labelSelectCripto.textContent).toBe('Select your Crypto')

        // comprobando que el select de las monedas tenga 5 opciones usando un mock con data de las monedas
        expect(selectMonedas.children.length).toEqual(coins.length + 1);


        
        

        // console.log(selectMonedas.textContent);

        // expect(labelSelect).toBeInTheDocument();

        
    });
});

