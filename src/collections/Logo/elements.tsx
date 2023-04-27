import styled from "styled-components";
import { Paragraph as _Paragraph, Image as _Image, Button as _Button } from "components";

export const LogoContainer = styled("div")`
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled(_Image)``;

export const LogoText = styled(props => <_Paragraph variant='sm' {...props} />)`
  color: ${({ theme }) => theme.colors.white};
  padding-left: 15px;
`;
