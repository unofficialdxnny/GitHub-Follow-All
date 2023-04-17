// you need to run it once than change page than run again
let num = 1;

while (true) {
  // Evaluate the XPath expression with the dynamic part
  const xpath = `/html/body/div[1]/div[6]/main/div[2]/div/div[2]/turbo-frame/div/div[${num}]/div[3]/span/form[1]/input[2]`;
  const xpathResult = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  
  // Get the first matched node
  const matchedNode = xpathResult.singleNodeValue;
  
  // Check if a node was found
  if (matchedNode) {
    // Click on the matched node
    matchedNode.click();
    
    // Increment the variable
    num += 1;
  } else {
    console.log(`No node matched the XPath expression: ${xpath}`);
    break;
  }
}
