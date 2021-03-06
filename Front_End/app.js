//Make sure to Update #queryvalues and match the values written in the HTML file

var URL = window.location.hostname;
var updateView = async (button) => {
  //Title Query
  if (button.dataset.querytype == `by_title`) {
    let queryvalue = document.querySelector(`#titleQuery`).value;
    api = `https://${URL}/api/by_Title/${queryvalue}`;
  }
  //Course Code Query (OK!)
  if (button.dataset.querytype == `by_course_code`) {
    let queryvalue = document.querySelector(`#codeQuery`).value;
    api = `https://${URL}/api/by_course_code/${queryvalue}`;
  }
  //Professor Query (OK!)
  if (button.dataset.querytype == `by_professor`) {
    let queryvalue = document.querySelector(`#profQuery`).value;
    api = `https://${URL}/api/by_professor/${queryvalue}`;
  }
  //Course Level Query (OK!)
  if (button.dataset.querytype == `by_course_level`) {
    let queryvalue = document.querySelector(`#lvlQuery`).value;
    api = `https://${URL}/api/by_course_lvl/${queryvalue}`;
  }
  //Professor & Level
  if (button.dataset.querytype == `by_NM_n_LV`) {
    let queryvalue = document.querySelector(`queryNMnLV`).value;
    api = `https://${URL}/api/by_NM_n_LV/${queryvalue}`;
  }
  const data = await fetch(api);
  const model = await data.json();
  render(model);
}

var render = (model) => {
  var source = document.querySelector(`#results_view`).innerHTML;
  var template = Handlebars.compile(source);
  var HTML = template(model);
  document.querySelector(`#results`).innerHTML = HTML;
}