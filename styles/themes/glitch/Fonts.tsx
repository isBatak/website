import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      /* chakra-petch-300 - latin */
      @font-face {
        font-family: 'Chakra Petch';
        font-style: normal;
        font-weight: 300;
        src: local(''),
            url('../fonts/chakra-petch-v4-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('../fonts/chakra-petch-v4-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* chakra-petch-300italic - latin */
      @font-face {
        font-family: 'Chakra Petch';
        font-style: italic;
        font-weight: 300;
        src: local(''),
            url('../fonts/chakra-petch-v4-latin-300italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('../fonts/chakra-petch-v4-latin-300italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* chakra-petch-regular - latin */
      @font-face {
        font-family: 'Chakra Petch';
        font-style: normal;
        font-weight: 400;
        src: local(''),
            url('../fonts/chakra-petch-v4-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('../fonts/chakra-petch-v4-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* chakra-petch-500 - latin */
      @font-face {
        font-family: 'Chakra Petch';
        font-style: normal;
        font-weight: 500;
        src: local(''),
            url('../fonts/chakra-petch-v4-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('../fonts/chakra-petch-v4-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* chakra-petch-italic - latin */
      @font-face {
        font-family: 'Chakra Petch';
        font-style: italic;
        font-weight: 400;
        src: local(''),
            url('../fonts/chakra-petch-v4-latin-italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('../fonts/chakra-petch-v4-latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* chakra-petch-600 - latin */
      @font-face {
        font-family: 'Chakra Petch';
        font-style: normal;
        font-weight: 600;
        src: local(''),
            url('../fonts/chakra-petch-v4-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('../fonts/chakra-petch-v4-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* chakra-petch-500italic - latin */
      @font-face {
        font-family: 'Chakra Petch';
        font-style: italic;
        font-weight: 500;
        src: local(''),
            url('../fonts/chakra-petch-v4-latin-500italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('../fonts/chakra-petch-v4-latin-500italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* chakra-petch-700 - latin */
      @font-face {
        font-family: 'Chakra Petch';
        font-style: normal;
        font-weight: 700;
        src: local(''),
            url('../fonts/chakra-petch-v4-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('../fonts/chakra-petch-v4-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* chakra-petch-600italic - latin */
      @font-face {
        font-family: 'Chakra Petch';
        font-style: italic;
        font-weight: 600;
        src: local(''),
            url('../fonts/chakra-petch-v4-latin-600italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('../fonts/chakra-petch-v4-latin-600italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* chakra-petch-700italic - latin */
      @font-face {
        font-family: 'Chakra Petch';
        font-style: italic;
        font-weight: 700;
        src: local(''),
            url('../fonts/chakra-petch-v4-latin-700italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('../fonts/chakra-petch-v4-latin-700italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
    `}
  />
);

export default Fonts;
