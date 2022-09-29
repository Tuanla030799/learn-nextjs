import { MainLayout } from '../components/layout';
import { NextPageWithLayout } from '../models';

const HomePage: NextPageWithLayout = () => {
  return <h1>this is a Home Page</h1>;
};

HomePage.Layout = MainLayout;

export default HomePage;
