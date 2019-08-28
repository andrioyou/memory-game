export class GetPosts {
  static readonly type = '[Posts] Get posts';
}

export class GetPost {
  static readonly type = '[Posts] Get post';
  constructor(public id: number) {}
}

export class GetPostComments {
  static readonly type = '[Posts] Get post comments';
  constructor(public id: number) {}
}

export class ClearPost {
  static readonly type = '[Posts] Clear post';
}

export class ClearPostComments {
  static readonly type = '[Posts] Clear post comments';
}
