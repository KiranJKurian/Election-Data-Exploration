import $ from "jquery";

const test = () => {
  $.ajax({
    url: "/db",
    method: "GET",
  }).done(function (data) {
    console.log(data);
  });
};

export default test;
