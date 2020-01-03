export default class MessageInfo {
  public IssuerId = 0;
  public Name = '';
  public PostTime: Date;
  public Content = '';
  constructor(IssuerId: number, Name: string, PostTime: Date, Content: string) {
    this.IssuerId = IssuerId;
    this.Name = Name;
    this.PostTime = PostTime;
    this.Content = Content;
  }
}
