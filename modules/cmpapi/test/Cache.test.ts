import {expect} from 'chai';
import {Cache} from '../src/Cache';

describe('Cache', (): void => {

  it('constructor', (): void => {

    const cache = new Cache<number>();
    expect(cache.numberOfBuckets()).to.be.equal(0);

  });

  it('get bucket', (): void => {

    const cache = new Cache<number>();
    const bucket = cache.getBucket('test-bucket');

    expect(bucket.get('first', (n: number): number => n + 1, 0)).to.be.equal(1);
    expect(bucket.recalculations).to.be.equal(1);
    expect(cache.numberOfBuckets()).to.be.equal(1);

  });

  it('size and clear methods', (): void => {

    const cache = new Cache<number>();
    const bucketOne = cache.getBucket('bucket-one');
    expect(bucketOne.get('first', (n: number): number => n + 1, 0)).to.be.equal(1);

    const bucketTwo = cache.getBucket('bucket-two');
    expect(bucketTwo.get('first', (n: number): number => n + 2, 0)).to.be.equal(2);

    expect(cache.numberOfBuckets()).to.be.equal(2);
    expect(cache.size()).to.be.equal(2);

    cache.clear();
    expect(cache.size()).to.be.equal(0);

  });

});
