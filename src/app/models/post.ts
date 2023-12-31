import {Role} from "./role";

export class Post {
  public id: number;
  public title: string;
  public content: string;

  constructor(id: number, title: string, content: string)
  {
    this.id = id;
    this.title = title;
    this.content = content;
  }
}
