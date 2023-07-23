 async function convertjsonToHtml(jsonData) {
   const  apiUrl = 'https://www.anyjson.in/api/v2/data/jsontohtml';
    try{
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonData,
    })
    const data = await response.text();
    return data
  }
 catch(error){
 return error.message;
}
}
  export{convertjsonToHtml};