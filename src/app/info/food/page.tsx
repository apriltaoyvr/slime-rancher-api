import graphqlFetcher from '@/lib/gqlFetcher';
import { type IFoodGallery, allFoodsQuery } from './foodFetch';
import FoodGallery from './gallery';

export default async function FoodsPage() {
  const fetchAllFoods = await graphqlFetcher(allFoodsQuery);
  const foods: IFoodGallery[] = fetchAllFoods.data.foods;

  return <FoodGallery foods={foods.slice(1, foods.length)} />;
}
