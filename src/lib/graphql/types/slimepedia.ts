import { SlimepediaRef } from './refs';

export const Slimepedia = SlimepediaRef.implement({
  description: 'A Slimepedia entry',
  fields: (t) => ({
    // General
    about: t.string({
      nullable: true,
      description: 'A general slimepedia entry',
      resolve: (parent) => parent.about ?? null,
    }),
    // Slime
    slimeology: t.string({
      nullable: true,
      description: "A slime's slimeology",
      resolve: (parent) => parent.slimeology ?? null,
    }),
    risks: t.string({
      nullable: true,
      description: "A slime's risks",
      resolve: (parent) => parent.risks ?? null,
    }),
    plortonomics: t.string({
      nullable: true,
      description: "A slime's plortonomics",
      resolve: (parent) => parent.plortonomics ?? null,
    }),
    // Food
    ranch: t.string({
      nullable: true,
      description: "A food's ranch entry",
      resolve: (parent) => parent.ranch ?? null,
    }),
  }),
});
