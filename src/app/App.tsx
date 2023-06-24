import { FC, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import getCategories from 'widgets/CategoriesList/model/services/getCategories';
import { Header } from 'widgets/Header';
import { AppRouter } from './providers/routing';
import './styles/index.scss';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className='app'>
      <Header />
      <main>
        <AppRouter />
      </main>
    </div >
  );
};

export default App;
