import {expect} from 'chai';
import {CacheBucket} from '../src/CacheBucket';

describe('CacheBucket', (): void => {

  it('constructor', (): void => {

    const bucket = new CacheBucket<number>('test-bucket');
    expect(bucket.name).to.be.equal('test-bucket');
    expect(bucket.recalculations).to.be.equal(0);

  });

  it('get value form the cache', (): void => {

    const bucket = new CacheBucket<number>('test-bucket');
    expect(bucket.get('first', (n: number): number => n + 1, 0)).to.be.equal(1);
    expect(bucket.recalculations).to.be.equal(1);

    expect(bucket.get('first', (n: number): number => n + 1, 0)).to.be.equal(1);
    expect(bucket.recalculations).to.be.equal(1);

    expect(bucket.get('second', (n: number): number => n + 1, 1)).to.be.equal(2);
    expect(bucket.recalculations).to.be.equal(2);

    expect(bucket.size()).to.be.equal(2);

  });

  it('size and clear methods', (): void => {

    const bucket = new CacheBucket<number>('test-bucket');
    expect(bucket.get('first', (n: number): number => n + 1, 0)).to.be.equal(1);
    expect(bucket.size()).to.be.equal(1);

    bucket.clear();
    expect(bucket.size()).to.be.equal(0);
    expect(bucket.recalculations).to.be.equal(0);

  });

});
