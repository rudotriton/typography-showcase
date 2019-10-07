import styled from 'styled-components';
import media from '../util/mediaQueries';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50vw 50vw;
  grid-auto-rows: 40rem;
  ${media.widelet`
    grid-template-columns: 100%;
  `}
`;

export default Wrapper;
