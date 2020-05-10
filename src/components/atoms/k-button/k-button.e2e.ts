import { newE2EPage } from '@stencil/core/testing';

describe('k-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-button></k-button>');

    const element = await page.find('k-button');
    expect(element).toHaveClass('hydrated');
  });
});
