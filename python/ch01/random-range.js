#!/home/slytobias/n/bin/node
/// -*- Mode: JavaScript -*-
//////////////////////////////////////////////////////////////////////////////
//
//   random-range.js
//
//   Description
//
//   Started:           Sun Feb 16 14:54:52 2025
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

let args = process.argv.slice(2);

function isValid(n) {
    return typeof n !== undefined  &&  !isNaN(n)  &&  n % 1 === 0;
}

function convert(s) {
    let m = Number(s);
    
    return isValid(m) ? m : NaN;
}

function randomRange(a, b) {
    if (a > b) {
        return randomRange(b, a);
    } else {
        return Math.floor(Math.random() * (b - a + 1) + a);
    }
}

if (args.length === 2) {
    let a = convert(args[0]);
    let b = convert(args[1]);

    if ([a, b].every(isValid)) {
        console.log(`Random [${a},${b}]: ${randomRange(a, b)}`);
    } else {
        console.log("Corrupt");
    }
}
