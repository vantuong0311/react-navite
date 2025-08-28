class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const numberRepo = new Repository<number>();
numberRepo.add(10);
numberRepo.add(20);
console.log('Repository numbers:', numberRepo.getAll());