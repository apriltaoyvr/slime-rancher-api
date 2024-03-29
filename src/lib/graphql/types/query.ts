import { queryType, stringArg } from 'nexus';
import { foods, locations, slimes, toys } from '@/lib/data';

export const Query = queryType({
  definition(t) {
    t.list.field('slimes', {
      type: 'Slime',
      description: 'A list of all slimes',
      args: {
        slimeId: stringArg(),
        locationId: stringArg(),
      },
      resolve(_, { slimeId, locationId }) {
        let results = slimes;

        if (slimeId) results = results.filter((slime) => slime.id === slimeId);
        if (locationId)
          results = results.filter((slime) =>
            slime.locations.includes(locationId),
          );

        return results;
      },
    });

    t.list.field('locations', {
      type: 'Location',
      description: 'A list of all locations in the Far, Far Range',
      args: {
        locationId: stringArg(),
        slimeId: stringArg(),
      },
      resolve(_, { locationId, slimeId }) {
        let results = locations;
        if (locationId)
          results = results.filter((location) => location.id === locationId);
        if (slimeId)
          results = results.filter((location) =>
            slimes.filter((slime) => slime.locations.includes(location.id)),
          );
        return results;
      },
    });

    t.list.field('foods', {
      type: 'Food',
      description: 'A list of all foods',
      args: {
        foodId: stringArg(),
        slimeId: stringArg(),
        locationId: stringArg(),
      },
      resolve(_, { foodId, slimeId, locationId }) {
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
    });

    t.list.field('toys', {
      type: 'Toy',
      description: 'A list of all slime toys',
      args: {
        toyId: stringArg(),
        slimeId: stringArg(),
      },
      resolve(_, { toyId, slimeId }) {
        let results = toys;

        if (toyId) results = results.filter((toy) => toy.id === toyId);
        if (slimeId) results = results.filter((toy) => toy.slime === slimeId);

        return results;
      },
    });
  },
});
