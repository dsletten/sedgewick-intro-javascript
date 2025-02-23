#!/home/slytobias/n/bin/node
/// -*- Mode: JavaScript -*-
//////////////////////////////////////////////////////////////////////////////
//
//   compound-interest.js
//
//   Description
//
//   Started:           Mon Feb 17 22:03:35 2025
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
//   Notes:  Ex. 1.2.21
//
//////////////////////////////////////////////////////////////////////////////
"use strict";

let args = process.argv.slice(2);

function isValid(n) {
    return typeof n !== undefined  &&  !isNaN(n)  &&  n > 0;
}

function convert(s) {
    let m = Number(s);
    
    return isValid(m) ? m : NaN;
}

function compound(p, r, t) {
    return p * Math.exp(r * t);
}

if (args.length === 3) {
    let p = convert(args[0]);
    let r = convert(args[1]);
    let t = convert(args[2]);

    if ([p, r, t].every(isValid)) {
        console.log(`Amount: ${compound(p, r / 100.0, t)}`);
    } else {
        console.log("Corrupt");
    }
}
