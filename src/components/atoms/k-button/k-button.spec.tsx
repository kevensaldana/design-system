import { newSpecPage } from '@stencil/core/testing';
import { KButton } from './k-button';

describe('k-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KButton],
      html: `<k-button></k-button>`,
    });
    expect(page.root).toEqualHtml(`
      <k-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </k-button>
    `);
  });
});
