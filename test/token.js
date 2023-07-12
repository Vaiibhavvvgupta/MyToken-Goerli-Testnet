const {expect} = require("chai");



describe("token contract",function(){
it("deployment should be assign the total supply of the token of the owner",async function(){
    const[owner] = await ethers.getSigners();
    console.log(" singers objects:",owner);
    const Mycrpt = await ethers.getContractFactory("mycrpt");
    const hardhattoken = await Mycrpt.deploy();
    const ownerbalance = await hardhattoken.balanceof(owner.address);

    expect(await hardhattoken.totalSupply() ).to.equal(ownerbalance);
})
it("should transfer amount between the account",async function(){
    const[owner,adr1,adr2] = await ethers.getSigners();

    const Mycrpt = await ethers.getContractFactory("mycrpt");
    const hardhattoken = await Mycrpt.deploy();

   await hardhattoken.transfer(adr1.address,10);

    expect(await hardhattoken.balanceof(adr1.address)).to.equal(10);
    await hardhattoken.connect(adr1).transfer(adr2.address,5);

    expect(await hardhattoken.balanceof(adr2.address)).to.equal(5);
})
});