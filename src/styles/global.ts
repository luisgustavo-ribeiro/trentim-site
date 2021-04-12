import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // locomotive
  html.has-scroll-smooth {
    overflow: hidden;
  }

  html.has-scroll-dragging {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .has-scroll-smooth body {
    overflow: hidden;
  }

  .has-scroll-smooth [data-scroll-container] {
    min-height: 100vh;
  }

  .c-scrollbar {
    position: absolute;
    right: 0;
    top: 0;
    width: 11px;
    height: 100%;
    transform-origin: center right;
    transition: transform 0.3s, opacity 0.3s;
    opacity: 0;
  }

  .c-scrollbar:hover {
    transform: scaleX(1.45);
  }

  .c-scrollbar:hover,
  .has-scroll-scrolling .c-scrollbar,
  .has-scroll-dragging .c-scrollbar {
    opacity: 1;
  }

  .c-scrollbar_thumb {
    position: absolute;
    top: 0;
    right: 0;
    background-color: black;
    opacity: 0.5;
    width: 7px;
    border-radius: 10px;
    margin: 2px;
    cursor: -webkit-grab;
    cursor: grab;
  }

  .has-scroll-dragging .c-scrollbar_thumb {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }

// locomotive end

  body {
    font: 400 16px system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    background-color: #FFF;    

    &.menu-open {
      overflow: hidden;
    }
  }

  .nav-toggle {
    display: none;
    position: fixed;
    height: 49px;
    width: 50px;
    top:8px;
    left: 10px;
    background-color: ${(props) => props.theme.colors.base.blue2};
    z-index: 101;
    align-items: center;
    justify-content: center;
    color: #FFF;
    border: none;
    cursor: pointer;
    transition:100ms ease-in-out all;

    &.menu-open {
      background-color: transparent;
      transition-delay: 100ms;

      .shape {
        background-color: ${(props) => props.theme.colors.base.blue2};
      }
    }

    .shape {
      height: 30px;
      width: 30px;
      border-width: 3px;
      margin: 0;
    }

    @media screen and (max-width: 768.99px) {
      display: flex;
    }
  }

  .sq-details {
    min-width: 1280px;
    overflow: hidden;
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 20px;

    @media screen and (max-width: 768.99px) {
      display: none;
    }
  }

  .detail {
    display: flex;
  }

  .container {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 1320px;
    padding: 0 20px;
    margin: 0 auto;

    &.col {
      flex-flow: column;
    }
  }

  .shape {
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: 5px solid;
    margin: 0 20px;

    &.open {
      height: 100px;
      width: 100px;
    }

    &.square {
      border-radius: 0;
    }

    &.postIt {
      border-top-left-radius: 50%;
    }
    
    &.person {
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
    }

    &.lemon {
      border-top-left-radius: 50%;
      border-bottom-right-radius: 50%;
    }

    &.chat {
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
      border-bottom-right-radius: 50%;
    }

    &.circle {
      border-radius: 100%;
    }
  }

  .title-area {
    display: flex;
    align-items: center;
    font-size: 48px;

    .shape {
      margin-left: 0 !important;
    }

    .title {
      padding: 0 0 12px;      
    }
  }

  #pageContent {
    position: relative;
    transition: 100ms ease-in-out;

    &.menu-open {
      filter: blur(4px);
      transition: 100ms ease-in-out;
      
      &:after {
        content: "";
        position: fixed;
        background-color: rgba(0,0,0, 0.08);
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

//custom checkbox
  .styled-checkbox {
    position: absolute; // take it out of document flow
    opacity: 0; // hide it

    & + label {
      position: relative;
      cursor: pointer;
      padding: 0;
    }

    // Box.
    & + label:before {
      content: '';
      margin-right: 10px;
      display: inline-block;
      vertical-align: text-top;
      width: 20px;
      height: 20px;
      background: white;
      border: 1px solid ${(props) => props.theme.colors.base.gray1};
      border-radius: 2px;
      transition: 200ms ease-in-out all;
    }

    // Box hover
    &:hover + label:before {
      background: ${(props) => props.theme.colors.dark.yellow};
      transition: 200ms ease-in-out all;
    }
    
    // Box focus
    &:focus + label:before {
      box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
    }

    // Box checked
    &:checked + label:before {
      background: ${(props) => props.theme.colors.dark.yellow};
      transition: 200ms ease-in-out all;
    }
    
    // Disabled state label.
    &:disabled + label {
      color: #b8b8b8;
      cursor: auto;
    }

    // Disabled box.
    &:disabled + label:before {
      box-shadow: none;
      background: #ddd;
    }

    // Checkmark. Could be replaced with an image
    &:checked + label:after {
      content: '';
      position: absolute;
      left: 6px;
      top: 11px;
      background: white;
      width: 2px;
      height: 2px;
      box-shadow: 
        2px 0 0 white,
        4px 0 0 white,
        4px -2px 0 white,
        4px -4px 0 white,
        4px -6px 0 white,
        4px -8px 0 white;
      transform: rotate(45deg);
    }
  }

  // media queries
  @media screen and (max-width: 768.99px) {
    .detail {
      display: none;
    }

    .title-area {
      font-size: 24px;

      .shape {
        width: 30px !important;
        height: 30px !important;
        border-width: 3px !important;       
      }

      .title {
        padding: 0 0 6px;
      }
    }
  }

`;
