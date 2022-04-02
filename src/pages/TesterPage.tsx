import React from 'react';
import SplitPage from '../components/shared/SplitPage';
import Tester from '../components/tester/Tester';

const TesterPage: React.FC = () => {
  return (
    <SplitPage>
      <Tester />
    </SplitPage>
  );
};
export default TesterPage;
