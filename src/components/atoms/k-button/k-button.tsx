import {Component, ComponentInterface, Host, h, Element, Prop, Event, EventEmitter} from '@stencil/core';
import {hasShadowDom} from "../../../utils/helpers";

export type PredefinedColors = 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'info';
export type Color = PredefinedColors | string;

@Component({
  tag: 'k-button',
  styleUrl: 'k-button.css',
  shadow: true,
})
export class KButton implements ComponentInterface {

  @Element() el!: HTMLElement;

  /**
   * If `true`, the user cannot interact with the button.
   */
  @Prop({ reflectToAttr: true }) disabled = false;

  /**
   * Set to `"block"` for a full-width button or to `"full"` for a full-width button
   * without left and right borders.
   */
  @Prop({ reflectToAttr: true }) expand?: 'block';

  /**
   * The type of the button.
   */
  @Prop() type: 'submit' | 'reset' | 'button' = 'button';

  /**
   * Contains a URL or a URL fragment that the hyperlink points to.
   * If this property is set, an anchor tag will be rendered.
   */
  @Prop() href: string | undefined;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"success"`, `"warning"`, `"danger"`.
   */
  @Prop() color?: Color = 'primary';

  /**
   * Specifies where to display the linked URL.
   * Only applies when an `href` is provided.
   * Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
   */
  @Prop() target: string | undefined;

  /**
   * Specifies the relationship of the target object to the link object.
   * The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
   */
  @Prop() rel: string | undefined;

  /**
   * Emitted when the button has focus.
   */
  @Event() kFocus!: EventEmitter<void>;

  /**
   * Emitted when the button loses focus.
   */
  @Event() kBlur!: EventEmitter<void>;

  private onFocus = () => {
    this.kFocus.emit();
  }

  private onBlur = () => {
    this.kBlur.emit();
  }

  private handleClick = (ev: Event) => {
    if (hasShadowDom(this.el)) {
      const form = this.el.closest('form');
      if (form) {
        ev.preventDefault();

        const fakeButton = document.createElement('button');
        fakeButton.type = this.type;
        fakeButton.style.display = 'none';
        form.appendChild(fakeButton);
        fakeButton.click();
        fakeButton.remove();
      }
    }
  }

  private get hasIconOnly() {
    return !!this.el.querySelector('k-icon[slot="icon-only"]');
  }


  render() {
    const {  href, disabled, type, rel, target, expand, hasIconOnly, color } = this;
    const TagType = href === undefined ? 'button' : 'a' as any;
    const attrs = (TagType === 'button')
        ? { type }
        : {
          href,
          rel,
          target
        };
    return (
        <Host
            onClick={this.handleClick}
            aria-disabled={disabled ? 'true' : null}
            class={{
              [`button--${expand}`]: expand !== undefined,
              [`button--${color}`]: color !== undefined,
              'button--has-icon-only': hasIconOnly,
              'button--disabled': disabled,
              'button': true
            }}
        >
          <TagType
              {...attrs}
              class="button__native"
              disabled={disabled}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
          >
          <span class="button__inner">
            <slot name="icon-only"></slot>
            <slot name="start"></slot>
            <slot></slot>
            <slot name="end"></slot>
          </span>
          </TagType>
        </Host>
    );
  }

}
