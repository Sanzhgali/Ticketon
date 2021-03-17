export class Category{
    name: string = '';
    
    public toString(): string {
      return this.name;
    }
    
    get category(): string { return this.name; }

    setCategory(name: string) {
      this.name = name;
    }
  }