import styled from "styled-components";

export const SectionContainer = styled(({ ...props }) => <section {...props} />)`
  display: flex;
  max-width: 1920px;
  width: 100%;
  height: auto;
  margin-left: 40px;
  margin-right: 40px;
`;
