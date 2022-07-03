import {CacheBucket} from './CacheBucket';

export class Cache<Type> {

    public cacheBuckets: Map<string, CacheBucket<Type>>;

    constructor() {

      this.cacheBuckets = new Map<string, CacheBucket<Type>>();

    }

    public addBucket(bucketName: string): void {

      let bucket = this.cacheBuckets.get(bucketName);

      if (!bucket) {

        bucket = new CacheBucket(bucketName);

      }

    }

    getBucket(bucketName: string): CacheBucket<Type> {

      return this.cacheBuckets.get(bucketName);

    }

    clear(): void {

      this.cacheBuckets.forEach((bucket) => bucket.clear());

    }

}
