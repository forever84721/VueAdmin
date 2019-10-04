export default class MenuItemModel {
    public Id = 0;
    public Name = '';
    public Children: MenuItemModel[] = [];
    public ShowChildren = false;
}
// export default class MenuItemModel {
//     public Id: number;
//     public Name: string;
//     public Children: MenuItemModel[];
//     public ShowChildren = false;
//     constructor(Id: number, Name: string, Children: MenuItemModel[]) {
//         this.Id = Id;
//         this.Name = Name;
//         this.Children = Children;
//     }
// }
