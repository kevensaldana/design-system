/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Color, } from "./components/atoms/k-button/k-button";
export namespace Components {
    interface KButton {
        /**
          * The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
         */
        "color"?: Color;
        /**
          * If `true`, the user cannot interact with the button.
         */
        "disabled": boolean;
        /**
          * Set to `"block"` for a full-width button or to `"full"` for a full-width button without left and right borders.
         */
        "expand"?: "full" | "block";
        /**
          * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.
         */
        "href": string | undefined;
        /**
          * Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
         */
        "target": string | undefined;
    }
}
declare global {
    interface HTMLKButtonElement extends Components.KButton, HTMLStencilElement {
    }
    var HTMLKButtonElement: {
        prototype: HTMLKButtonElement;
        new (): HTMLKButtonElement;
    };
    interface HTMLElementTagNameMap {
        "k-button": HTMLKButtonElement;
    }
}
declare namespace LocalJSX {
    interface KButton {
        /**
          * The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
         */
        "color"?: Color;
        /**
          * If `true`, the user cannot interact with the button.
         */
        "disabled"?: boolean;
        /**
          * Set to `"block"` for a full-width button or to `"full"` for a full-width button without left and right borders.
         */
        "expand"?: "full" | "block";
        /**
          * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.
         */
        "href"?: string | undefined;
        /**
          * Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
         */
        "target"?: string | undefined;
    }
    interface IntrinsicElements {
        "k-button": KButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "k-button": LocalJSX.KButton & JSXBase.HTMLAttributes<HTMLKButtonElement>;
        }
    }
}
