import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Loader, ParticleWave, PublicAppBar, UserMenu } from 'components';
import { selectLogin } from 'redux/selectors';
import { Container } from 'styles/Container.styled';
import FooterComponent from './Footer/Footer';

function Layout() {
  const isLogin = useSelector(selectLogin);

  return (
    <>
      <header>
        <Container>{isLogin ? <UserMenu /> : <PublicAppBar />}</Container>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <FooterComponent />
      <ParticleWave />
    </>
  );
}

export default Layout;
