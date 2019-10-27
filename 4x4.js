const myData = [
    ["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
    ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]
];
const concat = (xs, ys) => xs.concat(ys);

const myDataRGBA = myStr => [
    parseInt(myStr.substr(0, 2), 16),
    parseInt(myStr.substr(2, 2), 16),
    parseInt(myStr.substr(4, 2), 16),
    255
  ];

const flattenedRGBAValues = myData
  .reduce(concat)  
  .map(myDataRGBA) 
  .reduce(concat); 
  
  const cvs = document.createElement("canvas");
  cvs.width = cvs.height = 4;
  const ctx = cvs.getContext("2d");
  const imgData = new ImageData(Uint8ClampedArray.from(flattenedRGBAValues), 4, 4);
  ctx.putImageData(imgData, 0, 0);
  
  document.body.appendChild(cvs);
