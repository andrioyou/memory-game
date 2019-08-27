export class GetPosts {
  static readonly type = '[Posts] Get posts';
}

export class GetPost {
  static readonly type = '[Posts] Get post';
  constructor(public id: number) {}
}
