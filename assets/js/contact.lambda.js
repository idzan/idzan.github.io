const form = document.getElementById('contactMe')
const url = 'https://w93b5g7u0g.execute-api.eu-west-1.amazonaws.com/dev/email/send'
const infoDetails = document.getElementById('infoBox')
const submit = document.getElementById('submit')
function post(url, body, callback) {
  var req = new XMLHttpRequest();
  req.open("POST", url, true);
  req.setRequestHeader("Content-Type", "application/json");
  req.addEventListener("load", function () {
    if (req.status < 400) {
      callback(null, JSON.parse(req.responseText));
    } else {
      callback(new Error("Request failed: " + req.statusText));
    }
  });
  req.send(JSON.stringify(body));
}
function success () {
  infoDetails.innerHTML = 'Thanks for sending me a message! I\'ll get in touch with you.'
  submit.disabled = false
  submit.blur()
  form.name.focus()
  form.name.value = ''
  form.email.value = ''
  form.content.value = ''
}
function error (err) {
  infoDetails.innerHTML = 'There was an error with sending your message, hold up until I fix it. Thanks for waiting.'
  submit.disabled = false
  console.log(err)
}
form.addEventListener('submit', function (e) {
  e.preventDefault()
  infoDetails.innerHTML = 'Sending'
  submit.disabled = true
  const payload = {
    name: form.name.value,
    email: form.email.value,
    content: form.content.value
  }
  post(url, payload, function (err, res) {
    if (err) { return error(err) }
    success()
  })
})