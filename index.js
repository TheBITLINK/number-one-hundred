/**
 * Number One Hundred
 * Version 1.0.0
 */
'use strict';

// Fastest implementation
function getNumberOneHundred()
{
    var number = 0;
    for (var i = 0; i < 5; i++)
    {
        number += ['.','.','.','.','.','.','.','.','.','.',''].join('.').length;
    }
    return number;
}

module.exports = getNumberOneHundred();