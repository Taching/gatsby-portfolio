import { css } from 'styled-components'

import sizes from './sizes'

// for large size~ specific
const min = {
  xlarge: (...args) => css`
    @media (min-width: ${sizes.xlarge}px) {
      ${css(...args)};
    }
  `,

  large: (...args) => css`
    @media (min-width: ${sizes.large}px) {
      ${css(...args)};
    }
  `,

  medium: (...args) => css`
    @media (min-width: ${sizes.medium}px) {
      ${css(...args)};
    }
  `,

  small: (...args) => css`
    @media (min-width: ${sizes.small}px) {
      ${css(...args)};
    }
  `,

  xsmall: (...args) => css`
    @media (min-width: ${sizes.xsmall}px) {
      ${css(...args)};
    }
  `,
}

// for mobile specific
const max = {
  large: (...args) => css`
    @media (max-width: ${sizes.large}px) {
      ${css(...args)};
    }
  `,
  medium: (...args) => css`
    @media (max-width: ${sizes.medium}px) {
      ${css(...args)};
    }
  `,
  small: (...args) => css`
    @media (max-width: ${sizes.small}px) {
      ${css(...args)};
    }
  `,
  xsmall: (...args) => css`
    @media (max-width: ${sizes.xsmall}px) {
      ${css(...args)};
    }
  `,
}

export default {
  min,
  max,
}
