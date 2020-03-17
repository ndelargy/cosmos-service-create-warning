
function safetyToggle (e) {
  console.log(e)
  e.preventDefault
  const safetyOff = this.value === 'safety off'
  console.log(safetyOff)
  submit.disabled = safetyOff
  newSafetyValue = safetyOff ? 'safety on' : 'safety off'
  this.value = newSafetyValue
  this.innerHTML = newSafetyValue
  return false
}

console.log('wut')
document.getElementsByClassName('card-title')[0].insertAdjacentHTML(
    'beforeend',
    '<p id="warning" />'
  )
const warning = document.getElementById('warning')
const lambdaLink = '<a href="/lambdas/create" class="deep-orange-text text-darken-3">create a lambda</a>'
warning.innerHTML = 'Perhaps you want to ' + lambdaLink + '.'
warning.className = 'warning'

const inputElems = document.getElementsByTagName('input')
const submit = [...inputElems].filter((e) => { return e.type === 'submit' })[0]

submit.disabled = true

safety = '<input type="button" name="safety" class="waves-effect waves-light btn deep-orange darken-3 deep-orange-text text-lighten-5 safety" value="safety on" id="safety">'

submit.insertAdjacentHTML('afterend', safety)
document.getElementById('safety').addEventListener('click', safetyToggle)
