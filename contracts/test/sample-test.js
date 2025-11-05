const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Fair', function () {
  it('deploys and has correct name', async function () {
    const Fair = await ethers.getContractFactory('Fair');
    const fair = await Fair.deploy('Test Fair');
    await fair.deployed();

    expect(await fair.name()).to.equal('Test Fair');
  });
});
