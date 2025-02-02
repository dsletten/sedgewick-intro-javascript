/// -*- Mode: JavaScript -*-
//////////////////////////////////////////////////////////////////////////////
//
//   floatops.js
//
//   Description
//
//   Started:           Sun Jan 19 04:57:24 2025
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

function floatops(a, b) {
    let x = Number(a);
    let y = Number(b);

    let sum = x + y;
    let difference = x - y;
    let product = x * y;
    let quotient = x / y;
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
