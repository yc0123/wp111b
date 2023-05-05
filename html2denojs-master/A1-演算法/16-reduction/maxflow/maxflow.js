// var fordFulkerson = require('graph-theory-ford-fulkerson');
import fordFulkerson from "https://dev.jspm.io/graph-theory-ford-fulkerson";
var graph = [
	[ 0, 16,  13, 0,  0,  0 ],
    [ 0,  0, 10, 12,  0,  0 ],
    [ 0,  4,  0,  0, 14,  0 ],
    [ 0,  0,  9,  0,  0, 20 ],
    [ 0,  0,  0,  7,  0,  4 ],
    [ 0,  0,  0,  0,  0,  0 ]
];

console.log("The maximum possible flow is " +
	fordFulkerson(graph, 0, 5));