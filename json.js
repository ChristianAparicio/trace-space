async function getData() {
  
    try {
      let gettingData = await fetch ('https://apimocha.com/card-wrapper/cards');
      let data = await gettingData.json();
      console.log(data);
      return data
    } catch (error) {
      console.log(error);
    }
  }
  
  export default getData;
  