let fDiv = document.getElementsByClassName('one')[0];
let sDiv = document.getElementsByClassName('two')[0];

let fDivVal = fDiv.textContent;
let sDivVal = sDiv.textContent;
let fDivTitle = fDiv.title;
let sDivTitle = sDiv.title;

fDiv.textContent = sDivVal;
sDiv.textContent = fDivVal + ' 2';
fDiv.title = sDivTitle;
sDiv.title = fDivTitle;