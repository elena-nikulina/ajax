    const getData = ((str) => {
        fetch(str)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            sendData('https://jsonplaceholder.typicode.com/posts', data);
        })
        .catch(error => {
            console.log(error);
        });

    });

    //getData('db.json');

    const sendData = ((url, str) => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(str),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
    });
    getData('db.json');
    //sendData('https://jsonplaceholder.typicode.com/posts', getData('db.json'));