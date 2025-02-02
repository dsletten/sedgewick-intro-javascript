/// -*- Mode: JavaScript -*-
//////////////////////////////////////////////////////////////////////////////
//
//   quadratic.js
//
//   Description
//
//   Started:           Tue Jan 21 03:16:30 2025
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

function quadratic(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    let d = Math.sqrt(discriminant);

    return [(-b + d) / (2 * a), (-b - d) / (2 * a)];
}

//  Goldberg -- What Every Computer Scientist Should Know... pg. 162
function goldbergQuadratic(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    let d = Math.sqrt(discriminant);

    if (b >= 0) {
        return [(2 * c) / (-b - d),
                (-b - d) / (2 * a)];
    } else {
        return [(-b + d) / (2 * a),
                (2 * c) / (-b + d)];
    }
}

function findRoots(x, y, z) {
    let a = Number(x);
    let b = Number(y);
    let c = Number(z);

    let roots = quadratic(a, b, c);

    console.log(`Root 1: ${roots[0]}`);
    console.log(`Root 2: ${roots[1]}`);
}
