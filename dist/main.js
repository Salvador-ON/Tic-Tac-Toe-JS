!function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var a=class{displayWinner(e){this.currentPlayer=e;const t=document.createElement("div");t.id="message",t.classList.add("text-center","text-warning","font-weight-bold","h2","pt-4"),t.innerHTML=` Congratulations ${this.currentPlayer.name} Win`,document.getElementById("turnDisplay").innerHTML="",document.getElementById("cont").appendChild(t)}displaytie(e,t){this.playerX=e,this.playerO=t;const r=document.createElement("div");r.id="message",r.classList.add("text-center","text-warning","font-weight-bold","h2","pt-4"),r.innerHTML=`${this.playerX.name} and ${this.playerO.name} it's a tie, play agian`,document.getElementById("turnDisplay").innerHTML="",document.getElementById("cont").appendChild(r)}displayturn(e){this.currentPlayer=e;const t=document.createElement("div");t.id="turnDisplay",t.innerHTML="Your turn "+this.currentPlayer.name,t.classList.add("text-center","text-primary","font-weight-bold","h2","pt-4"),document.getElementById("cont").appendChild(t)}changeTurn(e){this.currentPlayer=e,document.getElementById("turnDisplay").innerHTML="Your turn "+this.currentPlayer.name}updateBoard(e){this.board=e,document.getElementById("gameBoard").childNodes.forEach((e,t)=>{e.innerText!==this.board.arrayboard[t]&&(e.innerText=this.board.arrayboard[t])})}static clearWindow(){document.getElementById("cont").innerHTML="",document.getElementById("form").innerHTML=""}static createBoard(){const e=document.createElement("div");return e.id="gameBoard",e.classList.add("board","d-flex","bg-warning","flex-wrap"),e}createSqr(e,t){this.board=e,this.board.arrayboard.forEach((e,r)=>{const a=document.createElement("div");a.id=r,a.classList.add("sqr"),t.appendChild(a)}),document.getElementById("cont").appendChild(t)}};const n=(e,t)=>({name:e,marker:t});class i{constructor(){this.domManipulation=new a}start(e,t,r){this.playerX=e,this.playerO=t,this.board=r,this.currentPlayer=this.playerX,this.drawBoard()}drawBoard(){a.clearWindow(),this.domManipulation.displayturn(this.currentPlayer);const e=a.createBoard();e.addEventListener("click",this.squareClick.bind(this)),this.domManipulation.createSqr(this.board,e)}squareClick(e){this.executeMove(e.target.id)}executeMove(e){""!==this.board.arrayboard[e]||this.gameHasWinner()||(this.board.arrayboard[e]=this.currentPlayer.marker,this.domManipulation.updateBoard(this.board),this.gameHasWinner()?this.domManipulation.displayWinner(this.currentPlayer):(this.gamenoWinner()&&this.domManipulation.displaytie(this.playerX,this.playerO),this.currentPlayer=this.currentPlayer===this.playerX?this.playerO:this.playerX,this.domManipulation.changeTurn(this.currentPlayer)))}gameHasWinner(){return[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].find(e=>""!==this.board.arrayboard[e[0]]&&""!==this.board.arrayboard[e[1]]&&""!==this.board.arrayboard[e[2]]&&this.board.arrayboard[e[0]]===this.board.arrayboard[e[1]]&&this.board.arrayboard[e[1]]===this.board.arrayboard[e[2]])}gamenoWinner(){for(let e=0;e<this.board.arrayboard.length;e+=1)if(""===this.board.arrayboard[e])return!1;return!0}}document.getElementById("init").addEventListener("click",()=>{(()=>{const e=n(document.getElementById("nameUserX").value,"X"),t=n(document.getElementById("nameUserO").value,"O"),r={arrayboard:["","","","","","","","",""]};(new i).start(e,t,r)})()})}]);