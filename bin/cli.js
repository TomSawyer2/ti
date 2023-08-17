#!/usr/bin/env node
require('../dist/index')
  .createProgram()
  .parse(process.argv);
