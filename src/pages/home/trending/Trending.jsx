import React from 'react';

import ContentWrapper from '../../../componenets/contentWrapper/ContentWrapper';

import SwitchTabs from '../../../componenets/switchTabs/SwitchTabs';


const Trending = () => {
    const onTabChange = (tav) => {};


  return (
   <div className="carouseTitle">Trending
   <ContentWrapper>
    <span className="carouseTitle"></span>
    <SwitchTabs  data={["Day" ,"Week"]} onTabChange={onTabChange} />
   </ContentWrapper>
   </div>
  );
};

export default Trending;
