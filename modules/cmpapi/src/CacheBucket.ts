export type RecalculationFunction<Type> = (...args) => Type;

export class CacheBucket<Type> {

    public name: string;
    public recalculations: number;

    private cache: Map<string, Type>;

    constructor(name: string) {

      this.name = name;

      this.recalculations = 0;

    }

    get(key: string, recalculation: Function, ...args): Type {

      let value = this.cache.get(key);

      if (value) {

        return value;

      }

      value = recalculation(...args);

      this.cache.set(key, value);
      this.recalculations++;

      return value;

    }

    clear(): void {

      this.cache.clear();
      this.recalculations = 0;

    }

}
