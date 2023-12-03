console.log("1"),setTimeout((()=>console.log("2")),0);const o=new Promise((o=>{console.log("3"),o("4")}));(async()=>{console.log("5");return await new Promise((o=>setTimeout((()=>o("6")),0)))})().then((o=>console.log(o))),o.then((o=>console.log(o))),console.log("7");
//# sourceMappingURL=01-example-1.82336b77.js.map
