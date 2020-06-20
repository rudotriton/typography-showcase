import styled from 'styled-components';
import media from 'util/mediaQueries';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-auto-rows: 40rem;
  ${media.widelet`
    grid-template-columns: 100%;
  `}
`;

export default Wrapper;
