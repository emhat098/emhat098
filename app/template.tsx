'use client';

import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

const Template: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: 'easeIn', duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Template;
