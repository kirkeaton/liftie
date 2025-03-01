const select = require('../../select');

module.exports = {
  selector: '.trail-conditions table tr:not(:first-child)',
  parse: {
    name: 0,
    status: 2
  }
};
