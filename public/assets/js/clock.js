var el = document.getElementById("clock");
const dateformat = new Intl.DateTimeFormat("fi", {
  dateStyle: "medium",
  timeStyle: "medium",
});

let dateNow = () => {
  let date = dateformat.format(new Date());
  return date;
};
el.innerText = dateNow();

/*
    setInterval is not the cleanest solution to automatically
    update time but it will work for this assignment.
*/
setInterval(() => {
  el.innerText = dateNow();
}, 1000);
