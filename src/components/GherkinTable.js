import React from "react";

export default function GherkinTable() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Angļu valoda</th>
                    <th>Latviešu valoda</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>feature</th>
                    <th>Funkcionalitāte</th>
                </tr>
                <tr>
                    <th>background</th>
                    <th>Konteksts</th>
                </tr>
                <tr>
                    <th>scenario</th>
                    <th>Scenārijs</th>
                </tr>
                <tr>
                    <th>scenarioOutline</th>
                    <th>Scenārijs pēc parauga</th>
                </tr>
                <tr>
                    <th>examples</th>
                    <th>Piemēri</th>
                </tr>
                <tr>
                    <th>given</th>
                    <th>Kad</th>
                </tr>
                <tr>
                    <th>when</th>
                    <th>Ja</th>
                </tr>
                <tr>
                    <th>then</th>
                    <th>Tad</th>
                </tr>
                <tr>
                    <th>and</th>
                    <th>Un</th>
                </tr>
                <tr>
                    <th>but</th>
                    <th>Bet</th>
                </tr>
                <tr>
                    <th>rule</th>
                    <th>Or</th>
                </tr>
            </tbody>
        </table>
    );
}
