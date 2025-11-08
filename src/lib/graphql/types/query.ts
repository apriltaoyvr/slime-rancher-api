import { builder } from '../builder';
import { foods, locations, slimes, toys } from '@/lib/data';
import { SlimeRef, LocationRef, FoodRef, ToyRef } from './refs';

builder.queryType({
  fields: (t) => ({
    slimes: t.field({
      type: [SlimeRef],
      nullable: true,
      description: 'A list of all slimes',
      args: {
        slimeId: t.arg.string({ required: false }),
        locationId: t.arg.string({ required: false }),
      },
      resolve: (_, { slimeId, locationId }) => {
        let results = slimes;

        if (slimeId) results = results.filter((slime) => slime.id === slimeId);
        if (locationId)
          results = results.filter((slime) =>
            slime.locations.includes(locationId),
          );

        return results;
      },
    }),

    locations: t.field({
      type: [LocationRef],
      nullable: true,
      description: 'A list of all locations in the Far, Far Range',
      args: {
        locationId: t.arg.string({ required: false }),
        slimeId: t.arg.string({ required: false }),
      },
      resolve: (_, { locationId, slimeId }) => {
        let results = locations;
        if (locationId)
          results = results.filter((location) => location.id === locationId);
        if (slimeId)
          results = results.filter((location) =>
            slimes.filter((slime) => slime.locations.includes(location.id)),
          );
        return results;
      },
    }),

    foods: t.field({
      type: [FoodRef],
      nullable: true,
      description: 'A list of all foods',
      args: {
        foodId: t.arg.string({ required: false }),
        slimeId: t.arg.string({ required: false }),
        locationId: t.arg.string({ required: false }),
      },
      resolve: (_, { foodId, slimeId, locationId }) => {
        let results = foods;

        if (foodId) results = results.filter((food) => food.id === foodId);
        if (slimeId)
          results = results.filter((food) => food.slimeId === slimeId);
        if (locationId)
          results = results.filter((food) =>
            food.locations.includes(locationId),
          );

        return results;
      },
    }),

    toys: t.field({
      type: [ToyRef],
      nullable: true,
      description: 'A list of all slime toys',
      args: {
        toyId: t.arg.string({ required: false }),
        slimeId: t.arg.string({ required: false }),
      },
      resolve: (_, { toyId, slimeId }) => {
        let results = toys;

        if (toyId) results = results.filter((toy) => toy.id === toyId);
        if (slimeId) results = results.filter((toy) => toy.slime === slimeId);

        return results;
      },
    }),
  }),
});
