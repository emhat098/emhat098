'use client';

import { FC, PropsWithChildren } from 'react';
import Container from '@/components/container/container';
import Navbar from '@/components/navbar/navbar';
import Footer from '../footer/footer';
import InFooter from '../footer/in-footer';

const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>
        <main>{children}</main>
        <InFooter />
      </Container>
      <Footer />
    </>
  );
};

export default DefaultLayout;
