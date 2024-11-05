'use client';

import { ClientSharedServerContext } from '@/types/server';
import { assignClientContext } from '@/util/assign-client-context';
import { createContext, FC, PropsWithChildren } from 'react';

const MainContext = createContext<ClientSharedServerContext>(
  assignClientContext({}),
);

type MainProviderProps = PropsWithChildren<Partial<ClientSharedServerContext>>;

const MainProvider: FC<MainProviderProps> = ({ children, ...props }) => {
  return (
    <MainContext.Provider value={assignClientContext(props)}>
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
