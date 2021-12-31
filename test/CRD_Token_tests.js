const { expect } = require("chai")

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("CRD_Token");
    const hardhatToken = await Token.deploy();

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  })

  it('name is CardinalPecks', async () => {
    const Token = await ethers.getContractFactory("CRD_Token");
    const hardhatToken = await Token.deploy();

    expect(await hardhatToken.name()).to.equal('CardinalPecks')
  })

  it('symbol is CRD', async () => {
    const Token = await ethers.getContractFactory("CRD_Token");
    const hardhatToken = await Token.deploy();

    expect(await hardhatToken.symbol()).to.equal('CRD')
  })

  it('decimals is 18', async () => {
    const Token = await ethers.getContractFactory("CRD_Token");
    const hardhatToken = await Token.deploy();

    expect(await hardhatToken.decimals()).to.equal(18)
  })

  it('total supply is 1000000', async () => {
    const Token = await ethers.getContractFactory("CRD_Token");
    const hardhatToken = await Token.deploy();

    expect(await hardhatToken.totalSupply()/ Math.pow(10, 24) ).to.equal(1) 
    // 1000000 + 18 more zeros for 18 decimals so 
    // 6 + 18 zeros equals 24
    // Hence the 10 to the 24th
  })
});
