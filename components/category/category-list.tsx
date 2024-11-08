import { provideBlogCategories } from '@/data/blog-data';

const CategoryList = () => {
  const categories = provideBlogCategories();
  return <div>{JSON.stringify(categories)}</div>;
};

export default CategoryList;
