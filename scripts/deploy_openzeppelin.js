async function main() {
    // We get the contract to deploy
    const Token = await ethers.getContractFactory("CRD_OpenZeppelin");
    const GoerliToken = await Token.deploy();
  
    console.log("OpenZeppelin Token deployed to:", GoerliToken.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });