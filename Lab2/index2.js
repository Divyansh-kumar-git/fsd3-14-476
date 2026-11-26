//index2
import { rm } from "fs/promises";
import { mkdir } from "fs/promises";


// await mkdir("uploads/images");
// await mkdir("uploads");


// await mkrir("docs/resumes/data",{ recursive: true});


//removes only data folder
//await rm("docs/resumes/data",{recursive:true});



//removes main folder and sub folder also
await rm("docs", { recursive: true });