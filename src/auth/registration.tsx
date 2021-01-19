import { Logo } from 'common/logo';
import React from 'react';
import styled, { css } from 'styled-components';
import { MdMailOutline, MdPersonOutline, MdLockOutline } from 'react-icons/md';
import { RegistrationWrapper } from './registration-wrapper';
import { RegistrationSignature } from './registration-signature.style';
import { RegistrationContainer } from './registration-container.style';
import { LabeledField } from './labeled-field';
import { AuthButton } from './auth-button.style';
import { RegistrationHeader } from './registration-header.style';
import { RegistrationHeaderText } from './registration-header-text.style';
import { RegistrationHeaderLogo } from './registration-header-logo.style';
import { Button, ButtonTypeMap, ExtendButtonBase } from '@material-ui/core';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { RouteLink } from './route-link';

const RegistrationLoginLink = styled.p`
  margin-top: 2rem;
  text-align: center;
  text-transform: capitalize;
  font-size: 1.5rem;
`;

const RegistrationConditionsWrapper = styled.p`
  text-align: center;
  font-size: 1.4rem;
`;

const OpenAuthenticationGithub = styled(AuthButton).attrs({
  startIcon: React.createElement(FaGithub),
  type: 'button',
  children: 'continue with github',
})`
  background: #29303b;
  &:hover {
    background: #29303b;
  }
`;

const OpenAuthenticationGoogle = styled(AuthButton).attrs({
  startIcon: React.createElement(FaGoogle),
  type: 'button',
  children: 'continue with google',
})`
  color: #29303b;
  background: #fff;
  &:hover {
    background: #fff;
  }
`;

export const Registration: React.FC = () => {
  return (
    <RegistrationWrapper>
      <RegistrationHeader>
        <RegistrationHeaderLogo />
        <RegistrationHeaderText>make most of your teamwork!</RegistrationHeaderText>
      </RegistrationHeader>
      <RegistrationContainer>
        <OpenAuthenticationGithub />
        <OpenAuthenticationGoogle />

        <form>
          <LabeledField
            icon={MdPersonOutline}
            name="name"
            type="text"
            placeholder="i.e. Steve Rozmarin"
          />
          <LabeledField
            icon={MdMailOutline}
            name="email"
            type="email"
            placeholder="i.e. example@example.com"
          />
          <LabeledField
            icon={MdLockOutline}
            name="password"
            type="password"
            placeholder="i.e. example@!%$5475347"
          />
          <AuthButton type="submit">Agree & Join</AuthButton>

          <RegistrationConditionsWrapper>
            you agree to the
            <RouteLink to="/register">Privacy Policy</RouteLink>
            and
            <RouteLink to="/register">Terms of Use</RouteLink>
          </RegistrationConditionsWrapper>

          <RegistrationLoginLink>
            already on assign?
            <RouteLink to="/login">sign in</RouteLink>
          </RegistrationLoginLink>
        </form>
      </RegistrationContainer>
      <RegistrationSignature />
    </RegistrationWrapper>
  );
};
