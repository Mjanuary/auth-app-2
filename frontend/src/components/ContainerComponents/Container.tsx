import React, { FC, ReactElement } from 'react';
import DashboardContainer from '../DashboardContainer/DashboardContainer';
import Heading from '../Heading/Heading';

type ContainerProps = {
  title: string;
  subTitle: string;
  children: React.ReactNode;
  className?: string;
};

const Container: FC<ContainerProps> = ({
  title,
  subTitle,
  children,
  className = '',
}): ReactElement => {
  return (
    <DashboardContainer>
      <Heading>{title}</Heading>
      <h3 className='opacity-60 -mt-1 font-bold text-accent-900 dark:text-accent-800'>
        {subTitle}
      </h3>
      {children}
    </DashboardContainer>
  );
};

export default Container;
