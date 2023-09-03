import { makeSchema } from 'nexus';
import * as types from './types';

const schema = makeSchema({
  types,
});

export default schema;
