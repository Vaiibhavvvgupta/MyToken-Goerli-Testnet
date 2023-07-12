async function main(){
    const [deployer] = await ethers.getSigners();
    const Mycrpt = await ethers.getContractFactory("mycrpt");
    const hardhattoken = await Mycrpt.deploy();
    console.log("Mycrpt token",hardhattoken.address);

}
main()
.then(()=>process.exit(0))
.catch((error=> {
console.error(error);
process.exit(1);
}));