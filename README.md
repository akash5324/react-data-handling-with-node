# react-data-handling-with-node
### Install all the dependencies
```
npm install
```
### Run Node App
```
node app.js
```
### Node app running at
```
http://localhost:5000
```

### React app running at

```
http://localhost:3000
```

### At App.js of React app make a ajax request
```
 componentDidMount(){
    
fetch('http://localhost:5000/', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
       user:'akash yadav'
      })
    })
        .then(user => {
        
        console.log('success')
      })
        .catch(error=>console.log('error',error))

  }


```
