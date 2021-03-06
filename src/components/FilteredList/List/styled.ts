import styled from 'styled-components'
import theme from 'styles/theme'
import { mq } from 'styles/media'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

export const Ul = styled.ul`
  margin: 50px auto 0 auto;
  padding: 0;
  width: 100%;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;

  ${mq.tabletWide} {
    width: 780px;
  }

  ${mq.desktop} {
    width: 1180px;
  }
`

export const Li = styled.li`
  ${mq.tablet} {
    &:nth-child(even) {
      margin: 0 0 0 20px;
    }
  }

  ${mq.desktop} {
    &:nth-child(even) {
      margin: 0;
    }

    &:nth-child(3n + 2) {
      margin: 0 20px;
    }
  }
`

export const Name = styled.h3`
  font-family: ${theme.fonts.primary};
  font-size: 2rem;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.white};
  letter-spacing: 0.1px;
  text-align: center;
  line-height: 32px;
  transition: color 0.4s ease;
  margin: 26px auto 6px auto;
  max-width: 300px;
`

export const Link = styled(OutboundLink)`
  display: inline-block;
  padding: 57px 0 0 0;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  width: 100%;

  ${mq.tablet} {
    width: 380px;
  }

  &:hover {
    ${Name} {
      color: ${theme.colors.primary};
    }
  }
`

export const Description = styled.p`
  font-family: ${theme.fonts.primary};
  font-size: 1.6rem;
  color: ${theme.colors.grey};
  text-align: center;
  font-weight: ${theme.fontWeight.light};
  line-height: 24px;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`

export const Category = styled.span`
  display: block;
  padding-top: 19px;
  font-family: ${theme.fonts.primary};
  font-size: 1.2rem;
  color: ${theme.colors.greyDarker};
  letter-spacing: 1.6px;
  text-transform: uppercase;
  text-align: center;
  font-weight: ${theme.fontWeight.semibold};
  line-height: 20px;
  margin: 0 auto;
`

export const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`
