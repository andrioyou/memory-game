export class Image {
  pictureId: number | null;
  url: string | object;
  show: boolean;
  opened: boolean;

  constructor() {
    this.url = '';
    this.pictureId = null;
    this.show = false;
    this.opened = false;
  }
}
