import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "../App";

describe('Inicio de la App', () => {
  
  test("inicio de las pruebas", () => {
    render(<App />);
    const tituloApp = screen.getByTestId("titulo-app");
    expect(tituloApp).toBeInTheDocument();
    expect(tituloApp.textContent).toBe('Quote your cryptocurrencies instantly');
  });
});

