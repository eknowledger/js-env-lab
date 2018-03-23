import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';


describe('out first test', () =>{
  it('should pass', ()=>{         // sync test
     expect(true).to.equal(true);
  });
});


describe('index.html', ()=>{
  it('should say hello', (done) =>{
      const index = fs.readFileSync('./src/index.html', "utf-8");
      jsdom.env(index, function(err, window){                     //async test; must call done()
        const h1 = window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equal("Hello, World!?!?!");
        done(); // ending async call
        window.close();
      });
  });
});
