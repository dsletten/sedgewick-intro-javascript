/// -*- Mode: JavaScript -*-
//////////////////////////////////////////////////////////////////////////////
//
//   intops.js
//
//   Description
//
//   Started:           Thu Jan 16 21:25:50 2025
//   Modifications:
//
//   Purpose:
//
//   Calling Sequence:
//
//
//   Inputs:
//
//
//   Outputs:
//
//
//   Example:
//
//   Notes:
//
//////////////////////////////////////////////////////////////////////////////
"use strict";

function intops(a, b) {
    let x = Math.floor(Number(a));
    let y = Math.floor(Number(b));

    let sum = x + y;
    let difference = x - y;
    let product = x * y;
    let quotient = Math.floor(x / y);
    let remainder = x % y;
    let power = x ** y;
//    let power = Math.pow(x, y);

    console.log(`${x} + ${y} = ${sum}`);
    console.log(`${x} - ${y} = ${difference}`);
    console.log(`${x} * ${y} = ${product}`);
    console.log(`${x} / ${y} = ${quotient}`);
    console.log(`${x} % ${y} = ${remainder}`);
    console.log(`${x} ** ${y} = ${power}`);
}
