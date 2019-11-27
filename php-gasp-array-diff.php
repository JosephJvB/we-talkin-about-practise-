<?php

function basic () {
    $a = [1, 2, 3];
    $b = [2, 4, 5, 6, 6, 7, 89];
    
    // get me all elements in a that are not in b
    $res = array_filter($a, function($i) use($b) {
        $found = in_array($i, $b);
        return !$found;
    });
    
    var_dump($res);
}
// basic();

function nested () {
    $a = [
        ['num' => 1],
        ['num' => 2],
        ['num' => 3],
    ];
    $b = [
        ['num' => 2],
        ['num' => 4],
        ['num' => 5],
        ['num' => 6],
        ['num' => 6],
        ['num' => 7],
    ];
    
    // use array_column to match on a single property of items in an array
    $res = array_filter($a, function($i) use($b) {
        $found = in_array($i['num'], array_column($b, 'num'));
        return !$found;
    });
    
    var_dump($res);
}
nested();