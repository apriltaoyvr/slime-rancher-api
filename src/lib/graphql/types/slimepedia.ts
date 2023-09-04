import { objectType } from "nexus";

export const Slimepedia = objectType({
  name: 'Slimepedia',
  description: "A Slimepedia entry",
  definition(t) {
    t.string('slimeology');
    t.string('risks');
    t.string('plortonomics');
  },
});
