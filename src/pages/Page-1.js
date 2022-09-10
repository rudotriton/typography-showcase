import BlockOne from "components/Block-1";
import BlockTen from "components/Block-10";
import BlockTwo from "components/Block-2";
import BlockThree from "components/Block-3";
import BlockFour from "components/Block-4";
import BlockFive from "components/Block-5";
import BlockSix from "components/Block-6";
import BlockSeven from "components/Block-7";
import BlockEight from "components/Block-8";
import BlockNine from "components/Block-9";
import Wrapper from "pages/PageWrapper";
import React from "react";

function PageOne() {
  return (
    <Wrapper>
      <BlockOne />
      <BlockTwo />
      <BlockThree />
      <BlockFour />
      <BlockFive />
      <BlockSix />
      <BlockSeven />
      <BlockEight />
      <BlockNine />
      <BlockTen />
    </Wrapper>
  );
}

export default PageOne;
