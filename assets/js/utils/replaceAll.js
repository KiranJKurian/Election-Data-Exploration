const replaceAll = (str, replace, replaceWith) =>
  (str.indexOf(replace) >= 0) ?
    replaceAll(str.replace(replace, replaceWith), replace, replaceWith) :
    str;
export default replaceAll;
