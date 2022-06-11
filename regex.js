function verifyName(name) {
  let desired = name.replace(/[^a-zA-Z]/g, '')
  console.log(desired);
  return desired;
}

const regexMultipleCleaner = (...dirtyStrings) => {
  let desired = [];
  dirtyStrings.forEach((element) => {
      let clean = element.replace(/[^\w\s][0-9]/gi, '')
      desired.push(clean);
  })
  return desired;
}

const [named, desc, type ] = regexMultipleCleaner("nillo dorado24&%/&", "ffdfd", "deae&#%");
const namedd = verifyName("nillo dorado24&%/&")
console.log(namedd)
console.log(named, desc, type)