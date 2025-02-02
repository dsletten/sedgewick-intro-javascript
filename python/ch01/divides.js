/// -*- Mode: JavaScript -*-
//////////////////////////////////////////////////////////////////////////////
//
//   divides.js
//
//   Description
//
//   Started:           Sun Feb  2 15:29:50 2025
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

function divides(a, b) {
    function isValid(n) {
        return typeof n !== undefined  &&  !isNaN(n)  &&  n > 0  &&  n % 1 === 0;
    }

    function convert(s) {
        let m = Number(s);

        if (isValid(m)) {
            return Math.floor(m);
        } else {
            return NaN;
        }
    }
    
    let m = convert(a);
    let n = convert(b);

    if (isNaN(m) || isNaN(n)) {
        console.log("Corrupt");
    } else {
        console.log((m % n === 0  ||  n % m === 0) ? "True" : "False");
    }
}
