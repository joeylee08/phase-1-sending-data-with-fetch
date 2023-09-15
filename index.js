function submitData(username, email) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: username,
      email: email
    })
  })
  .then(res => res.json())
  .then(json => {
    const id = json.id;
    const newId = document.createElement('p');
    newId.textContent = id;
    document.body.append(newId);
  })
  .catch(error => document.body.append(error.message));
}

submitData('joeylee08', 'joeylee08@gmail.com')
submitData('joeylee08', 'joeylee08@gmail.com')
submitData('joeylee08', 'joeylee08@gmail.com')
submitData('joeylee08', 'joeylee08@gmail.com')
submitData('joeylee08', 'joeylee08@gmail.com')
submitData('joeylee08', 'joeylee08@gmail.com')