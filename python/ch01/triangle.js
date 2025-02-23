#!/home/slytobias/n/bin/node
/// -*- Mode: JavaScript -*-
//////////////////////////////////////////////////////////////////////////////
//
//   triangle.js
//
//   Description
//
//   Started:           Tue Feb  4 17:37:21 2025
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
//   Notes: Ex. 1.2.12
//
//
//    https://en.wikipedia.org/wiki/Triangle_inequality
//
//    Explicitly: a + b > c  &  b + c > a  &  a + c > b
//    Equivalently: |a - b| < c < a + b
//    or
//    max(a, b, c) < a + b + c - max(a, b, c) => 2 max(a, b, c) < a + b + c
//    or
//    Area of triangle > 0.
//    
//////////////////////////////////////////////////////////////////////////////
"use strict";

let args = process.argv.slice(2);

function isValid(n) {
    return typeof n !== undefined  &&  !isNaN(n)  &&  n > 0  &&  n % 1 === 0;
}

function convert(s) {
    let m = Number(s);
    
    return isValid(m) ? m : NaN;
}

function isTriangleSedgewick(a, b, c) {
    return !(a >= (b + c) || b >= (a + c) || c >= (a + b));
}

function isTriangle(a, b, c) {
    return a < (b + c) && b < (a + c) && c < (a + b);
}

function isTriangleAbs(a, b, c) {
    return Math.abs(a - b) < c && c < a + b;
}

function isTriangleMax(a, b, c) {
    return 2 * Math.max(a, b, c) < a + b + c;
}

function goldbergHeron(a, b, c) {
    //
    //    Assumes a ≥ b ≥ c
    //
    function heron(a, b, c) {
        let product = (a + (b + c)) * (c - (a - b)) * (c + (a - b)) * (a + (b - c));

        if (product < 0) {
            return 0;
        } else {
            return Math.sqrt(product) / 4;
        }
    }

    return heron(...[a, b, c].sort((a, b) => b - a));
}

function isTriangleArea(a, b, c) {
    return goldbergHeron(a, b, c) > 0;
}
 
if (args.length === 3) {
    let a = Number(args[0]);
    let b = Number(args[1]);
    let c = Number(args[2]);

    if ([a, b, c].every(isValid)) {
        console.log(isTriangleSedgewick(a, b, c) ? "True" : "False");
        console.log(isTriangle(a, b, c) ? "True" : "False");
        console.log(isTriangleAbs(a, b, c) ? "True" : "False");
        console.log(isTriangleMax(a, b, c) ? "True" : "False");
        console.log(isTriangleArea(a, b, c) ? "True" : "False");
    } else {
        console.log("Corrupt");
    }
}
