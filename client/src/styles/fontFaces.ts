import { css } from 'styled-components';

import productSansRegular from 'assets/fonts/product-sans/ProductSans-Regular.woff';
import productSansBold from 'assets/fonts/product-sans/ProductSans-Regular.woff';
import productSansLight from 'assets/fonts/product-sans/ProductSans-Light.woff';

export const fontFaces = css`
  /* #### Generated By: http://www.cufonfonts.com #### */

  @font-face {
    font-family: "Product Sans Regular";
    font-style: normal;
    font-weight: normal;
    src: local("Product Sans Regular"), url(${productSansRegular}) format("woff");
  }
  
  @font-face {
    font-family: "Product Sans Light Regular";
    font-style: normal;
    font-weight: normal;
    src: local("Product Sans Light Regular"), url(${productSansLight}) format("woff");
  }

  @font-face {
    font-family: "Product Sans Bold";
    font-style: normal;
    font-weight: normal;
    src: local("Product Sans Bold"), url(${productSansBold}) format("woff");
  }

  @font-face {
    font-family: "Product Sans Italic";
    font-style: normal;
    font-weight: normal;
    src: local("Product Sans Italic"), url("assets/fonts/product-sans/ProductSans-Italic.woff") format("woff");
  }

  @font-face {
    font-family: "Product Sans Thin Regular";
    font-style: normal;
    font-weight: normal;
    src: local("Product Sans Thin Regular"), url("assets/fonts/product-sans/ProductSans-Thin.woff") format("woff");
  }


  @font-face {
    font-family: "Product Sans Medium Regular";
    font-style: normal;
    font-weight: normal;
    src: local("Product Sans Medium Regular"), url("assets/fonts/product-sans/ProductSans-Medium.woff") format("woff");
  }

  @font-face {
    font-family: "Product Sans Black Regular";
    font-style: normal;
    font-weight: normal;
    src: local("Product Sans Black Regular"), url("assets/fonts/product-sans/ProductSans-Black.woff") format("woff");
  }

  @font-face {
    font-family: "Product Sans Thin Italic";
    font-style: normal;
    font-weight: normal;
    src: local("Product Sans Thin Italic"), url("assets/fonts/product-sans/ProductSans-ThinItalic.woff") format("woff");
  }

  @font-face {
    font-family: "Product Sans Light Italic";
    font-style: normal;
    font-weight: normal;
    src: local("Product Sans Light Italic"), url("assets/fonts/product-sans/ProductSans-LightItalic.woff") format("woff");
  }

  @font-face {
    font-family: "Product Sans Medium Italic";
    font-style: normal;
    font-weight: normal;
    src: local("Product Sans Medium Italic"), url("assets/fonts/product-sans/ProductSans-MediumItalic.woff") format("woff");
  }

  @font-face {
    font-family: "Product Sans Bold Italic";
    font-style: normal;
    font-weight: normal;
    src: local("Product Sans Bold Italic"), url("assets/fonts/product-sans/ProductSans-BoldItalic.woff") format("woff");
  }

  @font-face {
    font-family: "Product Sans Black Italic";
    font-style: normal;
    font-weight: normal;
    src: local("Product Sans Black Italic"), url("assets/fonts/product-sans/ProductSans-BlackItalic.woff") format("woff");
  }
`;

export default fontFaces;