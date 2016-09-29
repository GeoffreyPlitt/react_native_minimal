import CryptoJS from 'crypto-js'
import env from '../env'
const cloudinary_config = env.cloudinary_config

export function upload_xhr(uri) {
  return new Promise( (resolve, reject) => {
    let timestamp = (Date.now() / 1000 | 0).toString()
    let hash_string = 'timestamp=' + timestamp + cloudinary_config.api_secret
    let signature = CryptoJS.SHA1(hash_string).toString()
    let upload_url = 'https://api.cloudinary.com/v1_1/' + cloudinary_config.cloud_name + `/image/upload`

    let xhr = new XMLHttpRequest()
    xhr.open('POST', upload_url)
    xhr.onload = () => {

    }
    let formdata = new FormData()
    formdata.append('file', {uri: `file://${uri}`, type: 'image/jpg', name: 'upload.jpg'})
    formdata.append('timestamp', timestamp)
    formdata.append('api_key', cloudinary_config.api_key)
    formdata.append('signature', signature)

    xhr.onerror = (e) => {
      reject(e.target.responseText)
    }

    xhr.onreadystatechange = () => {
      if(xhr.readyState===4) { // finished
        if(xhr.status!==200) { // failure
          reject(xhr.responseText)
        } else { // success
          try {
            const response_obj = JSON.parse(xhr.responseText)
            resolve(response_obj)
          } catch(ex) {
            reject(new Error(ex.toString() + ' : ' + xhr.responseText))
          }
        }
      }
    }
    xhr.send(formdata)
  })
}

export function upload_fetch(uri) {
  return new Promise( (resolve, reject) => {
    let timestamp = (Date.now() / 1000 | 0).toString()
    let hash_string = 'timestamp=' + timestamp + cloudinary_config.api_secret
    let signature = CryptoJS.SHA1(hash_string).toString()
    let upload_url = 'https://api.cloudinary.com/v1_1/' + cloudinary_config.cloud_name + `/image/upload`

    const formdata = new FormData()
    formdata.append('file', {uri: `file://${uri}`, type: 'image/jpg', name: 'upload.jpg'})
    formdata.append('timestamp', timestamp)
    formdata.append('api_key', cloudinary_config.api_key)
    formdata.append('signature', signature)

    fetch(upload_url, {
      method: 'POST',
      body: formdata
    })
    .then((response) => {
      if(response.status!==200) return reject(response.statusText)
      // else
      response.json()
      .then((result) => {
        resolve(result)
      })
      .catch(reject)
    })
    .catch(reject)
  })
}
