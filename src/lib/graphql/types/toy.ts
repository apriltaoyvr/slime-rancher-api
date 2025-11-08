import { slimes } from '@/lib/data';
import { ToyRef, SlimeRef } from './refs';

export const Toy = ToyRef.implement({
  description: 'Slime toy',
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    image: t.exposeString('image'),
    favouredBy: t.field({
      type: SlimeRef,
      nullable: true,
      description: 'The slime whose favourite toy it is',
      resolve: (toy) => slimes.find((slime) => slime.favouriteToy === toy.id),
    }),
    description: t.exposeString('description', {
      description: 'A description of a toy',
    }),
    price: t.exposeInt('price', { description: 'The cost of a toy' }),
  }),
});
