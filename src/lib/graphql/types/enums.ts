import { enumType } from 'nexus';

export const FoodType = enumType({
  name: 'FoodType',
  members: ['veggie', 'fruit', 'meat', 'water', 'ash', 'all', 'other'],
  description: 'The type of diet for a slime',
});

export const SlimeType = enumType({
  name: 'SlimeType',
  description: "A slime's disposition type",
  members: ['docile', 'harmful', 'hostile', 'special'],
});
