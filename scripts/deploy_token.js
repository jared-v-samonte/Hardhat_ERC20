async function main() {
    // We get the contract to deploy
    const Token = await ethers.getContractFactory("CRD_Token");
    const GoerliToken = await Token.deploy();
  
    console.log("CRD Token deployed to:", GoerliToken.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });