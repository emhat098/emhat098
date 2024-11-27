'use client';

import { FC, PropsWithChildren } from 'react';
import Container from '@/components/container/container';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';

const WorkLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>
        <main className={'flex flex-col gap-4 relative'}>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default WorkLayout;
