import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Loader, ParticleWave, PublicAppBar, UserMenu } from 'components';
import { selectLogin } from 'redux/selectors';
import { Container } from 'styles/Container.styled';
import FooterComponent from './Footer/Footer';
import { Main, WrapperAll } from './Footer/Footer.styled';

function Layout() {
  const isLogin = useSelector(selectLogin);

  return (
    <WrapperAll>
      <header>
        <Container>{isLogin ? <UserMenu /> : <PublicAppBar />}</Container>
      </header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <FooterComponent />
      <ParticleWave />
    </WrapperAll>
  );
}

export default Layout;
