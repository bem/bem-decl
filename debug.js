const v1 = require('./lib/format/v1');
const JSON5 = require('json5');
const BemCell = require('@bem/cell');

const pretty = obj => JSON5.stringify(obj, null, 2);

const input = [
    BemCell.create({ entity: { block: 'block1' }, tech: null }),
    // BemCell.create({ entity: { block: 'block2' }, tech: null }),
    // BemCell.create({ entity: { block: 'block1', elem: 'elem1' }, tech: null }),
    BemCell.create({ entity: { block: 'block1', elem: 'elem1', modName: 'm1', modVal: 'v1' }, tech: null }),

    BemCell.create({ entity: { block: 'block1', elem: 'elem1', modName: 'm1', modVal: 'v2' }, tech: null }),

    BemCell.create({ entity: { block: 'block1', elem: 'elem1', modName: 'm2', modVal: 'v2' }, tech: null }),
];

console.log('result: ', JSON.stringify(v1(input), null, 4));