import { RelativeTimeElement } from '@github/relative-time-element';

if (!customElements.get('relative-time')) {
  customElements.define('relative-time', RelativeTimeElement);
}