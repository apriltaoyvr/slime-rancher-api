import { builder } from '../builder';
import type { Slime, Food, Location, Toy } from '@/lib/data';

export const SlimeRef = builder.objectRef<Slime>('Slime');
export const FoodRef = builder.objectRef<Food>('Food');
export const LocationRef = builder.objectRef<Location>('Location');
export const ToyRef = builder.objectRef<Toy>('Toy');
export const SlimepediaRef = builder.objectRef<{
  about?: string | null;
  slimeology?: string | null;
  risks?: string | null;
  plortonomics?: string | null;
  ranch?: string | null;
}>('Slimepedia');
