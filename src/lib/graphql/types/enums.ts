import { builder } from '../builder';

export const FoodType = builder.enumType('FoodType', {
  values: [
    'veggie',
    'fruit',
    'meat',
    'water',
    'ash',
    'nectar',
    'all',
    'other',
  ] as const,
  description: 'The type of diet for a slime',
});

export const SlimeType = builder.enumType('SlimeType', {
  values: ['docile', 'harmful', 'hostile', 'special'] as const,
  description: "A slime's disposition type",
});
