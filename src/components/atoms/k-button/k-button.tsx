import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'k-button',
  styleUrl: 'k-button.scss',
  shadow: true,
})
export class KButton implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
