/// -*- Mode: JavaScript -*-
//////////////////////////////////////////////////////////////////////////////
//
//   quadratic-sedgewick.js
//
//   Description
//
//   Started:           Tue Jan 21 03:16:25 2025
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

function quadratic(b, c) {
    let discriminant = b * b - 4 * c;
    let d = Math.sqrt(discriminant);

    return [(-b + d) / 2, (-b - d) / 2];
}

function findRoots(x, y) {
    let b = Number(x);
    let c = Number(y);

    let roots = quadratic(b, c);

    console.log(`Root 1: ${roots[0]}`);
    console.log(`Root 2: ${roots[1]}`);
}
