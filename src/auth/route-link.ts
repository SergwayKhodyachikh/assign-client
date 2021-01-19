import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import MaterialLink, { LinkTypeMap } from '@material-ui/core/Link';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

type RouteLinkType = OverridableComponent<
  LinkTypeMap<{}, RouterLink & React.RefAttributes<HTMLAnchorElement>>
>;

export const RouteLink = styled<RouteLinkType>(MaterialLink).attrs({
  component: RouterLink,
})`
  white-space: nowrap;
  padding: 0 0.5rem;
  font-weight: bold;
`;
