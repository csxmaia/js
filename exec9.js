const upperCasePromise = (valor) => {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        if(typeof valor === 'string') {
          resolve(valor.toUpperCase())
        } else (
          reject('the request value is not supported')
        )
      }, Math.random() * (2000 - 500) + 500)
    });
}
