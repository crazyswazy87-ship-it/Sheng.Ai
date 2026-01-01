
const news = JSON.parse(localStorage.getItem('nipashe'))
/**nipashe */

console.log(news)


let Phone = ''
let Mail = ''

function submitt() {
  if (userPhone !== '' || userName !== '') {
  let inadi = document.querySelector('.submitt').innerHTML = 'Subscribed'
    let phone = userPhone
    let mail = userMail

      const newsletter = [{
        phone:userPhone,
        Mail:userMail
      }]

      news.push(newsletter)

      localStorage.setItem('nipashe', JSON.stringify(news) )

  }};
 


let nameInnerElement = document.querySelector('.js-phone-news')
nameInnerElement.addEventListener('input', (phone) => {
let phoneValue = phone.target.value.toLowerCase()
userPhone = phoneValue
});

let phoneInnerElement = document.querySelector('.js-email-news')
phoneInnerElement.addEventListener('input', (mail) => {
let mailValue = mail.target.value.toLowerCase()
userMail = mailValue
});

