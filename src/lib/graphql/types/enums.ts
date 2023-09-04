import { enumType } from "nexus";

export const DietEnum = enumType({
  name: 'Diet',
  members: ['veggie', 'fruit', 'meat', 'water', 'ash', 'all', 'other'],
  description: 'The type of diet for a slime',
});

export const SlimeType = enumType({
  name: 'SlimeDisposition',
  description: "A slime's disposition type",
  members: ['docile', 'harmful', 'special', 'hostile'],
});
