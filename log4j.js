const log = function (content, options) {
  let data = content
  data = data.split("{}")
  let newData = "";
  let i = 0;
  data.forEach((e) => {
    if (i === 0) {
      newData = e;
    } else {
      newData = newData + options[i - 1] + e;
    }
    i++
  })
  console.log(newData)
}

module.exports = log
