//function that will contain all the html of any email we send out

module.exports = (survey) => {
   //return '<div>' + survey.body + '</div>';
   return `<div> ${survey.body} </div>`;
}